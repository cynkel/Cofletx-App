import { oswald } from "./fonts";
import Card from "./card";

export default function Services() {
  return (
    <div className="mx-4 md:mx-56 min-w-screen">
      <h1 className={`${oswald.className} text-4xl text-center font-extrabold`}>
        Our Services
      </h1>
      <div className="flex flex-col gap-2 md:grid md:grid-cols-4">
        <Card product_title="Lorem" subtitle="Ipsum dolor sit amet" />
        <Card
          product_title="Lorem ipsum dolor"
          subtitle=" Alias quaerat dignissimos iure vel praesentium soluta, delectus, laudantium repellendus explicabo quo exercitationem voluptatibus eaque."
        />
        <Card
          product_title="Lorem ipsum dolor"
          subtitle=" Alias quaerat dignissimos iure vel praesentium soluta, delectus, laudantium repellendus explicabo quo exercitationem voluptatibus eaque."
        />
        <Card
          product_title="Lorem ipsum dolor"
          subtitle=" Alias quaerat dignissimos iure vel praesentium soluta, delectus, laudantium repellendus explicabo quo exercitationem voluptatibus eaque."
        />
      </div>
    </div>
  );
}
