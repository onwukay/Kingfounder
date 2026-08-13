"use client";

import { motion } from "framer-motion";

const cities = [
  { name: "Lagos", top: "58%", left: "46%" },
  { name: "Abuja", top: "52%", left: "49%" },
  { name: "Uyo", top: "60%", left: "51%" },
  { name: "Accra", top: "57%", left: "42%" },
  { name: "Nairobi", top: "63%", left: "58%" },
  { name: "London", top: "28%", left: "47%" },
  { name: "Toronto", top: "23%", left: "22%" },
  { name: "New York", top: "30%", left: "25%" },
];

export default function WorldMap() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-44 text-white">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[220px]" />

      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-yellow-400/10 blur-[220px]" />

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-6 py-3 text-sm uppercase tracking-[0.3em] text-yellow-300">

            GLOBAL VISION

          </span>

          <h2 className="mt-8 text-5xl font-extrabold md:text-7xl">

            Raising Leaders

            <br />

            Across The World.

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">

            Every city represents lives transformed.

            Every leader raised creates another ripple of impact.

          </p>

        </div>

        {/* World */}

        <div className="relative mx-auto mt-24 h-[700px] max-w-6xl rounded-[40px] border border-slate-800 bg-slate-900/40 backdrop-blur-xl">

          {/* Globe */}

          <div className="absolute inset-0 flex items-center justify-center">

            <div className="h-[520px] w-[520px] rounded-full border border-blue-400/20 bg-gradient-to-br from-blue-500/5 to-yellow-500/5 shadow-[0_0_120px_rgba(59,130,246,.15)]">

            </div>

          </div>

          {/* Cities */}

          {cities.map((city, index) => (

            <motion.div

              key={city.name}

              initial={{ opacity:0, scale:0 }}

              whileInView={{ opacity:1, scale:1 }}

              transition={{ delay:index*.2 }}

              viewport={{ once:true }}

              className="absolute"

              style={{
                top: city.top,
                left: city.left,
              }}

            >

              <div className="relative">

                <div className="h-4 w-4 rounded-full bg-yellow-400 shadow-[0_0_25px_#facc15]" />

                <div className="absolute left-6 top-[-4px] whitespace-nowrap text-sm text-slate-300">

                  {city.name}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}