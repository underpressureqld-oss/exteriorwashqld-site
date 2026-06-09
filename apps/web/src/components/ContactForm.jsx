import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm as useFormspree } from '@formspree/react';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { Loader2, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  property_address: z.string().min(5, 'Please enter your property address'),
  message: z.string().optional()
});

const ContactForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [state, handleSubmitFormspree] = useFormspree('xlgkjgvj');

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      property_address: '',
      message: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      // Submit to Formspree
      await handleSubmitFormspree(data);
      
      // Also save to PocketBase for record keeping
      try {
        await pb.collection('quote_requests').create(data, { $autoCancel: false });
      } catch (pbError) {
        console.warn('PocketBase save failed, but email was sent:', pbError);
      }
      
      setSubmitSuccess(true);
      toast.success('Quote request submitted! We will contact you within 24 hours.');
      form.reset();
      
      // Track conversion
      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: 'contact_form'
        });
      }
    } catch (error) {
      console.error('Error submitting quote request:', error);
      toast.error('Failed to submit quote request. Please try again or call us at 0468 848 342.');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {submitSuccess ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-900 mb-2">Quote Request Submitted!</h3>
            <p className="text-green-700 mb-4">We'll contact you within 24 hours with your free quote.</p>
            <Button 
              type="button"
              onClick={() => setSubmitSuccess(false)}
              variant="outline"
              className="border-green-300 text-green-700 hover:bg-green-100"
            >
              Submit Another Request
            </Button>
          </div>
        ) : (
          <>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">Name *</FormLabel>
                  <FormControl>
                    <Input 
                      id="name"
                      placeholder="Your full name" 
                      {...field} 
                      className="text-gray-900 placeholder:text-gray-400"
                      aria-required="true"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Email *</FormLabel>
                  <FormControl>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="your.email@example.com" 
                      {...field} 
                      className="text-gray-900 placeholder:text-gray-400"
                      aria-required="true"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="phone">Phone *</FormLabel>
                  <FormControl>
                    <Input 
                      id="phone"
                      type="tel" 
                      placeholder="0400 000 000" 
                      {...field} 
                      className="text-gray-900 placeholder:text-gray-400"
                      aria-required="true"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="service">Service Interested In *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger id="service" className="text-gray-900" aria-required="true">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Residential">Residential</SelectItem>
                      <SelectItem value="Driveway">Driveway/Concrete</SelectItem>
                      <SelectItem value="Deck/Patio">Deck/Patio</SelectItem>
                      <SelectItem value="Commercial">Commercial</SelectItem>
                      <SelectItem value="Roof Cleaning">Roof Cleaning</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="property_address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="property_address">Property Address *</FormLabel>
                  <FormControl>
                    <Textarea 
                      id="property_address"
                      placeholder="Enter your property address" 
                      {...field} 
                      className="text-gray-900 placeholder:text-gray-400 resize-none"
                      rows={3}
                      aria-required="true"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="message">Additional Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      id="message"
                      placeholder="Tell us more about your project..." 
                      {...field} 
                      className="text-gray-900 placeholder:text-gray-400 resize-none"
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={state.submitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
            >
              {state.submitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Quote Request'
              )}
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              By submitting this form, you agree to be contacted regarding your quote request.
            </p>
          </>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;