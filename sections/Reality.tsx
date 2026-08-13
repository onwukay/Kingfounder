"use client";

import { motion } from "framer-motion";

export default function Reality() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-40 text-white">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-red-500/10 blur-[180px]" />

      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.8 }}
        >

          <div className="mb-6 text-center">

            <span className="rounded-full border border-red-400/20 bg-red-500/10 px-6 py-3 text-sm uppercase tracking-[0.25em] text-red-300">

              THE REALITY

            </span>

          </div>

          <h2 className="mx-auto max-w-5xl text-center text-5xl font-extrabold leading-tight md:text-7xl">

            Most People
            <br />

            Never Discover
            <br />

            <span className="text-red-400">
              Who They Really Are.
            </span>

          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-center text-xl leading-9 text-slate-300">

            Millions of gifted young people go through life believing they
            have nothing valuable to offer.

            Not because they lack potential...

            but because nobody helped them discover it.

          </p>

        </motion.div>

      </div>

    </section>
  );
}