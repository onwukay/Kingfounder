"use client";

import { motion } from "framer-motion";

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-40 text-white">

      {/* Background */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.8 }}
          className="text-center"
        >

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-6 py-3 text-sm uppercase tracking-[0.25em] text-blue-300">

            OUR IMPACT

          </span>

          <h2 className="mt-10 text-5xl font-extrabold md:text-7xl">

            One Leader
            <br />

            Can Change A Family.

            <br />

            <span className="text-yellow-400">

              Thousands Can Change A Generation.

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">

            Our mission isn't simply to train leaders.

            It is to create a ripple effect that transforms
            families, communities and nations.

          </p>

        </motion.div>

      </div>

    </section>
  );
}