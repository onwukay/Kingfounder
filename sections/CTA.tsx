import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#010816] py-28 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="inline-block rounded-full border border-yellow-400/30 bg-slate-900/70 px-6 py-3 text-sm tracking-[0.3em] text-yellow-300">
          YOUR JOURNEY STARTS TODAY
        </div>

        <h2 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
          The Leader
          <br />
          <span className="text-blue-400">The World Needs</span>
          <br />
          Could Be You.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          Every great leader was once an ordinary person who decided to grow.
          Don't wait for confidence before you begin. Begin, and confidence will
          follow.
        </p>

        <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">
          <button className="rounded-full bg-blue-500 px-10 py-5 text-lg font-semibold transition hover:scale-105 hover:bg-blue-600">
            Join KINGFOUNDER
          </button>

          <button className="flex items-center justify-center gap-2 rounded-full border border-yellow-400 px-10 py-5 text-lg font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-slate-900">
            Explore Programs
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
