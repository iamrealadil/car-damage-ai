import Link from "next/link";

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-black text-white px-6">

      <div className="max-w-5xl mx-auto py-24">

        <h1 className="text-5xl font-bold text-center mb-16">
          How It Works
        </h1>


        <div className="space-y-16">

          <Step
            num="01"
            title="Upload Vehicle Image"
            text="Take clear photos of damaged areas and upload through dashboard."
          />

          <Step
            num="02"
            title="AI Processing"
            text="Our YOLO-based model analyzes scratches, dents and cracks."
          />

          <Step
            num="03"
            title="Damage Classification"
            text="System classifies severity and damage type automatically."
          />

          <Step
            num="04"
            title="Cost Estimation"
            text="Repair cost is calculated using trained pricing models."
          />

          <Step
            num="05"
            title="Generate Report"
            text="Download professional inspection report in PDF format."
          />

        </div>


        <div className="text-center mt-20">
          <Link href="/" className="text-blue-500">
            ← Back to Home
          </Link>
        </div>

      </div>

    </main>
  );
}


function Step({ num, title, text }: any) {
  return (
    <div className="border border-gray-700 p-6 rounded-xl">

      <div className="text-blue-500 text-3xl font-bold mb-3">
        {num}
      </div>

      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-400">
        {text}
      </p>

    </div>
  );
}
