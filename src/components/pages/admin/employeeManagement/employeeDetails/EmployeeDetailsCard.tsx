import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../states/store";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Button from "../../../../UI/Button";
import { MdSettings } from "react-icons/md";
import {
  setEditMode,
  setShowEmployeeDetails,
  setShowEmployeeForm,
} from "../../../../../states/employeeSlice";

export default function EmployeeDetailsCard() {
  const dispatch = useDispatch();
  const { selectedEmployee } = useSelector(
    (state: RootState) => state.employeeReducer,
  );
  return (
    <section className="absolute left-1/2 top-1/2 z-10 grid w-5/6 min-w-80 -translate-x-1/2 -translate-y-96 transform gap-4 rounded-md border border-slate-300 p-5 text-custom-dark-blue backdrop-blur-md md:min-w-96 lg:-translate-y-80 lg:bg-transparent xl:w-1/2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Personel Detayı</h2>

        <div className="flex items-center gap-2">
          <Button
            el="icon-button"
            title="Düzenle"
            onClick={() => {
              dispatch(setShowEmployeeForm()),
                dispatch(setEditMode(selectedEmployee!)),
                dispatch(setShowEmployeeDetails(null));
            }}
          >
            <MdSettings />
          </Button>
          <Button
            el="icon-button"
            title="Kapat"
            onClick={() => dispatch(setShowEmployeeDetails(null))}
          >
            <IoMdCloseCircleOutline />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
        <div className="h-80 w-full max-w-64 overflow-hidden rounded-lg bg-gray-200">
          <img
            className="h-full w-full object-cover"
            src={selectedEmployee?.photo}
            alt="person image"
          />
        </div>
        <div className="flex h-full flex-1 flex-col justify-between">
          <span className="flex items-center gap-2">
            <p className="font-bold">İsim: </p>
            <p>{selectedEmployee?.name}</p>
          </span>
          <span className="flex items-center gap-2">
            <p className="font-bold">Ünvan: </p>
            <p>{selectedEmployee?.title}</p>
          </span>
          <span className="flex items-center gap-2">
            <p className="font-bold">Durum: </p>
            <p>{selectedEmployee?.status}</p>
          </span>
          <span className="flex items-center gap-2">
            <p className="font-bold">Telefon: </p>
            <p>{selectedEmployee?.tel}</p>
          </span>
          <span className="flex items-center gap-2">
            <p className="font-bold">E-posta: </p>
            <p>{selectedEmployee?.mail}</p>
          </span>
          <span className="flex flex-col">
            <p className="font-bold">Adres: </p>
            <p>{selectedEmployee?.address}</p>
          </span>
        </div>
      </div>
    </section>
  );
}
