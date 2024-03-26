import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col justify-start gap-4 items-center text-justify bg-slate-300">
      {/* OUR TEAM */}
      {/* CONTAINER */}
      <div>
        <Image
          className="object-fill w-screen"
          src={"/team1.jpg"}
          width={400}
          height={300}
          alt="team"
        />
      </div>
      {/* ABOUT US */}
      <div className="bg-slate-500 ">
        {/* CONTAINER */}
        <div className="w-[80%] m-4 mx-auto sm:flex  md:justfy-center items-center  gap-4 relative">
          {/* BACK COLOR STYLE */}
          <div className="absolute hidden md:block w-full h-40 bg-yellow-500 rotate-6 "></div>

          {/* ITEMS 1 */}
          <div className="z-10 flex flex-col items-end overflow-hidden">
            <h1 className="text-[#5c253d] text-5xl sm:text-4xl md:text-5xl lg:text-6xl self-end">
              About Us
            </h1>
            <Image src={"/pic1.jpg"} alt="image one" width={400} height={300} />
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              fugit numquam iusto nobis? Saepe facere aliquid autem reiciendis,
              quidem voluptate. Architecto nobis adipisci voluptate quaerat
              saepe unde voluptas perferendis temporibus.
            </p>
            <button className="bg-[#5c253d] p-1 px-6 m-4  text-2xl text-white hover:text-[#5c253d] hover:bg-white transition-colors ">
              Learn More
            </button>
          </div>

          {/* ITEM 2 */}
          <div className="z-10 flex flex-col items-center">
            <Image src={"/pic2.jpg"} alt="image two" width={400} height={300} />
            <h1 className="text-[#5c253d] text-5xl sm:text-4xl md:text-5xl lg:text-6xl self-center">
              Let's work together
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              aspernatur adipisci consequuntur doloribus hic explicabo sequi,
              nemo expedita assumenda non porro praesentium magnam velit eum
              voluptates? Praesentium quaerat omnis molestias.
            </p>
          </div>
        </div>
      </div>

      {/* BOARD MEMEBERS */}
      {/* ITEMS CONTAINER */}
      <div className="bg-white max-w-7xl md:grid grid-cols-3 gap-4">
        {/* ITEM 1 */}
        <div className="flex flex-col items-center ">
          {/* image */}
          <Image
            src={"/mem1.jpg"}
            width={300}
            height={300}
            alt="members"
            className="w-full h-auto"
          />
          {/* title */}
          <Image src={"/name1.png"} width={300} height={300} alt="members" />
          {/* button */}
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Meet The Builders
          </button>

          {/* paragraph */}
          <div className="text-center p-4">
            <h1 className="font-bold">ACTIVE COMMUNITIES</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vitae
              quisquam modi quia dicta necessitatibus voluptatum eligendi magni,
            </p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="flex flex-col items-center">
          {/* image */}
          <Image
            src={"/mem1.jpg"}
            width={300}
            height={300}
            alt="members"
            className="w-full h-auto"
          />
          {/* title */}
          <Image src={"/name1.png"} width={300} height={300} alt="members" />
          {/* button */}
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Meet The Builders
          </button>

          {/* paragraph */}
          <div className="text-center p-4">
            <h1 className="font-bold">ACTIVE COMMUNITIES</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vitae
              quisquam modi quia dicta necessitatibus voluptatum eligendi magni,
            </p>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="flex flex-col items-center">
          {/* image */}
          <Image
            src={"/mem1.jpg"}
            width={300}
            height={300}
            alt="members"
            className="w-full h-auto"
          />
          {/* title */}
          <Image src={"/name1.png"} width={300} height={300} alt="members" />
          {/* button */}
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Meet The Builders
          </button>

          {/* paragraph */}
          <div className="text-center p-4">
            <h1 className="font-bold">ACTIVE COMMUNITIES</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vitae
              quisquam modi quia dicta necessitatibus voluptatum eligendi magni,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
