import Image from "next/image";

const Expertise = () => {
  return (
    <div className="mt-24 mb-96">
      <div className="flex flex-col md:grid grid-cols-2 divide-x">
        <div>
          <h1>CORE SERVICES</h1>
          <p className="w-48">
            Within our core market areas, Level 10 provides a comprehensive
            offering of construction services, from preconstruction to building
            turnover.
          </p>
        </div>
        <div className="md:right-0 md:w-1/2 -z-10 md:fixed">
          <Image
            className=" w-full h-80"
            src={"/service1.jpg"}
            width={100}
            height={100}
            alt="image description"
          />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
