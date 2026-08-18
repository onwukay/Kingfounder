
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { Users, GraduationCap, Briefcase, Crown } from "lucide-react";

export const metadata = {
  title: "Programs",
  description:
    "Explore KINGFOUNDER leadership, communication, and mentorship programs.",
};

const programs = [
  {
    icon: Users,
    title: "Young Leaders Program",
    age: "Ages 13–18",
    description:
      "Build confidence, communication, discipline, and leadership foundations from an early age.",
  },
  {
    icon: GraduationCap,
    title: "University Leaders Program",
    age: "Ages 18–25",
    description:
      "Develop influence, public speaking, teamwork, and purpose-driven leadership for campus and beyond.",
  },
  {
    icon: Briefcase,
    title: "Professionals Growth Program",
    age: "Career Development",
    description:
      "Master communication, personal branding, leadership presence, and professional effectiveness.",
  },
  {
    icon: Crown,
    title: "Mentorship Circle",
    age: "Leadership Multiplication",
    description:
      "Become a mentor, guide others, and multiply your impact in the next generation of leaders.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#020617] text-white">
        {/* Hero */}
        <section className="px-6 pb-20 pt-6 md:pt-16">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
              KINGFOUNDER Programs
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
              Choose Your
              <br />
              <span className="text-yellow-400">Leadership Journey.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              No matter where you are today, there is a pathway designed to help
              you discover your voice, grow in confidence, and become the leader
              you were created to be.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <div
                  key={program.title}
                  className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-slate-900/80"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-300">
                    {program.age}
                  </div>

                  <h2 className="mt-3 text-3xl font-bold text-white">
                    {program.title}
                  </h2>

                  <p className="mt-5 leading-7 text-slate-300">
                    {program.description}
                  </p>

                  <button className="mt-8 rounded-full border border-blue-500/30 px-5 py-3 text-sm font-semibold text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/10 hover:text-white">
                    Learn More →
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-800 px-6 py-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-400/20 bg-slate-900/60 p-10 text-center backdrop-blur">
            <h2 className="text-4xl font-extrabold md:text-5xl">
              Your Journey Starts With One
              <span className="text-yellow-400"> Decision.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Don't wait until you feel fully ready. Growth begins when you take
              the first step toward becoming the leader you were designed to be.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-full bg-blue-500 px-8 py-4 font-semibold text-white transition hover:bg-blue-600">
                Join A Program
              </button>

              <button className="rounded-full border border-yellow-400 px-8 py-4 font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-slate-900">
                Contact KINGFOUNDER
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
