import requests
from PIL import Image
from io import BytesIO

# The exact image URL from your Hostinger site
image_url = "https://horizons-cdn.hostinger.com/29891a98-b64e-4d1a-a351-176254719b39/ba7da534f8b455c6f65783b8ba20c7b7.jpg"

print("Downloading the heavy image...")
response = requests.get(image_url)

if response.status_code == 200:
    # Open the image from the downloaded bytes
    img = Image.open(BytesIO(response.content))
    
    # Compress and save it locally
    # Try JPEG with aggressive compression
    output_filename = "exterior-wash-hero-optimized.jpg"
    
    # JPEG with quality=15 and optimize=True for maximum compression
    img.convert('RGB').save(output_filename, "JPEG", optimize=True, quality=15)
    
    print(f"Success! Image compressed and saved as: {output_filename}")
    print("You can now upload this file to Hostinger.")
else:
    print("Failed to download the image. Check the URL.")
