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
        className="h-auto max-h-44 w-full rounded-lg object-cover lg:max-h-64"
        src={imgsrc}
        alt={header + "photo"}
      />
      <article className="absolute bottom-2 left-2 rounded-md bg-gradient-to-r from-custom-sky-blue to-custom-light-blue p-2 px-4">
        <h2 className="text-2xl font-bold">{header}</h2>
        <p className="text-xl">{description}</p>
      </article>
    </div>
  );
}
