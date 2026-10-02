import os, json, base64
from PIL import Image, ImageDraw, ImageFilter, ImageOps
import numpy as np

os.makedirs('/Users/crazy/X/SEOAGENT/ecomlayer-web/public/products', exist_ok=True)
prod_dir = '/Users/crazy/X/SEOAGENT/ecomlayer-web/public/products'

# 1. Product 1: Medicube Jelly Cream (from our verified extraction)
med_p3 = Image.open('/Users/crazy/X/SEOAGENT/3d-layer-view/medicube_case/layer_3_flawless.png')
med_p2 = Image.open('/Users/crazy/X/SEOAGENT/3d-layer-view/medicube_case/layer_2_icons_clean.png')
med_p4 = Image.open('/Users/crazy/X/SEOAGENT/3d-layer-view/medicube_case/layer_4_pristine_gradient.png')

med_p3.save(f'{prod_dir}/p1_medicube_subject.png')
med_p2.save(f'{prod_dir}/p1_medicube_icons.png')
med_p4.save(f'{prod_dir}/p1_medicube_bg.png')
print('P1 Medicube layers saved!')

# 2. Product 2: Nike Air Max Sneaker (from verified flagship demo)
snk_p3 = Image.open('/Users/crazy/X/SEOAGENT/3d-layer-view/ecom_flagship_demo/layer_3_real_product.png')
snk_p2 = Image.open('/Users/crazy/X/SEOAGENT/3d-layer-view/ecom_flagship_demo/layer_2_real_logo.png')
snk_p4 = Image.open('/Users/crazy/X/SEOAGENT/3d-layer-view/ecom_flagship_demo/layer_4_real_bg.png')

snk_p3.save(f'{prod_dir}/p2_sneaker_subject.png')
snk_p2.save(f'{prod_dir}/p2_sneaker_logo.png')
snk_p4.save(f'{prod_dir}/p2_sneaker_bg.png')
print('P2 Sneaker layers saved!')

# 3. Product 3: ANC Studio Headphones (downloaded from Unsplash)
import urllib.request
def download_img(url, path):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=10) as resp, open(path, 'wb') as f:
        f.write(resp.read())

try:
    download_img('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80', f'{prod_dir}/raw_headphones.jpg')
    hp_img = Image.open(f'{prod_dir}/raw_headphones.jpg').convert('RGBA')
    W, H = hp_img.size
    # Crop square
    min_dim = min(W, H)
    left = (W - min_dim) // 2
    top = (H - min_dim) // 2
    hp_sq = hp_img.crop((left, top, left + min_dim, top + min_dim)).resize((680, 680), Image.Resampling.LANCZOS)
    
    # Isolate subject mask via color difference (headphones on warm yellow background)
    hp_arr = np.array(hp_sq)
    # Background is yellowish: R > 200, G > 160, B < 120
    is_bg = (hp_arr[:,:,0] > 180) & (hp_arr[:,:,1] > 140) & (hp_arr[:,:,2] < 120)
    alpha = np.where(is_bg, 0, 255).astype(np.uint8)
    hp_subject = hp_arr.copy()
    hp_subject[:,:,3] = alpha
    Image.fromarray(hp_subject).save(f'{prod_dir}/p3_headphones_subject.png')
    
    # Save pure background
    hp_bg = Image.new('RGB', (680, 680), (245, 180, 50))
    hp_bg.save(f'{prod_dir}/p3_headphones_bg.png')
    print('P3 Headphones layers saved!')
except Exception as e:
    print('P3 error:', e)

# 4. Product 4: Chronograph Minimalist Watch
try:
    download_img('https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80', f'{prod_dir}/raw_watch.jpg')
    wt_img = Image.open(f'{prod_dir}/raw_watch.jpg').convert('RGBA')
    W, H = wt_img.size
    min_dim = min(W, H)
    left = (W - min_dim) // 2
    top = (H - min_dim) // 2
    wt_sq = wt_img.crop((left, top, left + min_dim, top + min_dim)).resize((680, 680), Image.Resampling.LANCZOS)
    
    # Isolate watch subject
    wt_arr = np.array(wt_sq)
    # Background is light grey/white
    diff = np.linalg.norm(wt_arr[:,:,:3].astype(float) - np.array([240, 240, 240]), axis=2)
    alpha = np.where(diff < 20, 0, 255).astype(np.uint8)
    wt_subj = wt_arr.copy()
    wt_subj[:,:,3] = alpha
    Image.fromarray(wt_subj).save(f'{prod_dir}/p4_watch_subject.png')
    
    wt_bg = Image.new('RGB', (680, 680), (242, 244, 247))
    wt_bg.save(f'{prod_dir}/p4_watch_bg.png')
    print('P4 Watch layers saved!')
except Exception as e:
    print('P4 error:', e)

