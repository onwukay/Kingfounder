
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

export const metadata = {
  title: "About",
  description:
    "Discover the vision, mission, and story behind KINGFOUNDER.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#020617] text-white">
        {/* Hero */}
        <section className="px-6 pb-20 pt-6 md:pt-16">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-flex rounded-full border border-blue-400/30 bg-slate-900/70 px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
  ABOUT KINGFOUNDER
</div>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
              Raising Confident Communicators
              <br />
              <span className="text-yellow-400">
                Who Become Transformational Leaders.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              KINGFOUNDER is a leadership and personal development movement
              dedicated to helping young people discover their voice, build
              confidence, develop communication skills, and grow into leaders
              who positively impact their communities and future generations.
            </p>
          </div>
        </section>

        {/* Founder Story */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-3">
                <Image
                  src="/founder.jpg"
                  alt="Daniel Chibuzor - Founder of KINGFOUNDER"
                  width={420}
                  height={520}
                  className="h-[520px] w-[420px] rounded-2xl object-cover object-top"
                />
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
                The Founder's Story
              </div>

              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
                Why KINGFOUNDER Exists
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                I believe the world is full of young people carrying great
                ideas, unique gifts, and untapped potential, yet many struggle
                to express themselves with confidence because they lack the
                right mentorship, guidance, and personal development
                opportunities.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                KINGFOUNDER was created to help young people discover who they
                are, develop confidence, improve communication, build
                discipline, and become leaders who transform lives through
                service and influence.
              </p>

              <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
                <p className="text-xl font-semibold italic text-white">
                  “Kings are not born; kings are made through the right
                  mentoring, discipline, communication, and personal
                  development.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-blue-500/20 bg-slate-900/60 p-8 backdrop-blur">
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                Vision
              </div>

              <h3 className="mt-3 text-3xl font-bold">
                Raising Confident Communicators who become Transformational
                Leaders
              </h3>

              <p className="mt-5 leading-7 text-slate-300">
                To raise a generation of confident communicators who lead with
                courage, wisdom, purpose, and positive influence.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-400/20 bg-slate-900/60 p-8 backdrop-blur">
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
                Mission
              </div>

              <h3 className="mt-3 text-3xl font-bold">
                Discover. Mentor. Empower.
              </h3>

              <p className="mt-5 leading-7 text-slate-300">
                To discover, mentor, and empower young people through
                communication, leadership, and personal development so they can
                find their voice and fulfill their God-given purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Program Framework */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <div className="inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-300">
                Communication Program
              </div>

              <h2 className="mt-6 text-4xl font-extrabold md:text-6xl">
                Teaching. Training. Inspiring.
              </h2>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
                  Part 1
                </div>
                <h3 className="mt-3 text-2xl font-bold">Teaching</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Teaching how life works, how to set goals, think like a
                  leader, and build a purposeful life.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-yellow-300">
                  Part 2
                </div>
                <h3 className="mt-3 text-2xl font-bold">Training</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Showing young people how to do the work through practical
                  leadership, communication, teamwork, and public speaking
                  exercises.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
                  Part 3
                </div>
                <h3 className="mt-3 text-2xl font-bold">Learning to Inspire</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Helping people see themselves better than they are and become
                  leaders who inspire transformation in others.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
