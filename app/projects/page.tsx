import ProjectStack from "../components/project_stack";

export default function Projects() {
  return (
    <div className="animate-pageOpen mt-20 mb-32 flex flex-col gap-8">
      <div className="flex justify-center">
        <h1 className="font-bold my-8 mb-0 text-6xl text-center bg-gradient-to-b from-yellow via-yellow py-3 to-dark_purple bg-clip-text text-transparent bg-center inline-block">
          Building Excellence
        </h1>
      </div>

      <ProjectStack />
    </div>
  );
}
