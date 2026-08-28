from PIL import Image
from collections import Counter
import sys

img = Image.open('/Users/jamesoyanna/.gemini/antigravity/brain/e1aaa039-fcc0-44df-9fc6-c2fef37c52b0/.user_uploaded/media_1787902392243.png')
img = img.convert('RGB')
w, h = img.size
colors = [img.getpixel((x, y)) for x in range(w) for y in range(h)]
print(Counter(colors).most_common(10))

# Sample specific points
print("Text center approx:", img.getpixel((w//2, h//2)))
print("Border approx:", img.getpixel((w//2, 10)))
print("Bg approx:", img.getpixel((w//2, h//2 - 10)))
