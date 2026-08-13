"use client";

import { motion } from "framer-motion";

const steps = [

{
number:"01",
title:"Discover",
description:
"Discover your identity, strengths, purpose and unique gifts."
},

{
number:"02",
title:"Develop",
description:
"Build confidence, discipline and emotional intelligence."
},

{
number:"03",
title:"Communicate",
description:
"Learn to express ideas with clarity, courage and influence."
},

{
number:"04",
title:"Lead",
description:
"Lead yourself before leading others."
},

{
number:"05",
title:"Serve",
description:
"Create value by serving people with excellence."
},

{
number:"06",
title:"Multiply",
description:
"Mentor others and raise the next generation."
}

];

export default function Method(){

return(

<section className="bg-[#030B20] py-40 text-white">

<div className="mx-auto max-w-6xl px-6">

<div className="text-center">

<span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-6 py-3 text-sm tracking-[0.25em] uppercase text-blue-300">

THE KINGFOUNDER METHOD™

</span>

<h2 className="mt-8 text-5xl font-extrabold md:text-7xl">

Six Steps.

<span className="text-yellow-400">

 One Mission.

</span>

</h2>

<p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">

Everything we teach follows one proven framework designed
to develop transformational leaders.

</p>

</div>

<div className="mt-24 space-y-8">

{steps.map((step,index)=>(

<motion.div

key={index}

initial={{opacity:0,x:-50}}

whileInView={{opacity:1,x:0}}

viewport={{once:true}}

transition={{duration:.5,delay:index*.15}}

className="flex items-start gap-8 rounded-3xl border border-slate-800 bg-slate-900/40 p-8"

>

<div className="text-5xl font-black text-blue-400">

{step.number}

</div>

<div>

<h3 className="text-3xl font-bold">

{step.title}

</h3>

<p className="mt-4 max-w-2xl text-slate-300 leading-8">

{step.description}

</p>

</div>

</motion.div>

))}

</div>

</div>

</section>

)

}