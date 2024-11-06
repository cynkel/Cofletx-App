import Image from "next/image";

export default function About() {
  return (
    <section className="mt-8 md:mt-32 flex flex-col items-center px-3 w-full text-gray-700 dark:text-white animate-pageOpen">
      <div>
        <h1 className="text-center bg-purple-950 bg-opacity-85 w-fit px-4 py-2 rounded-full tracking-wide text-yellow font-serif">
          About Cofletx
        </h1>
      </div>
      <div className="flex md:items-center items-end justify-center mt-8">
        <Image
          src="/staff-sm.webp"
          alt="An image of company staff"
          width={300}
          height={200}
          className="md:hidden rounded-xl"
        />
        <Image
          src="/staff.webp"
          alt="An image of company staff"
          width={800}
          height={533}
          className="hidden md:block md:rounded-xl"
        />
      </div>
      <h2 className="font-bold text-2xl w-full px-4 mt-8 mb-4">
        Over 20 years of experience. What are you building?
      </h2>
      <p className="px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        delectus dolor dolore aperiam nisi quo harum exercitationem odit esse
        asperiores doloremque dicta fugit eum, iusto tempore ducimus ipsum?
        Saepe, deleniti. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit.
        <br />
        <br />
        Exercitationem aut sint velit nemo, ullam recusandae deserunt quaerat
        eligendi, itaque cum dolorem laboriosam ipsa nihil earum pariatur nulla
        ad voluptatem modi?
      </p>
      <div className="mb-28"></div>
    </section>
  );
}
