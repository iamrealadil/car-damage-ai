import os
import random
import shutil

IMAGE_DIR = "dataset/image"
LABEL_DIR = "dataset/labels"

TRAIN_IMG = "dataset/train/images"
TRAIN_LBL = "dataset/train/labels"

VAL_IMG = "dataset/val/images"
VAL_LBL = "dataset/val/labels"


# Create folders
for path in [TRAIN_IMG, TRAIN_LBL, VAL_IMG, VAL_LBL]:
    os.makedirs(path, exist_ok=True)


images = [f for f in os.listdir(IMAGE_DIR) if f.endswith(".jpg")]

random.shuffle(images)

split = int(0.8 * len(images))  # 80% train, 20% val

train_imgs = images[:split]
val_imgs = images[split:]


def move_files(img_list, img_dst, lbl_dst):

    for img in img_list:

        label = img.replace(".jpg", ".txt")

        shutil.copy(
            os.path.join(IMAGE_DIR, img),
            os.path.join(img_dst, img)
        )

        shutil.copy(
            os.path.join(LABEL_DIR, label),
            os.path.join(lbl_dst, label)
        )


move_files(train_imgs, TRAIN_IMG, TRAIN_LBL)
move_files(val_imgs, VAL_IMG, VAL_LBL)


print("✅ Split complete")
print("Train:", len(train_imgs))
print("Val:", len(val_imgs))
