"""
Turns raw portal captures (kept out of git in .impeccable/raw) into the figures used in the docs:
crop to the part that matters, paint out the mouse pointer, blur the one word that names the account's country,
and add numbered orange rings that match the numbered steps in the text.

    python3 scripts/annotate.py

Coordinates are pixels in the raw capture.
"""
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import os

RAW, OUT = ".impeccable/raw", "public/docs/img"
ORANGE = (240, 100, 42)
FONTS = ["/System/Library/Fonts/Helvetica.ttc", "/System/Library/Fonts/SFNS.ttf", "/Library/Fonts/Arial.ttf"]

def font(size):
    for f in FONTS:
        try: return ImageFont.truetype(f, size)
        except Exception: pass
    return ImageFont.load_default()

def paint(img, box, source):
    """Cover a rectangle (a stray mouse pointer) with a clean patch of the same size copied from `source` = (dx, dy),
    so borders and card edges that run through the area stay continuous."""
    dx, dy = source
    patch = img.crop((box[0] + dx, box[1] + dy, box[2] + dx, box[3] + dy))
    img.paste(patch, (box[0], box[1]))

def blur(img, box, radius=7):
    region = img.crop(box).filter(ImageFilter.GaussianBlur(radius))
    img.paste(region, box)

def ring(draw, box, n, pos="l"):
    """pos: where the number badge sits relative to the ring: l(eft), r(ight) or t(op), so it never covers a label."""
    x0, y0, x1, y1 = box
    pad = 5
    draw.rounded_rectangle((x0 - pad, y0 - pad, x1 + pad, y1 + pad), radius=14, outline=ORANGE, width=4)
    r = 15
    mid_y = (y0 + y1) // 2
    if pos == "r": cx, cy = x1 + pad + r + 6, mid_y
    elif pos == "t": cx, cy = x0 + r + 2, y0 - pad - r - 3
    else: cx, cy = x0 - pad - r - 6, mid_y
    cx = max(cx, r + 3)
    draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=ORANGE, outline=(255, 255, 255), width=2)
    f = font(20)
    w = draw.textlength(str(n), font=f)
    draw.text((cx - w / 2, cy - 12), str(n), fill=(255, 255, 255), font=f)

def make(src, dst, crop, marks, paints=(), blurs=()):
    img = Image.open(os.path.join(RAW, src)).convert("RGB")
    for box, sample in paints: paint(img, box, sample)
    for box in blurs: blur(img, box)
    d = ImageDraw.Draw(img)
    for i, m in enumerate(marks, 1):
        box, pos = (m[0], m[1]) if isinstance(m[0], tuple) else (m, "l")
        ring(d, box, i, pos)
    img = img.crop(crop)
    img.save(os.path.join(OUT, dst), optimize=True)
    print(f"{dst}: {img.size[0]}x{img.size[1]}")

make("account-levels.jpg", "telnyx-account-levels.png", (0, 60, 1029, 1000),
     marks=[((31, 207, 113, 237), "r"), ((68, 665, 502, 818), "l"), ((31, 82, 540, 112), "r")],
     paints=[((503, 583, 532, 618), (0, 60))])
make("api-keys.jpg", "telnyx-api-keys.png", (0, 60, 1029, 430),
     marks=[((31, 207, 156, 238), "r"), ((147, 312, 300, 352), "l")])
make("public-key.jpg", "telnyx-public-key.png", (0, 60, 1029, 360),
     marks=[(71, 279, 516, 315)])
make("create-app-filled.jpg", "telnyx-create-app.png", (0, 60, 1029, 1176),
     marks=[((112, 432, 500, 465), "l"), ((112, 707, 500, 741), "l"), ((176, 789, 244, 823), "r"), ((22, 1128, 94, 1162), "t")],
     paints=[((188, 328, 218, 362), (-45, 0))])
make("app-outbound.jpg", "telnyx-app-outbound.png", (0, 70, 1029, 560),
     marks=[((232, 203, 320, 240), "t"), ((72, 396, 503, 428), "l")],
     paints=[])
make("buy-number.png", "telnyx-buy-number.png", (0, 60, 1040, 700),
     marks=[((73, 507, 505, 538), "l"), ((529, 507, 961, 538), "r"), ((73, 590, 353, 621), "l"), ((681, 590, 961, 621), "r")],
     paints=[((192, 622, 224, 654), (0, 40))], blurs=[(96, 366, 160, 390)])
make("outbound-profile.png", "telnyx-outbound-profile.png", (0, 60, 1040, 470),
     marks=[((32, 208, 149, 240), "r")],
     paints=[((192, 336, 224, 366), (0, -40))])
