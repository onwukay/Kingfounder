"use client";

import { motion } from "framer-motion";

export default function IdentitySection() {
  return (
    <section className="relative overflow-hidden bg-[#010817] py-36 text-white">

      {/* Background Glow */}
      <div className="absolute -left-40 top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="inline-flex rounded-full border border-yellow-400/30 bg-slate-900/70 px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-yellow-300"
        >
          WHY KINGFOUNDER EXISTS
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mt-10 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Great Leaders Are
          <br />

          <span className="text-blue-400">
            Made.
          </span>

          <br />

          Never Born.
        </motion.h2>

        {/* Story */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2, duration: .8 }}
          className="mx-auto mt-12 max-w-3xl text-xl leading-9 text-slate-300"
        >
          Every confident leader you admire was once an uncertain beginner.

          Leadership is not inherited.

          Confidence is not automatic.

          Purpose is not discovered by accident.

          They are developed through mentorship,
          discipline,
          communication,
          and a willingness to grow every day.
        </motion.p>

      </div>

    </section>
  );
}