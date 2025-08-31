"use client";

const banner2 = "/animation.png";
import TypeIt from "typeit-react";



export default function Home() {
  return (
    <div className="relative w-full h-[350px] md:h-screen lg:h-screen">
      {/* Swiper Background Slider */}
     
          <div
            className="home_banner_outer h-auto "
            style={{
              backgroundImage: `url(${banner2})`,
            }}
          ></div>
        

      {/* Content */}
      <div className="absolute inset-0 flex mt-20 pb-14 md:mt-32 lg:mt-20 lg:pb-0 flex-col justify-center items-start px-4 lg:px-20 z-10 text-white">
       
        <h1 className="text-2xl mt-32 md:text-4xl lg:text-6xl max-w-[750px] font-extrabold">
          <span className="text-[#cda3ff] "> AI-Driven</span> Practice for Real-World{" "}
          <span className="text-[#be9cfc]"> Interview</span> <br />
          <span className="mr-2">with -</span>
          
          <TypeIt
            className="bg-gradient-to-r from-[#FE7EFE] via-[#f8eeff] to-[#FE7EFE] bg-clip-text text-transparent py-2 px-2 rounded-full animate-gradient-signal bg-[length:200%_200%] capitalize pb-1 sm:leading-0 leading-6 text-md"
            options={{
              loop: true,
              cursor: true,
              cursorChar: "|",
            }}
            getBeforeInit={(instance) => {
              instance
                .type("Lexi Mock AI")
                .pause(1000)
                .delete()
                .type("Web Development")
                .pause(1000)
                .delete()
                .type("Full Stack Development")
                .pause(1000)
                .delete()
                .type("Front end Development")
                .pause(1000)
                .delete()
                .type("Back end Development");
              return instance;
            }}
          />
        </h1>

        <p className=" text-gray-200 mt-5 text-[13px] md:text-lg max-w-xl">
          Prepare for your next interview with personalized mock sessions powered by AI. Get real-time feedback, practice common questions, and build the confidence you need to succeed.
        </p>

            <button className="relative mt-5 px-6 py-2 font-semibold text-white rounded-full overflow-hidden group bg-purple-800 shadow-lg">
  {/* Animated Gradient Shine */}
  <span className="absolute  inset-0 w-full h-full bg-gradient-to-r from-[#a600ff] via-[#ee34ff] to-[#703192] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left blur-sm opacity-80 z-0" />

  {/* Glitter Stars on Hover */}
  <span className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 group-hover:animate-glitterStars" />

  {/* Text */}
  <span className="relative z-20">Try a Free Mock Interview Now</span>
</button>
      </div>

    </div>
  );
}
