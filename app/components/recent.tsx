import Image from "next/image";

export default function Recent() {
  return (
    <section>
      <h3 className="text-center">Recent Projects</h3>
      <div className="w-full flex justify-center">
        <div className="w-full">
          <div className="grid-rows-2 border shadow-lg w-10/12 rounded-2xl">
            <div>
              <Image src="/project-grid.webp" height={300} width={400} alt="" className="w-full h-44"/>
            </div>
            <div>
              <p>
                At Cofletx, we transform ideas into stunning architectural and construction projects. 
                From modern high-rises to sustainable homes, each project reflects our dedication to 
                quality and innovation. Explore our latest work below and see how we are shaping the
                future of design.
              </p> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
