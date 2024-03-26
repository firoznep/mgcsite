import Card from "@/components/Card";

const Project = () => {
  return (
    <div className="mt-24 mb-24">
      <h1 className="text-center text-[#5c253d] text-3xl">Our Projects</h1>

      {/* CARD */}
      <div className="flex flex-wrap justify-center gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Project;
