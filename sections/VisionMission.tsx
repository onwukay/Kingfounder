export default function VisionMission() {
  return (
    <section className="bg-[#010816] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center">
          <div className="inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-300">
            Our Foundation
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Built On A Clear
            <br />
            <span className="text-blue-400">Vision And Mission.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Vision */}
          <div className="rounded-3xl border border-blue-500/20 bg-slate-900/60 p-8 backdrop-blur">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Vision
            </div>

            <h3 className="text-3xl font-bold text-white">
              Raising Confident Communicators who become Transformational Leaders
            </h3>

            <p className="mt-5 leading-7 text-slate-300">
              We envision a generation of young people who can communicate with
              clarity, lead with courage, and influence their communities with
              wisdom, confidence, and purpose.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-3xl border border-yellow-400/20 bg-slate-900/60 p-8 backdrop-blur">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">
              Mission
            </div>

            <h3 className="text-3xl font-bold text-white">
              Discover. Mentor. Empower.
            </h3>

            <p className="mt-5 leading-7 text-slate-300">
              To discover, mentor, and empower young people through communication,
              leadership, and personal development so they can find their voice,
              grow in confidence, and fulfill their purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}