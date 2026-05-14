/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "underpressureqld@gmail.com" }],
    subject: "New Quote Request from " + e.record.get("name"),
    html: "<h2>New Quote Request</h2>" +
          "<p><strong>Customer Name:</strong> " + e.record.get("name") + "</p>" +
          "<p><strong>Email:</strong> " + e.record.get("email") + "</p>" +
          "<p><strong>Phone:</strong> " + e.record.get("phone") + "</p>" +
          "<p><strong>Service:</strong> " + e.record.get("service") + "</p>" +
          "<p><strong>Property Address:</strong> " + e.record.get("property_address") + "</p>" +
          "<p><strong>Message:</strong></p>" +
          "<p>" + (e.record.get("message") || "No additional message") + "</p>"
  });
  $app.newMailClient().send(message);
  e.next();
}, "quote_requests");