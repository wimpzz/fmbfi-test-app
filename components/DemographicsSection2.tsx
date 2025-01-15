import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Image from "next/image"; // Assuming you're using Next.js for optimized image loading
import { IoLocationSharp } from "react-icons/io5"; // Pin icon from react-icons

const DemographicsSection = () => {
  const [animate, setAnimate] = useState(false);
  const [pinPositions, setPinPositions] = useState<Array<{ x: number; y: number }>>([]);

  // Trigger animation when the component is mounted
  useEffect(() => {
    setAnimate(true);

    // Generate multiple random positions for the pins
    const numberOfPins = 10; // Change this to the number of pins you want
    const positions = Array.from({ length: numberOfPins }, () => ({
      x: Math.random() * 80 + 10, // Random X between 10% and 90% of width
      y: Math.random() * 80 + 10, // Random Y between 10% and 90% of height
    }));

    setPinPositions(positions);
  }, []);

  // Reusable CountUp Component
  const CountUpCard = ({
    start,
    end,
    label,
  }: {
    start: number;
    end: number;
    label: string;
  }) => (
    <div className="flex flex-col items-center text-gray-800">
      <h3
        className="text-5xl sm:text-6xl font-bold mb-4"
        style={{ color: "#d12f27" }}
      >
        <CountUp start={start} end={end} duration={3} />
      </h3>
      <p className="text-lg">{label}</p>
    </div>
  );

  return (
    <section
      id="demographics"
      className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-12"
    >
      <div className="flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto">
        {/* Left Side Map (Philippines) */}
        <div className="flex-1 flex justify-center items-center mb-8 lg:mb-0 relative">
          <div className="relative w-full max-w-xs sm:max-w-md">
            <Image
              src="/philippines.svg" // Update to SVG file
              alt="Philippines Map"
              width={600}
              height={400}
              objectFit="contain" // Ensures the image scales proportionally
            />
            {/* Multiple Pin Icons with Random Positions */}
            {pinPositions.map((pin, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  left: `${pin.x}%`, // X position
                  top: `${pin.y}%`,  // Y position
                  transform: "translate(-50%, -50%)", // Center the pin
                  color: "#d12f27", // Color of the pin
                }}
              >
                <IoLocationSharp size={40} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side CountUp Cards */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          {/* Centered Header */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-12">
            DEMOGRAPHICS
          </h2>

          {/* 2x2 Grid of CountUp Cards */}
          <div className="grid grid-cols-4 sm:grid-cols-2 gap-8 sm:gap-12">
            {/* Keep the grid 2x2 on large screens and single column on small screens */}
            <CountUpCard start={0} end={animate ? 57 : 0} label="CITIES" />
            <CountUpCard start={0} end={animate ? 616 : 0} label="GRADUATES" />
            <CountUpCard start={0} end={animate ? 20 : 0} label="BATCHES" />
            <CountUpCard
              start={0}
              end={animate ? 198 : 0}
              label="CURRENT SCHOLARS"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemographicsSection;
