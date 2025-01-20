type TreatmentCardProps = {
  imgsrc: string;
  header: string;
  txt: string;
};

export default function TreatmentCard({
  imgsrc,
  header,
  txt,
}: TreatmentCardProps) {
  return (
    <article>
      <header>
        <div>
          <img src={imgsrc} alt={header} />
        </div>
        <h2>{header}</h2>
      </header>
      <p>{txt}</p>
    </article>
  );
}
