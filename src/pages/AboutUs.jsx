import React from "react";
import aboutImage from "../assets/images/aboutImage.png";
import AboutUsCard from "../components/Cards/AboutUsCards";
import AboutImageTree from "../assets/images/AboutImageTree2.png";
import AboutImageTree2 from "../assets/images/AboutImageTree3.png";

function AboutUs() {
  return (
    <>
      <div className="mx-auto px-4 py-8">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-xl font-bold uppercase text-black mb-8">
          About Us
        </h2>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row mb-8">
          {/* Text Content */}
          <div className="lg:w-3/5 pr-4 mb-4 lg:mb-0">
            <p className="text-sm mb-4">
              onvallis. Sed ut vulputate nisi. Integer in felis sed leo ibulum
              venenatis. Curabitur tempor quis eros tempus lacinia. Nam
              bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur tempor quis eros tempus lacinia.
              Nam bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur tempor quis eros tempus lacinia.
              Nam bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur tempor quis eros tempus bi nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis.
            </p>
            <p className="text-sm">
              onvallis. Sed ut vulputate nisi. Integer in felis sed leo ibulum
              venenatis. Curabitur tempor quis eros tempus lacinia. Nam
              bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur tempor quis eros tempus lacinia.
              Nam bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur tempor quis eros tempus lacinia.
              Nam bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur tempor quis eros tempus bi nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-2/5 flex justify-center items-center bg-transparent shadow-none">
            <img
              src={aboutImage}
              alt="About Us"
              className="w-full max-w-sm object-cover"
            />
          </div>
        </div>

        {/* Additional Content */}
        <div className="my-4">
          <p className="text-sm mb-4">
            onvallis. Sed ut vulputate nisi. Integer in felis sed leo ibulum
            venenatis. Curabitur tempor quis eros tempus lacinia. Nam
            bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Curabitur tempor quis eros tempus lacinia. Nam
            bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Curabitur tempor quis eros tempus lacinia. Nam
            bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Curabitur tempor quis eros tempus bi nisi.
            Integer in felis sed leo vestibulum venenatis. Curabitur tempor quis
            eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi. Integer
            in felis sed leo vestibulum venenatis. Curabitur tempor quis eros
            tempus lacinia. Nam bionvallis. Sed ut vulputate nisi. Integer in
            felis sed leo vestibulum venenatis.
          </p>
        </div>

        <div className="my-4">
          <p className="text-sm">
            onvallis. Sed ut vulputate nisi. Integer in felis sed leo ibulum
            venenatis. Curabitur tempor quis eros tempus lacinia. Nam
            bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Curabitur tempor quis eros tempus lacinia. Nam
            bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Curabitur tempor quis eros tempus lacinia. Nam
            bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Curabitur tempor quis eros tempus bi nisi.
            Integer in felis sed leo vestibulum venenatis. Curabitur tempor quis
            eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi. Integer
            in felis sed leo vestibulum venenatis. Curabitur tempor quis eros
            tempus lacinia. Nam bionvallis. Sed ut vulputate nisi. Integer in
            felis sed leo vestibulum venenatis.
          </p>
        </div>

        {/* Cards and Images */}
        <AboutUsCard />

        {/* Image1 */}
        <div className="hidden md:block mt-12">
          <img
            src={AboutImageTree}
            alt="Family Tree"
            className="w-full h-auto"
          />
        </div>

        {/* Image2 */}
        <div className="flex justify-center items-center mt-12 md:hidden">
          <img
            src={AboutImageTree2}
            alt="Family Tree"
            className="w-1/2 h-auto"
          />
        </div>

        <div className="bg-green-500 w-full h-3 my-12"></div>

        {/* Call to Action */}
        <div className="text-center my-12">
          <h3 className="text-xl font-medium mb-2">
            Discover Interesting Facts About Your Family
          </h3>
          <p className="text-xs">
            With the world's largest collection of online family history
            records, Ancestry helps you find the details of your family story.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
