import Mission from "./Mission";
import Technology from "./Technology";

export default function AboutPage() {
  return (
    <main className="my-10 flex flex-grow flex-col items-center gap-5 text-custom-dark-blue lg:mx-20">
      <Mission />
      <Technology />
    </main>
  );
}
