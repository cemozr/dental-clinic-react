import Carousel from "../../UI/Carousel";
import specialistsData from "../../../data/specialists.json";

export default function Specialists() {
  return (
    <>
      <article className="mt-10 flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Uzmanlarımız İle Tanışın</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
          repellendus sapiente obcaecati reprehenderit dolores deserunt
          explicabo molestias assumenda magni culpa.
        </p>
      </article>
      <Carousel type="specialist-carousel" data={specialistsData.specialists} />
    </>
  );
}
