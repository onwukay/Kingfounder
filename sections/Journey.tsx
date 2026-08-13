"use client";

import { motion } from "framer-motion";

export default function Journey() {
  return (
    <section className="relative overflow-hidden bg-[#030B20] py-40 text-white">
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-fit rounded-full border border-blue-400/20 bg-slate-900/70 px-6 py-3 text-sm uppercase tracking-[0.3em] text-blue-300"
        >
          THE KINGFOUNDER FRAMEWORK
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-10 max-w-5xl text-center text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Every Leader
          <br />
          <span className="text-yellow-400">Starts Somewhere.</span>
        </motion.h2>

        {/* Supporting Text */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-10 max-w-3xl text-center text-xl leading-9 text-slate-300"
        >
          Leadership is not a destination. It is a journey of discovering who
          you are, developing who you can become, and using your gifts to serve
          others.
        </motion.p>
    
      </div>
      <div className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

  {/* Card 1 */}

  <motion.div
    whileHover={{ y: -8 }}
    className="rounded-3xl border border-blue-500/20 bg-slate-900/60 p-8 backdrop-blur-xl"
  >
    <div className="mb-5 text-5xl">🔍</div>

    <h3 className="text-3xl font-bold text-blue-400">
      Discover
    </h3>

    <p className="mt-4 leading-8 text-slate-300">
      Understand who you are,
      uncover your strengths,
      identify your gifts,
      and discover your purpose.
    </p>
  </motion.div>

  {/* Card 2 */}

  <motion.div
    whileHover={{ y: -8 }}
    className="rounded-3xl border border-yellow-400/20 bg-slate-900/60 p-8 backdrop-blur-xl"
  >
    <div className="mb-5 text-5xl">🔥</div>

    <h3 className="text-3xl font-bold text-yellow-400">
      Develop
    </h3>

    <p className="mt-4 leading-8 text-slate-300">
      Build discipline,
      confidence,
      communication,
      resilience,
      and strong character.
    </p>
  </motion.div>

  {/* Card 3 */}

  <motion.div
    whileHover={{ y: -8 }}
    className="rounded-3xl border border-blue-500/20 bg-slate-900/60 p-8 backdrop-blur-xl"
  >
    <div className="mb-5 text-5xl">🎤</div>

    <h3 className="text-3xl font-bold text-blue-400">
      Communicate
    </h3>

    <p className="mt-4 leading-8 text-slate-300">
      Learn to speak,
      influence,
      present ideas,
      and inspire people with confidence.
    </p>
  </motion.div>

</div>
    </section>
  );
}
