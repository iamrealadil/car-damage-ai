"use client";

import {
  ArrowRight,
  Zap,
  Shield,
  BarChart,
  Upload,
  FileText,
  Users,
  Star
} from "lucide-react";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-950 text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-12 py-6 border-b border-gray-800">

        <h1 className="text-2xl font-bold text-blue-500">
          AI Damage
        </h1>

        <div className="space-x-6 text-sm">

          <Link href="/features">Features</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/pricing">Pricing</Link>

          <Link
            href="/dashboard"
            className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Dashboard
          </Link>

        </div>
      </nav>


      {/* HERO */}
      <section className="text-center mt-28 px-6">

        <h2 className="text-6xl font-extrabold leading-tight">

          Smart AI Platform <br />
          For Vehicle Damage <br />

          <span className="text-blue-500">
            Detection & Estimation
          </span>

        </h2>


        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">

          Automate vehicle inspections using AI.
          Detect damages, generate reports and estimate repair costs
          in seconds.

        </p>


        <div className="mt-10 flex justify-center gap-5">

          <Link
            href="/dashboard"
            className="bg-blue-600 px-7 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700 transition"
          >
            Start Free <ArrowRight size={18} />
          </Link>


          <Link
            href="/how-it-works"
            className="border border-gray-700 px-7 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Watch Demo
          </Link>

        </div>


        {/* TRUST */}
        <div className="mt-16 text-gray-500 text-sm">

          Trusted by universities, insurers & workshops

          <div className="flex justify-center gap-8 mt-4 opacity-70">

            <span>🏫 LJMU</span>
            <span>🚗 AutoFix</span>
            <span>🛡️ SafeInsure</span>
            <span>🏢 RepairPro</span>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section
        id="features"
        className="mt-36 max-w-7xl mx-auto px-6"
      >

        <h3 className="text-4xl font-bold text-center mb-20">
          Platform Features
        </h3>


        <div className="grid md:grid-cols-3 gap-8">

          <Feature
            icon={<Zap />}
            title="Instant Detection"
            text="Detect scratches, dents, cracks and broken parts in real-time."
          />

          <Feature
            icon={<Shield />}
            title="High Accuracy"
            text="Trained on 10,000+ damage samples using deep learning."
          />

          <Feature
            icon={<BarChart />}
            title="Analytics"
            text="View statistics, history and performance reports."
          />

          <Feature
            icon={<Upload />}
            title="Easy Upload"
            text="Upload images via web, mobile or API."
          />

          <Feature
            icon={<FileText />}
            title="Auto Reports"
            text="Download professional PDF damage reports."
          />

          <Feature
            icon={<Users />}
            title="Multi-User"
            text="Support for inspectors, managers and admins."
          />

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section
        id="how"
        className="mt-36 max-w-6xl mx-auto px-6"
      >

        <h3 className="text-4xl font-bold text-center mb-20">
          How It Works
        </h3>


        <div className="grid md:grid-cols-3 gap-12 text-center">

          <Step
            num="01"
            title="Upload Image"
            text="Take a photo of your vehicle damage."
          />

          <Step
            num="02"
            title="AI Analysis"
            text="Our model detects and classifies damages."
          />

          <Step
            num="03"
            title="Get Report"
            text="Receive cost estimate & report instantly."
          />

        </div>

      </section>


      {/* TESTIMONIALS */}
      <section className="mt-36 bg-black/40 py-24">

        <h3 className="text-4xl font-bold text-center mb-16">
          What Users Say
        </h3>


        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          <Testimonial
            name="James R."
            role="Insurance Manager"
            text="Reduced inspection time by 70%. Highly recommended."
          />

          <Testimonial
            name="Sarah L."
            role="Garage Owner"
            text="Accurate estimates and professional reports."
          />

          <Testimonial
            name="Ahmed K."
            role="Student Researcher"
            text="Perfect for academic and real-world use."
          />

        </div>

      </section>


      {/* PRICING */}
      <section
        id="pricing"
        className="mt-36 max-w-6xl mx-auto px-6"
      >

        <h3 className="text-4xl font-bold text-center mb-20">
          Pricing Plans
        </h3>


        <div className="grid md:grid-cols-3 gap-8">

          <Price
            name="Student"
            price="Free"
            features={["50 uploads", "Basic reports", "Email support"]}
          />

          <Price
            name="Pro"
            price="£29"
            features={["Unlimited uploads", "PDF reports", "Dashboard"]}
            highlight
          />

          <Price
            name="Enterprise"
            price="Custom"
            features={["API access", "On-premise", "Priority support"]}
          />

        </div>

      </section>


      {/* CTA */}
      <section className="mt-36 text-center py-32 bg-gradient-to-r from-blue-600 to-indigo-600">

        <h3 className="text-4xl font-bold mb-6">
          Ready To Automate Inspections?
        </h3>

        <p className="mb-8 text-lg">
          Join thousands of professionals today.
        </p>

        <Link
          href="/dashboard"
          className="bg-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
        >
          Get Started Now
        </Link>

      </section>


      {/* FOOTER */}
      <footer
        id="contact"
        className="py-10 text-center text-gray-500 border-t border-gray-800"
      >
        © 2026 AI Damage Detection Platform • Moham
      </footer>

    </main>
  );
}


/* COMPONENTS */

function Feature({ icon, title, text }: any) {
  return (
    <div className="bg-gray-900/60 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition">

      <div className="text-blue-500 mb-4">
        {icon}
      </div>

      <h4 className="text-xl font-semibold mb-2">
        {title}
      </h4>

      <p className="text-gray-400 text-sm">
        {text}
      </p>

    </div>
  );
}


function Step({ num, title, text }: any) {
  return (
    <div>

      <div className="text-blue-500 text-5xl font-bold mb-4">
        {num}
      </div>

      <h4 className="text-xl font-semibold mb-2">
        {title}
      </h4>

      <p className="text-gray-400">
        {text}
      </p>

    </div>
  );
}


function Testimonial({ name, role, text }: any) {
  return (
    <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700">

      <div className="flex mb-3 text-yellow-400">
        <Star size={16} />
        <Star size={16} />
        <Star size={16} />
        <Star size={16} />
        <Star size={16} />
      </div>

      <p className="text-gray-300 mb-4">
        “{text}”
      </p>

      <div className="text-sm text-gray-500">

        <b>{name}</b>
        <br />
        {role}

      </div>

    </div>
  );
}


function Price({ name, price, features, highlight }: any) {
  return (
    <div
      className={`p-8 rounded-2xl border ${
        highlight
          ? "border-blue-500 bg-blue-500/10 scale-105"
          : "border-gray-700 bg-gray-900/60"
      }`}
    >

      <h4 className="text-xl font-bold mb-3">
        {name}
      </h4>

      <div className="text-3xl font-bold mb-6">
        {price}
      </div>

      <ul className="space-y-2 text-gray-400 text-sm">

        {features.map((f: string, i: number) => (
          <li key={i}>✓ {f}</li>
        ))}

      </ul>

    </div>
  );
}
