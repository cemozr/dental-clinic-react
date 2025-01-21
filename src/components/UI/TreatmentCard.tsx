type TreatmentCardProps = {
  imgsrc: string;
  header: string;
  description: string;
};

export default function TreatmentCard({
  imgsrc,
  header,
  description,
}: TreatmentCardProps) {
  return (
    <article className="mx-2 flex h-60 flex-col items-center justify-center rounded-md border border-transparent bg-secondary p-2 md:h-48">
      <header className="flex flex-col items-center">
        <div>
          <img
            src={imgsrc}
            alt={header}
            className="w-12 rounded-full bg-custom-sky-blue p-2"
          />
        </div>
        <h2 className="text-xl font-semibold">{header}</h2>
      </header>
      <p className="text-center">{description}</p>
    </article>
  );
}
