import Link from "next/link";

export default function Pricing() {
  return (
    <main className="min-h-screen bg-black text-white px-6">

      <div className="max-w-6xl mx-auto py-24">

        <h1 className="text-5xl font-bold text-center mb-6">
          Pricing Plans
        </h1>

        <p className="text-gray-400 text-center mb-16">
          Choose the plan that fits your business
        </p>


        <div className="grid md:grid-cols-3 gap-8">

          {/* FREE */}
          <Plan
            name="Student"
            price="£0"
            desc="For learning & research"
            features={[
              "50 uploads / month",
              "Basic reports",
              "Community support"
            ]}
          />


          {/* PRO */}
          <Plan
            name="Professional"
            price="£29"
            desc="For garages & insurers"
            highlight
            features={[
              "Unlimited uploads",
              "PDF reports",
              "Dashboard analytics",
              "Priority support"
            ]}
          />


          {/* ENTERPRISE */}
          <Plan
            name="Enterprise"
            price="Custom"
            desc="For large companies"
            features={[
              "API access",
              "Custom AI model",
              "On-premise install",
              "24/7 support"
            ]}
          />

        </div>


        {/* BACK */}
        <div className="text-center mt-16">
          <Link href="/" className="text-blue-500">
            ← Back to Home
          </Link>
        </div>

      </div>

    </main>
  );
}


function Plan({ name, price, desc, features, highlight }: any) {
  return (
    <div
      className={`p-8 rounded-2xl border ${
        highlight
          ? "border-blue-500 bg-blue-500/10 scale-105"
          : "border-gray-700 bg-gray-900"
      }`}
    >

      <h3 className="text-2xl font-bold mb-2">
        {name}
      </h3>

      <p className="text-gray-400 mb-4">
        {desc}
      </p>

      <div className="text-4xl font-bold mb-6">
        {price}
      </div>


      <ul className="space-y-2 mb-8">

        {features.map((f: string, i: number) => (
          <li key={i}>✓ {f}</li>
        ))}

      </ul>


      <button
        className={`w-full py-2 rounded-lg font-semibold ${
          highlight
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-800 hover:bg-gray-700"
        }`}
      >
        Get Started
      </button>

    </div>
  );
}
