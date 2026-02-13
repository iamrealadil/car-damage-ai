import Link from "next/link";
import { Zap, Shield, BarChart, FileText, Upload, Users } from "lucide-react";

export default function Features() {
  return (
    <main className="min-h-screen bg-black text-white px-6">

      <div className="max-w-6xl mx-auto py-24">

        <h1 className="text-5xl font-bold text-center mb-16">
          Platform Features
        </h1>


        <div className="grid md:grid-cols-3 gap-8">

          <Feature
            icon={<Zap />}
            title="Fast Detection"
            text="Analyze images in under 1 second."
          />

          <Feature
            icon={<Shield />}
            title="Secure"
            text="Encrypted uploads and GDPR compliance."
          />

          <Feature
            icon={<BarChart />}
            title="Analytics"
            text="View damage trends and reports."
          />

          <Feature
            icon={<Upload />}
            title="Easy Upload"
            text="Drag & drop or mobile upload."
          />

          <Feature
            icon={<FileText />}
            title="Auto Reports"
            text="Generate downloadable PDFs."
          />

          <Feature
            icon={<Users />}
            title="Team Access"
            text="Multiple user roles supported."
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


function Feature({ icon, title, text }: any) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">

      <div className="text-blue-500 mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm">
        {text}
      </p>

    </div>
  );
}
