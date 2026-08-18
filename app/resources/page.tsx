import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { BookOpen, Video, Download, Mic } from "lucide-react";

export const metadata = {
  title: "Resources",
  description:
    "Access KINGFOUNDER leadership videos, articles, and learning resources.",
};

const resources = [
  {
    icon: BookOpen,
    title: "Leadership Guides",
    description:
      "Practical articles and step-by-step guides on communication, confidence, discipline, and personal growth.",
  },
  {
    icon: Video,
    title: "Video Teachings",
    description:
      "Watch KINGFOUNDER teachings on leadership, purpose, goal setting, communication, and personal development.",
  },
  {
    icon: Download,
    title: "Free Resources",
    description:
      "Download worksheets, goal-setting templates, reflection journals, and leadership exercises to help you grow.",
  },
  {
    icon: Mic,
    title: "Speaking & Mentorship",
    description:
      "Access mentorship insights, speaking practice resources, and confidence-building exercises designed for young leaders.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#020617] pt-6 text-white md:pt-16">
        <section className="mx-auto max-w-7xl px-6 pt-6 pb-20 text-center md:pt-16">
          <div className="mb-6 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
            KINGFOUNDER Resources
          </div>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Grow Through <span className="text-yellow-400">Learning.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We believe transformation happens through consistent learning.
            Explore resources that will help you discover your voice, build
            confidence, strengthen communication, and develop leadership that
            creates impact.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-8 md:grid-cols-2">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <div
                  key={resource.title}
                  className="rounded-3xl border border-slate-800 bg-[#06122B] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#0A1836]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {resource.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {resource.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
