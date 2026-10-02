import re, os, time
from playwright.sync_api import sync_playwright

out_dir = '/Users/crazy/X/SEOAGENT/ecomlayer-web/public/amazon_real'
os.makedirs(out_dir, exist_ok=True)

# Top Amazon search queries for rich infographics
queries = [
    'medicube toner pads',
    'stanley tumbler 40 oz',
    'anker magsafe power bank',
    'sony wh 1000xm5 headphones'
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(
        user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        viewport={'width': 1440, 'height': 900}
    )
    page = context.new_page()

    downloaded = 0
    for q in queries:
        try:
            print(f'Searching Amazon for: {q}...')
            page.goto(f'https://www.amazon.com/s?k={q.replace(" ", "+")}', timeout=25000)
            page.wait_for_timeout(3000)
            
            # Click first organic result
            first_prod = page.locator('div[data-component-type="s-search-result"] h2 a').first
            if first_prod.count() > 0:
                first_prod.click()
                page.wait_for_timeout(4000)
                
                # Look for thumbnail list on product detail page
                # selector: #altImages ul li.imageThumbnail
                thumbs = page.locator('#altImages ul li.imageThumbnail')
                count = thumbs.count()
                print(f'Found {count} thumbnails for {q}')
                
                # Hover/click through thumbnails 1 to 5 to trigger hiRes image load
                for idx in range(1, min(count, 6)):
                    try:
                        thumbs.nth(idx).hover()
                        page.wait_for_timeout(1000)
                        
                        # Get main image src
                        main_img = page.locator('#landingImage')
                        src = main_img.get_attribute('src')
                        if src and 'media-amazon.com/images/I/' in src:
                            # Convert to high-res by removing resizing pattern like ._AC_SX679_
                            hires_url = re.sub(r'\._[A-Z0-9_,]+_\.', '.', src)
                            print(f'Got high res URL: {hires_url}')
                            
                            # Download via context
                            resp = context.request.get(hires_url)
                            if resp.status == 200:
                                filename = f'{out_dir}/amazon_{q.split()[0]}_info_{idx}.jpg'
                                with open(filename, 'wb') as f:
                                    f.write(resp.body())
                                print(f'Saved {filename}')
                                downloaded += 1
                    except Exception as e:
                        print(f'Error on thumb {idx}: {e}')
        except Exception as e:
            print(f'Error searching {q}: {e}')

    browser.close()
    print(f'Playwright finished. Total downloaded: {downloaded}')

