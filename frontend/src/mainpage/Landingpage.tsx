import { Navbar } from "../components/navbar";
import { Intro } from "../components/heroIntro";
import { Hero } from "../components/projectsSect";
import { OrbitingCirclesDemo } from "../components/techStack";
import Footer from "../components/footer";
import { Edu } from "../components/edu";
import { Spec } from "../components/tooltipComp";

export const LandingPage = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <div className="p-2 w-full">
        <Navbar />
      </div>
      <div className="w-full pt-16"> {/* Ensure space for fixed Navbar */}
        <section className="w-full py-5">
          <Intro />
        </section>
        <section className="w-full py-16">
          <Hero />
        </section>
        <section className="hidden lg:block w-full py-16">
          <OrbitingCirclesDemo />
        </section>
        <section className="w-full py-16">
          <Edu />
        </section>
        <section>
          <Spec/>
        </section>
      </div>
      <div className="p-2 w-full">
        <Footer />
      </div>
    </div>
  );
};
