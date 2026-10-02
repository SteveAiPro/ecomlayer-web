import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public', exist_ok=True)
os.makedirs('src/app', exist_ok=True)

# 1. 512x512 High-Res App Icon
size = 512
img = Image.new('RGBA', (size, size), (11, 15, 25, 255))
draw = ImageDraw.Draw(img)

# Outer glow / rounded square
draw.rounded_rectangle([(32, 32), (480, 480)], radius=96, fill=(15, 23, 42, 255), outline=(59, 130, 246, 255), width=8)

# Layer 3 (Background plate)
draw.polygon([(180, 160), (380, 160), (330, 240), (130, 240)], fill=(30, 58, 138, 200), outline=(96, 165, 250, 255))

# Layer 2 (Product plate)
draw.polygon([(180, 230), (380, 230), (330, 310), (130, 310)], fill=(16, 185, 129, 200), outline=(52, 211, 153, 255))

# Layer 1 (Text plate with lightning / T)
draw.polygon([(180, 300), (380, 300), (330, 380), (130, 380)], fill=(245, 158, 11, 230), outline=(251, 191, 36, 255))

img.save('public/icon.png')
img.save('src/app/icon.png')

# 2. Favicon Suite (.ico with multiple sizes)
img.resize((180, 180), Image.Resampling.LANCZOS).save('public/apple-touch-icon.png')
img.resize((32, 32), Image.Resampling.LANCZOS).save('public/favicon-32x32.png')
img.resize((16, 16), Image.Resampling.LANCZOS).save('public/favicon-16x16.png')

# ICO file
img.save('public/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
img.save('src/app/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

# 3. 1200x630 OpenGraph High-Res Social Card
og_w, og_h = 1200, 630
og = Image.new('RGB', (og_w, og_h), (8, 12, 20))
og_draw = ImageDraw.Draw(og)

# Background subtle grid lines
for y in range(0, og_h, 45):
    og_draw.line([(0, y), (og_w, y)], fill=(16, 24, 40), width=1)
for x in range(0, og_w, 45):
    og_draw.line([(x, 0), (x, og_h)], fill=(16, 24, 40), width=1)

# Badge
og_draw.rounded_rectangle([(80, 80), (360, 125)], radius=12, fill=(30, 58, 138), outline=(59, 130, 246), width=2)
og_draw.text((105, 92), "⚡️ AI ECOM LAYER DECOMPOSITION", fill=(147, 197, 253))

# Main Title text
og_draw.text((80, 160), "EcomLayer.ai", fill=(255, 255, 255))
og_draw.text((80, 220), "AI E-Commerce Image Layer Decomposition", fill=(56, 189, 248))
og_draw.text((80, 270), "& Live Text Editing / Translation SaaS", fill=(255, 255, 255))

# Description points
og_draw.text((80, 360), "✓ Turn flat e-commerce photos into editable layers in seconds", fill=(203, 213, 225))
og_draw.text((80, 410), "✓ Live click-to-edit copy & 1-click cross-border translation (EN, JA, ES, ZH)", fill=(203, 213, 225))
og_draw.text((80, 460), "✓ Remove logos, clean watermarks & 1-click Amazon pure white background", fill=(203, 213, 225))
og_draw.text((80, 510), "✓ Re-compose high-res master product shots instantly", fill=(52, 211, 153))

# Right side visual card
og_draw.rounded_rectangle([(760, 110), (1120, 520)], radius=24, fill=(15, 23, 42), outline=(59, 130, 246), width=3)
og_draw.rounded_rectangle([(800, 150), (1080, 480)], radius=16, fill=(248, 250, 252))
og_draw.text((830, 180), "LIVE 3D EXPLODED VIEW", fill=(15, 23, 42))

og.save('public/og-image.png')
og.save('src/app/opengraph-image.png')

print("Generated complete Favicon Suite and 1200x630 OpenGraph card successfully!")
