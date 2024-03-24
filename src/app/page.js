import BtnPrimary from "@/components/BtnPrimary";
import MapComponent from "@/components/MapComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* LANDING TOP VIEW */}
      <div className="relative bg-black">
        <video
          className=" object-cover w-full "
          loop
          muted
          autoPlay
          preload="true"
        >
          <source src="/vp2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-14 md:top-20 lg:top-44 md:text-2xl lg:text-4xl md:ml-12 lg:ml-24 xl:top-72 2xl:top-96">
          <h1 className=" text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-4xl 2xl:text-4xl bg-gradient-to-tr bg-[#5c253d] text-white w-fit p-2 tracking-widest bg-opacity-50">
            Experience the Benefits of <br /> Professional Maintenance
          </h1>
          <p className="md:text-base text-white font-mono">
            Trustworthy Maintenance since 2011
          </p>
        </div>
      </div>

      {/* MAP */}
      <MapComponent />
    </main>
  );
}
