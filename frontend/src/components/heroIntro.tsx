import "../fonts/font.css";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from "framer-motion";
// import { cn } from "../utils/cn";

export const Intro = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Freelancer', 'Designer', 'AI&ML Learner', 'Programmer'],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50
  });

  // Handle resume download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Ensure the file is in the public directory
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="block md:hidden h-56 mt-10 ml-2 mr-2 ">
        <div className="h-8 text-white font-bold text-2xl mt-1 ml-1 ">
          <span className="amaranth-bold">Sidhant Singh Rathore</span>
        </div>
        <div className="text-white ml-1 mt-1">
          I am a full stack web developer, designer, programmer, freelancer.
        </div>
        <div className="mt-10">
          <button
            onClick={handleDownload}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Resume
            </span>
          </button>
        </div>
      </div>
      <div className="hidden md:flex">
        <div className="w-fit h-96 overflow-hidden mt-10">
          <div className="m-10">
            <span className="text-fuchsia-500 font-bold text-lg">Hi I'm</span>
            <div className="amaranth-bold text-4xl text-white">
              Sidhant Singh Rathore
            </div>
            <div>
              <span className="myFont text-2xl text-orange-200">{text}</span>
              <span className="text-red-200 text-2xl ">
                <Cursor />
              </span>
            </div>
            <div className="w-80 mt-3">
              <section className="text-white">
                I am a full stack web developer, proficient programmer, and a freelancer who can make modern real-world applications with the desired specifications and functionalities.
              </section>
            </div>
            <button
              onClick={handleDownload}
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-5"
            >
              Click for Resume
            </button>
          </div>
        </div>
        <div className="relative w-48 h-48 mt-24 ml-96 overflow-hidden">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 3 }}
          >
            {/* <img src={dpPic} className="w-full h-full rounded-full " alt="Profile" /> */}
          </motion.div>
        </div>
      </div>
    </>
  );
};
