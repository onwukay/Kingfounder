"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mic,
  Compass,
  Crown,
  Brain,
} from "lucide-react";

const transformations = [
  {
    before: "Afraid to Speak",
    after: "Confident Communicator",
    icon: Mic,
  },
  {
    before: "No Direction",
    after: "Purpose Driven",
    icon: Compass,
  },
  {
    before: "Self Doubt",
    after: "Strong Mindset",
    icon: Brain,
  },
  {
    before: "Follower",
    after: "Leader",
    icon: Crown,
  },
];

export default function Transformation() {
  return (
    <section className="bg-[#020617] py-40 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-6 py-3 text-sm tracking-[0.25em] uppercase text-blue-300">
            THE TRANSFORMATION
          </span>

          <h2 className="mt-8 text-5xl font-extrabold md:text-7xl">
            Who You Are Today
            <br />
            Isn't Who You
            <span className="text-yellow-400">
              {" "}Have To Become.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Every KINGFOUNDER program is designed to help young people
            replace fear with confidence, confusion with clarity,
            and potential with purposeful action.
          </p>

        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2">

          {transformations.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-red-400">
                      {item.before}
                    </p>

                    <ArrowRight className="my-5 text-slate-500" />

                    <p className="text-2xl font-bold text-blue-400">
                      {item.after}
                    </p>

                  </div>

                  <Icon className="h-16 w-16 text-yellow-400" />

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}