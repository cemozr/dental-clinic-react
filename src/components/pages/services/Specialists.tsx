import Carousel from "../../UI/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../states/store";
import { useEffect } from "react";
import { getEmployees } from "../../../states/employeeSlice";

export default function Specialists() {
  const { employees } = useSelector(
    (state: RootState) => state.employeeReducer,
  );
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, []);
  const dentists = employees.filter((emp) => emp.type === "Hekim");

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
      {dentists.length === 0 ? (
        <h3 className="text-center text-2xl font-bold">
          Henüz burada sergileyecek personelimiz yok.🥲 Bizimle çalışmak ister
          misin?{" "}
        </h3>
      ) : (
        <Carousel type="specialist-carousel" data={dentists} />
      )}
    </>
  );
}
