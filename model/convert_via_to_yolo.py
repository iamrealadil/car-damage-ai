import json
import os
from PIL import Image

VIA_JSON = "dataset/0Train_via_annos.json"
IMAGE_DIR = "dataset/train/images"
LABEL_DIR = "dataset/train/labels"

os.makedirs(LABEL_DIR, exist_ok=True)

with open(VIA_JSON, "r") as f:
    data = json.load(f)

CLASS_ID = 0  # single class: damage

def polygon_to_bbox(xs, ys, img_w, img_h):
    x_min = max(min(xs), 0)
    x_max = min(max(xs), img_w)
    y_min = max(min(ys), 0)
    y_max = min(max(ys), img_h)

    bw = x_max - x_min
    bh = y_max - y_min

    if bw <= 1 or bh <= 1:
        return None

    xc = (x_min + bw / 2) / img_w
    yc = (y_min + bh / 2) / img_h
    bw /= img_w
    bh /= img_h

    return xc, yc, bw, bh


images_with_boxes = 0
skipped = 0

for filename, item in data.items():

    img_path = os.path.join(IMAGE_DIR, filename)
    if not os.path.exists(img_path):
        skipped += 1
        continue

    regions = item.get("regions", [])
    if not regions:
        continue

    img = Image.open(img_path)
    img_w, img_h = img.size

    label_path = os.path.join(
        LABEL_DIR,
        os.path.splitext(filename)[0] + ".txt"
    )

    written = False

    with open(label_path, "w") as f:
        for region in regions:
            xs = region.get("all_x")
            ys = region.get("all_y")

            if not xs or not ys:
                continue

            box = polygon_to_bbox(xs, ys, img_w, img_h)
            if box is None:
                continue

            xc, yc, bw, bh = box
            f.write(f"{CLASS_ID} {xc} {yc} {bw} {bh}\n")
            written = True

    if written:
        images_with_boxes += 1

print("✅ Conversion complete!")
print("Images with boxes:", images_with_boxes)
print("Skipped images:", skipped)
