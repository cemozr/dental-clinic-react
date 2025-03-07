import { IoMdCloseCircleOutline } from "react-icons/io";
import Button from "../../../../UI/Button";
import { useState } from "react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { setEditMode } from "../../../../../states/appointmentSlice";
import { useDispatch } from "react-redux";
import EditForm from "./EditForm";

export default function AppointmentEdit() {
  const dispatch = useDispatch();

  const [index, setIndex] = useState<number>(0);
  return (
    <div className="absolute left-1/2 top-1/2 z-20 min-w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-md border border-slate-300 p-6 backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Randevuyu Düzenle</h2>

        <Button
          el="icon-button"
          title="Kapat"
          onClick={() => dispatch(setEditMode(null))}
        >
          <IoMdCloseCircleOutline />
        </Button>
      </div>
      <EditForm index={index} />
      <div className="mt-4 flex justify-center gap-2">
        <Button
          el="icon-button"
          onClick={() => index > 0 && setIndex(index - 1)}
        >
          <MdArrowBack size={35} />
        </Button>
        <Button
          el="icon-button"
          onClick={() => index < 2 && setIndex(index + 1)}
        >
          <MdArrowForward size={35} />
        </Button>
      </div>
    </div>
  );
}
