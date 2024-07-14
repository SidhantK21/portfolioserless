// import React from "react";
// import Man from "../image/images/Man.png"
// import Manclient from "../image/images/Manclient.png"
import { AnimatedTooltip } from "./tooltip"
import Xd from "../image/images/Xd.jpg";
import aiml from "../image/images/aiml.jpg";
import code from "../image/images/code.jpg";
import freelancer from "../image/images/freelancer.jpg";
import programmer from "../image/images/programmer.jpg";

const people = [
  {
    id: 1,
    name: "Full stack Web developer",
    image:
        code
  },
  {
    id: 2,
    name: "Freelancer",
    image:
        freelancer
  },
  {
    id: 3,
    name: "AI &Machine Learning",
    image:
        aiml
  },
  {
    id: 4,
    name: "Designer",
    image:
        Xd
  },
  {
    id: 5,
    name: "Programmer",
    image:
        programmer
  },
  
];

export function Spec() {
  
  return (
    <>
    
    {/* specs section for the smaller screens  */}
    <span   className="block md:hidden text-center text-white mt-24 font-bold text-lg">My Specializations</span>
    <div className="md:hidden flex flex-row items-center justify-center mb-10 w-full mt-16">
      <AnimatedTooltip items={people} />
    </div>


    </>
  );
}
