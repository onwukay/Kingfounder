"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah A.",
    role: "University Student",
    story:
      "Before joining KINGFOUNDER, I was afraid of speaking in public. Today I confidently lead my fellowship and mentor younger students.",
  },
  {
    name: "David E.",
    role: "Young Professional",
    story:
      "KINGFOUNDER didn't just teach leadership—it helped me discover purpose, improve my confidence, and communicate with clarity.",
  },
  {
    name: "Grace U.",
    role: "Entrepreneur",
    story:
      "The mentorship changed how I see myself. I stopped waiting for opportunities and started creating them.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#030B20] py-40 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-6 py-3 uppercase tracking-[0.3em] text-sm text-yellow-300">

            LIFE TRANSFORMATION

          </span>

          <h2 className="mt-8 text-5xl font-extrabold md:text-7xl">

            Real People.

            <br />

            <span className="text-blue-400">

              Real Growth.

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">

            Leadership isn't measured by certificates.

            It's measured by transformed lives.

          </p>

        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          {testimonials.map((person, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl"
            >

              <div className="mb-6 text-5xl">
                💬
              </div>

              <p className="leading-8 text-slate-300 italic">

                "{person.story}"

              </p>

              <div className="mt-8">

                <h3 className="text-xl font-bold">

                  {person.name}

                </h3>

                <p className="text-yellow-400">

                  {person.role}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}