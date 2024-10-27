import Card from "@/app/components/card";

export default function Services() {
  return (
    <div className="w-full h-full animate-pageOpen">
      <div className="md:mt-24">
        <h1 className="text-center mt-6 mb-8 text-xl font-bold text-purple-950 dark:text-white md:text-2xl lg:text-3xl">
          What Services do we offer?
        </h1>
        <div className="px-6 md:px-8 lg:px-16 xl:px-32 grid grid-cols-1 grid-rows-services gap-3 md:grid-cols-services lg:grid-cols-lg">
          <Card
            title="Building Design"
            subtext="Transformative building design that harmonizes creativity and functionality, crafting sustainable solutions tailored to your vision."
            imgSource="/building-sm.png"
          />
          <Card
            title="Building Estimation"
            subtext="Accurate building estimation that ensures financial clarity and helps you make informed decisions for your projects"
            imgSource="/estimate-sm.jpg"
          />
          <Card
            title="Project Mgmt."
            subtext="Expert oversight guaranteeing timely delivery and seamless coordination, ensuring the success of your projects."
            imgSource="/safety.png"
          />
          <Card
            title="CAD / Plan printing"
            subtext="Precision printing services that bring your architectural designs to life with high-quality, large-format outputs."
            imgSource="/print.jpg"
          />
        </div>
      </div>
      <div className="pb-36"></div>
    </div>
  );
}
