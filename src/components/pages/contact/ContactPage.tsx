import Info from "./Info";
import Location from "./Location";

export default function ContactPage() {
  return (
    <main className="m-5 my-10 flex-grow text-custom-dark-blue lg:mx-20">
      <section className="mb-4 lg:w-full lg:text-center">
        <h1 className="mb-4 text-4xl font-bold">Bizimle İletişime Geç</h1>
        <p>Dişlerinizi tedavi ettirmek için hemen bize ulaşın.</p>
      </section>
      <section className="grid gap-4 lg:grid-cols-3">
        <Location />
        <Info />
      </section>
    </main>
  );
}
