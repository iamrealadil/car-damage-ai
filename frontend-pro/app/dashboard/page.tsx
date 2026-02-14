"use client";

import { useState } from "react";
import {
  Upload,
  Image as ImageIcon,
  Activity,
  FileText,
  Clock,
} from "lucide-react";

export default function Dashboard() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function analyze() {
    if (!file) return alert("Upload an image");

    try {
      setLoading(true);

      const form = new FormData();
      form.append("file", file);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/analyze`,{
          method: "POST",
          body: form,
        }
      );

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();

      setResult(data);

    } catch (err) {
      alert("Analysis failed. Try again.");
      console.error(err);

    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-950 border-r border-gray-800 p-6">

        <h2 className="text-2xl font-bold mb-10">
          🚗 AI Damage
        </h2>

        <nav className="space-y-4 text-gray-400">

          <Nav icon={<Activity />} text="Dashboard" active />
          <Nav icon={<Upload />} text="Upload" />
          <Nav icon={<FileText />} text="Reports" />
          <Nav icon={<Clock />} text="History" />

        </nav>

      </aside>


      {/* MAIN */}
      <section className="flex-1 p-10 space-y-8">

        {/* HEADER */}
        <header className="flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-400">
              AI Vehicle Damage Analysis
            </p>
          </div>

          <div className="bg-gray-900 px-4 py-2 rounded-full text-sm">
            ● System Online
          </div>

        </header>


        {/* UPLOAD CARD */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Upload */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Upload size={18} />
              Upload Image
            </h3>

            <input
              type="file"
              accept="image/*"
              className="w-full bg-black border border-gray-700 p-2 rounded"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) {
                  setFile(f);
                  setPreview(URL.createObjectURL(f));
                }
              }}
            />

            <button
              onClick={analyze}
              className="w-full mt-4 bg-blue-600 py-2 rounded hover:bg-blue-700 transition"
            >
              Analyze
            </button>

            {loading && (
              <p className="mt-3 text-blue-500 animate-pulse">
                Processing AI...
              </p>
            )}

          </div>


          {/* PREVIEW */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <ImageIcon size={18} />
              Preview
            </h3>

            {preview ? (
              <img
                src={preview}
                className="w-full h-64 object-contain rounded bg-black"
              />
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}

          </div>

        </div>


        {/* RESULTS */}
        {result && (

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">

            <h3 className="font-semibold mb-6">
              AI Analysis Results
            </h3>


            {/* SUMMARY */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">

              <Stat
                label="Damages"
                value={result.damage_report.length}
              />

              <Stat
                label="Total Cost"
                value={`£${result.total_estimated_cost}`}
              />

              <Stat
                label="Confidence"
                value={`${Math.round(
                  result.detections[0]?.confidence * 100
                )}%`}
              />

            </div>


            {/* DETAILS */}
            <div className="space-y-4">

              {result.damage_report.map(
                (d: any, i: number) => (

                  <div
                    key={i}
                    className="bg-black border border-gray-700 rounded p-4"
                  >

                    <p>
                      <b>Type:</b> {d.damage_type}
                    </p>

                    <p>
                      <b>Severity:</b> {d.severity}
                    </p>

                    <p>
                      <b>Cost:</b> £{d.estimated_cost}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        )}

      </section>

    </main>
  );
}


/* COMPONENTS */

function Nav({ icon, text, active }: any) {
  return (
    <div
      className={`flex items-center gap-3 p-2 rounded cursor-pointer ${
        active
          ? "bg-blue-600 text-white"
          : "hover:bg-gray-800"
      }`}
    >
      {icon}
      {text}
    </div>
  );
}


function Stat({ label, value }: any) {
  return (
    <div className="bg-black border border-gray-700 rounded p-4 text-center">

      <p className="text-gray-400 text-sm mb-1">
        {label}
      </p>

      <p className="text-2xl font-bold">
        {value}
      </p>

    </div>
  );
}
