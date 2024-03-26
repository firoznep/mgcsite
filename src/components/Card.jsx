import BtnPrimary from "@/components/BtnPrimary";

const Card = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-4 relative overflow-hidden ">
      <a href="#">
        <img className="rounded-t-lg" src="/pic2.jpg" alt="my image" />
      </a>
      <div className="p-5 bg-[#5c253d]   hover:cursor-pointer  bg-opacity-30 ">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Noteworthy technology acquisitions 2011
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <BtnPrimary title={"Read More"} />
      </div>
    </div>
  );
};

export default Card;
