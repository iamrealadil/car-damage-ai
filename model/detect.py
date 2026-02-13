from ultralytics import YOLO

# Load model once (important for performance)
model = YOLO("yolov8n.pt")

def run_detection(image_path):
    results = model(image_path)

    detections = []

    for r in results:
        for box in r.boxes:
            cls_id = int(box.cls[0])
            conf = float(box.conf[0])
            label = model.names[cls_id]

            detections.append({
                "label": label,
                "confidence": round(conf, 3)
            })

    return detections
