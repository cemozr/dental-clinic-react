type SpecialistCardProps = {
  imgsrc: string;
  header: string;
  description: string;
};

export default function SpecialistCard({
  imgsrc,
  header,
  description,
}: SpecialistCardProps) {
  return (
    <div className="relative mx-2 flex flex-col">
      <img
        className="max-h-52 w-full rounded-lg object-cover md:max-h-56 lg:h-72"
        src={imgsrc}
        alt={header + "photo"}
      />

      <article className="absolute bottom-2 left-2 rounded-md bg-gradient-to-r from-custom-sky-blue to-custom-light-blue px-4 py-1 lg:py-2">
        <h2 className="text-xl font-bold lg:text-2xl">{header}</h2>
        <p className="text-lg lg:text-xl">{description}</p>
      </article>
    </div>
  );
}
