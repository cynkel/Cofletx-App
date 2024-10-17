import { oswald } from "./fonts";
import Card from "./card";

export default function Services() {
  return (
    <div className="mx-4 md:w-full md:flex md:items-center md:justify-center mb-2">
      <div className="md:max-w-screen-md"> 
      <h1 className={`${oswald.className} mb-2 text-4xl text-center font-extrabold dark:text-white`}>
        Our Services
      </h1>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-5">
        <Card product_title="Lorem" subtitle="Alias quaerat dignissimos iure vel praesentium soluta, delectus" />
        <Card
          product_title="Lorem ipsum dolor"
          subtitle="Alias quaerat dignissimos iure vel praesentium soluta, delectus"
        />
        <Card
          product_title="Lorem ipsum dolor"
          subtitle="Alias quaerat dignissimos iure vel praesentium soluta, delectus"
        />
        <Card
          product_title="Lorem ipsum dolor"
          subtitle="Alias quaerat dignissimos iure vel praesentium soluta, delectus,"
        />
        <Card
          product_title="Lorem ipsum dolor"
          subtitle="Alias quaerat dignissimos iure vel praesentium soluta, delectus,"
        />
      </div> 
      </div>
    </div>
  );
}
