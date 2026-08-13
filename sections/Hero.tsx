import CountUp from "@/components/CountUp";
import FloatingParticles from "@/components/FloatingParticles";

import { Users, UserRoundCheck, GraduationCap, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#020617] via-[#030B20] to-[#020617] text-white">
      <FloatingParticles />
      {/* Background Glow */}
      {/* Left Blue Glow */}

      <div className="absolute -left-40 top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-blue-500/20 blur-[180px]" />

      {/* Right Gold Glow */}

      <div className="absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-yellow-400/20 blur-[180px]" />

      {/* Center Glow */}

      <div className="absolute left-1/2 top-52 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-[150px]" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-start px-6 pt-36 pb-16 text-center">
        <div className="mb-8 rounded-full border border-yellow-400/30 bg-slate-900/70 px-6 py-3 text-sm font-medium text-yellow-300 shadow-lg shadow-yellow-500/20 backdrop-blur-md">
          🌍 Raising the Next Generation of Transformational Leaders
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl lg:text-8xl">
          The World Doesn't Need
          <br />
          More Followers.
          <br />
          <span className="text-yellow-400">It Needs</span>
          <br />
          <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            Confident Leaders.
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Discover your voice. Master communication. Develop character. Lead
          with confidence.
          <br />
          <br />
          KINGFOUNDER equips young people with the skill, mindset and mentorship
          to transform their lives and positively impact the world.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-blue-500 px-8 py-4 text-lg font-semibold shadow-lg shadow-blue-500/30 transition hover:scale-105 hover:bg-blue-600">
            Start Your Leadership Journey →
          </button>

          <button className="rounded-full border border-yellow-400 px-8 py-4 text-lg font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-slate-900">
            Become a Mentor
          </button>
        </div>

        {/* Statistics */}
        {/* Statistics */}

        <div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-10 border-t border-slate-800 pt-10 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <Users className="mb-3 h-10 w-10 text-blue-400" />

            <h2 className="text-5xl font-bold text-blue-400">
              <CountUp end={1000} />
            </h2>

            <p className="mt-2 text-slate-300">Young Leaders</p>
          </div>

          <div className="flex flex-col items-center">
            <UserRoundCheck className="mb-3 h-10 w-10 text-yellow-400" />

            <h2 className="text-5xl font-bold text-yellow-400">
              <CountUp end={50} />
            </h2>

            <p className="mt-2 text-slate-300">Mentors</p>
          </div>

          <div className="flex flex-col items-center">
            <GraduationCap className="mb-3 h-10 w-10 text-blue-400" />

            <h2 className="text-5xl font-bold text-blue-400">
              <CountUp end={10} />
            </h2>

            <p className="mt-2 text-slate-300">Leadership Programs</p>
          </div>

          <div className="flex flex-col items-center">
            <Star className="mb-3 h-10 w-10 text-yellow-400" />

            <h2 className="text-5xl font-bold text-yellow-400">
              <CountUp end={5} />
            </h2>

            <p className="mt-2 text-slate-300">Core Values</p>
          </div>
        </div>
      </div>
    </section>
  );
}
