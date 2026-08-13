import Image from "next/image";

export default function Founder() {
  return (
    <section className="bg-[#020617] py-32 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Image */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-3">
            <Image
              src="/founder.jpg"
              alt="Daniel Chibuzor - Founder of KINGFOUNDER"
              width={420}
              height={520}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm uppercase tracking-[0.25em] text-blue-300">
            MEET THE FOUNDER
          </span>

          <h2 className="mt-6 text-5xl font-extrabold md:text-6xl">
            Daniel
            <span className="text-blue-400"> Chibuzor</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            I believe the world is filled with young people carring unique gift,
            idea, and potential capable of changing the world.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            KINGFOUNDER was created to help young people discover who they are,
            develop confidence, improve communication, build discipline, and
            grow into leaders who positively impact their communities and future
            generations.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Leadership is not about being famous. It is about becoming the best
            version of yourself and helping others rise along the way.
          </p>

          <div className="mt-8 border-l-4 border-yellow-400 pl-4">
            <p className="text-xl font-semibold italic text-white">
              "Great leaders are made through mentorship, discipline,
              communication, and personal development."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
