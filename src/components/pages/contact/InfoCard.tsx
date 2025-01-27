import { IconType } from "react-icons";

type InfoCardProps = {
  icon: IconType;
  header: string;
  text: string;
};

export default function InfoCard({ icon: Icon, header, text }: InfoCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-md border border-custom-sky-blue bg-secondary p-4">
      <div className="rounded-full bg-custom-mid-blue p-2">
        {<Icon color="white" size="1.5em" />}
      </div>
      <div>
        <h2 className="font-bold">{header}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
