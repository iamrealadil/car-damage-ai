import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

from model.detect import run_detection
from model.cost import estimate_damage_and_cost


app = FastAPI(
    title="AI Car Damage Detection System",
    description="Final Year Project - LJMU",
    version="3.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@app.get("/")
def home():
    return {"status": "running"}


@app.post("/analyze")
async def analyze_image(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    detections = run_detection(file_path)

    damage_report, total_cost = estimate_damage_and_cost(detections)

    return {
        "filename": file.filename,
        "detections": detections,
        "damage_report": damage_report,
        "total_estimated_cost": total_cost
    }
