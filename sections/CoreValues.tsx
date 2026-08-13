import { ShieldCheck, MessageCircle, Sparkles, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Character",
    description:
      "True leadership begins with integrity, discipline, honesty, and personal responsibility.",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description:
      "We help young people find their voice, speak with confidence, and influence with wisdom.",
  },
  {
    icon: Sparkles,
    title: "Growth",
    description:
      "Every individual has the potential to improve, learn, develop, and become better every day.",
  },
  {
    icon: HeartHandshake,
    title: "Service",
    description:
      "Leadership is not about status; it is about using your gifts to serve and uplift others.",
  },
]

export default function CoreValues() {
  return (
    <section className="bg-[#020617] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            What We Stand For
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            The Values That Shape
            <br />
            <span className="text-yellow-400">Every KINGFOUNDER Leader.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Skills may open doors, but values determine how far a leader can go
            and how many lives they can positively influence.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-slate-900/80"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold text-white">{value.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}