"use client";

import { motion } from "framer-motion";

import {
  Rocket,
  GraduationCap,
  Users,
  Crown,
} from "lucide-react";

const programs = [

  {
    title:"Young Leaders",

    subtitle:"Age 13-18",

    description:
      "Build confidence, discipline and communication from an early age.",

    icon:Users,

    color:"text-blue-400",
  },

  {
    title:"University Leaders",

    subtitle:"18-25",

    description:
      "Develop leadership skills that prepare you for influence and purpose.",

    icon:GraduationCap,

    color:"text-yellow-400",
  },

  {
    title:"Professionals",

    subtitle:"Career Growth",

    description:
      "Master communication, leadership and personal effectiveness.",

    icon:Rocket,

    color:"text-blue-400",
  },

  {
    title:"Mentorship Circle",

    subtitle:"Lead Others",

    description:
      "Become a mentor and multiply your impact in the next generation.",

    icon:Crown,

    color:"text-yellow-400",
  }

];

export default function Programs(){

return(

<section className="bg-[#030B20] py-40 text-white">

<div className="mx-auto max-w-7xl px-6">

<div className="text-center">

<span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-6 py-3 uppercase tracking-[0.25em] text-sm text-yellow-300">

PROGRAM PATHWAYS

</span>

<h2 className="mt-8 text-5xl font-extrabold md:text-7xl">

Choose

<span className="text-blue-400">

 Your Journey.

</span>

</h2>

<p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">

No matter where you are today,

there is a pathway designed to help you become the leader you were created to be.

</p>

</div>

<div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

{programs.map((program,index)=>{

const Icon=program.icon;

return(

<motion.div

key={index}

whileHover={{y:-10}}

className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl"

>

<Icon className={`mb-8 h-12 w-12 ${program.color}`} />

<h3 className="text-2xl font-bold">

{program.title}

</h3>

<p className="mt-2 text-yellow-400">

{program.subtitle}

</p>

<p className="mt-6 leading-8 text-slate-300">

{program.description}

</p>

<button className="mt-8 font-semibold text-blue-400">

Learn More →

</button>

</motion.div>

)

})}

</div>

</div>

</section>

)

}