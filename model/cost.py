# model/cost.py


LABOR_RATE = 55  # £/hour


# Average part prices (UK/EU)
PART_COST = {
    "bumper": 280,
    "door": 420,
    "hood": 550,
    "fender": 250,
    "headlight": 240,
    "mirror": 160,
    "unknown": 180
}


# Repair price ranges
REPAIR_RANGE = {
    "scratch": (90, 220),
    "dent": (140, 320),
    "crack": (200, 380),
}


SEVERITY_HOURS = {
    "minor": 1.5,
    "moderate": 3,
    "severe": 4.5
}


def guess_damage_from_image(label):

    label = label.lower()

    # Override bad YOLO labels
    if "clock" in label:
        return "crack"

    if "broken" in label:
        return "crack"

    if "scratch" in label:
        return "scratch"

    if "dent" in label:
        return "dent"

    return "crack"


def guess_part(label):

    label = label.lower()

    if "bumper" in label:
        return "bumper"

    if "door" in label:
        return "door"

    if "hood" in label:
        return "hood"

    if "light" in label:
        return "headlight"

    if "mirror" in label:
        return "mirror"

    return "bumper"   # Default: most damage is bumper


def estimate_damage_and_cost(detections):

    report = []
    total = 0


    for det in detections:

        label = det["label"]
        conf = det["confidence"]


        # Smarter guessing
        part = guess_part(label)
        dmg = guess_damage_from_image(label)


        # Severity
        if conf < 0.45:
            severity = "minor"
        elif conf < 0.7:
            severity = "moderate"
        else:
            severity = "severe"


        # Decide repair vs replace
        if dmg in REPAIR_RANGE and severity != "severe":

            low, high = REPAIR_RANGE[dmg]
            cost = int((low + high) / 2)

            action = "repair"

        else:

            part_price = PART_COST.get(part, 180)
            labor = SEVERITY_HOURS[severity] * LABOR_RATE

            cost = int(part_price + labor)

            action = "replace"


        report.append({
            "object": part,
            "damage_type": dmg,
            "severity": severity,
            "action": action,
            "estimated_cost": cost
        })


        total += cost


    return report, total
