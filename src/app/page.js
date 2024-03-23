import Image from "next/image";
import { FaLocationDot, FaBusinessTime, FaPhone } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
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

        <div className="absolute top-28">
          <h1 className="bg-gradient-to-tr bg-[#5c253d] text-white w-fit p-2 tracking-widest bg-opacity-50">
            BUILDING AT THE <br /> HIGHEST LEVEL
          </h1>
        </div>
      </div>

      {/*       
      <div className="min-h-[2000px] bg-cyan-100 max-w-64 text-center m-auto">
        <p>
          Level 10 Construction is a California-based general contractor driven
          to deliver construction projects at the highest level. With decades of
          experience building high-profile projects in the Golden State, our
          founding team set out to create a new kind of construction company,
          one built on long-term relationships, transparent business practices
          and an adaptive company culture. That vision and its values have given
          rise to one of the fastest-growing, most-respected builders in the
          western United States.
        </p>
      </div> */}

      {/* MAP */}

      <div className="md:flex justify-center items-center p-4 mb-12 mt-12 ">
        <div className="md:flex-grow text-blue-700">
          <h2 className="flex gap-2  ">
            <FaLocationDot />
            <div className="flex flex-col ">
              <span>Mesopotamia For General Contracting</span>
              <span>Building 255, Zone 41, Street, 230 C Ring Rd, Doha</span>
            </div>
          </h2>

          {/* WORKING TIMING */}
          <div className="flex gap-2 items-start mt-4 mb-4">
            <FaBusinessTime />

            <div className="flex gap-2">
              <div className="flex flex-col ">
                <span>Sunday</span>
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Wednesday</span>
                <span>Thursday</span>
                <span>Friday</span>
                <span>Monday</span>
              </div>
              <div className="flex flex-col">
                <span>8 AM 5:30 PM</span>
                <span>8 AM 5:30 PM</span>
                <span>8 AM 5:30 PM</span>
                <span>8 AM 5:30 PM</span>
                <span>8 AM 5:30 PM</span>
                <span>Closed</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex gap-2">
            <FaPhone />
            <div className="flex flex-col ">
              <span>+974-4032033</span>
              <span>+974-30038681</span>
            </div>
          </div>
        </div>
        <div className="md:flex-grow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2398134027117!2d51.52786627415609!3d25.262517029054123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cff60bd0aa19%3A0x84885e188a84ad25!2sMGC!5e0!3m2!1sen!2sqa!4v1711225746032!5m2!1sen!2sqa"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
