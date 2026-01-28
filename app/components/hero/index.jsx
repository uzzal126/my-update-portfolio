import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <div
      className="bg-primary"
      style={{ backgroundImage: `url("/images/bg/pattern.png")` }}
    >
      <div className="container">
        <div className="grid grid-cols-12 gap-5 sm:gap-7 items-center py-16 md:py-24">
          <div className="col-span-12 md:col-span-6 order-2 md:order-1">
            <div className="about-me">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-3 font-semibold">
                <span className="block">Hello There,</span>
                I'm Uzzal Hossain
              </h1>
              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-8">
                I'm a skilled front-end developer, crafting interactive and
                user-centric web experiences through the art of code.
              </p>
              <div className="mt-8 flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/uzzal126"
                  target="_blank"
                  className="text-white text-xl transition-all duration-300 w-9 h-9 rounded bg-primary/40 flex justify-center items-center hover:text-primary hover:bg-white"
                  rel="noreferrer"
                >
                  <BsLinkedin className="inline-block" />
                </a>
                <a
                  href="https://github.com/uzzal126"
                  target="_blank"
                  className="text-white text-xl transition-all duration-300 w-9 h-9 rounded bg-primary/40 flex justify-center items-center hover:text-primary hover:bg-white"
                  rel="noreferrer"
                >
                  <BsGithub className="inline-block" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 order-1 md:order-2">
            <div className="flex justify-center md:justify-end rounded-2xl overflow-hidden">
              <Image
                src="/images/hero/uzzal.jpg"
                alt="Uzzal Hossain"
                width="400"
                height="450"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
