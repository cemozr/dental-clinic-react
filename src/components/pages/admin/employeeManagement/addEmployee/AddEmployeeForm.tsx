import { IoPersonOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdCloseCircleOutline } from "react-icons/io";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { employeeFormSchema } from "./employeeFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../states/store";
import {
  addEmployee,
  setEditMode,
  setShowEmployeeForm,
  uploadImage,
} from "../../../../../states/employeeSlice";

type EmployeeForm = z.infer<typeof employeeFormSchema>;

export default function AddEmployeeForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<EmployeeForm>({
    resolver: zodResolver(employeeFormSchema),
  });

  const { editMode, selectedEmployee } = useSelector(
    (state: RootState) => state.employeeReducer,
  );

  const dispatch: AppDispatch = useDispatch();

  const onSubmit: SubmitHandler<EmployeeForm> = async (data) => {
    const photoLink = await uploadImage(data.photo);

    const fixedData = {
      name: data.name,
      title: data.title,
      tel: data.tel,
      mail: data.mail,
      address: data.address,
      type: data.type,
      photo: photoLink,
      status: "Aktif",
    };
    dispatch(addEmployee(fixedData));
  };

  return (
    <div className="animate-fade-in absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform rounded-lg border border-slate-300 p-5 backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          {editMode ? "Bilgileri Güncelle" : "Personel ekle"}
        </h2>

        <Button
          el="icon-button"
          title="Kapat"
          onClick={() => {
            dispatch(setShowEmployeeForm()),
              editMode && dispatch(setEditMode(false));
          }}
        >
          <IoMdCloseCircleOutline />
        </Button>
      </div>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="font-semibold">
          İsim
        </label>
        <div className="relative">
          <IoPersonOutline className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
          <input
            type="text"
            id="name"
            placeholder="Tam isim"
            defaultValue={editMode ? selectedEmployee?.name : ""}
            className="h-12 w-full rounded-md pl-8"
            {...register("name")}
          />
        </div>
        {errors.name && <p className="text-error">{errors.name.message}</p>}
        <label htmlFor="title" className="font-semibold">
          Ünvan
        </label>
        <div className="relative">
          <IoPersonOutline className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
          <input
            type="text"
            id="title"
            placeholder="Ünvan"
            defaultValue={editMode ? selectedEmployee?.title : ""}
            className="h-12 w-full rounded-md pl-8"
            {...register("title")}
          />
        </div>
        {errors.title && <p className="text-error">{errors.title.message}</p>}
        <label htmlFor="tel" className="font-semibold">
          Telefon
        </label>
        <div className="relative">
          <FiPhone className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
          <input
            type="text"
            id="tel"
            placeholder="+90 545 999 99 99"
            defaultValue={editMode ? selectedEmployee?.tel : ""}
            className="h-12 w-full rounded-md pl-8"
            {...register("tel")}
          />
        </div>
        {errors.tel && <p className="text-error">{errors.tel.message}</p>}
        <label htmlFor="mail" className="font-semibold">
          E-posta
        </label>
        <div className="relative">
          <GoMail className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
          <input
            type="text"
            id="mail"
            placeholder="örnek@gmail.com"
            defaultValue={editMode ? selectedEmployee?.mail : ""}
            className="h-12 w-full rounded-md pl-8"
            {...register("mail")}
          />
        </div>
        {errors.name && <p className="text-error">{errors.name.message}</p>}
        <label htmlFor="address" className="font-semibold">
          Adres
        </label>
        <div className="relative">
          <IoLocationOutline className="absolute left-2 top-3 text-xl text-gray-500" />
          <textarea
            id="address"
            rows={2}
            placeholder="mahalle, cadde, daire numarası, İlçe/İl"
            defaultValue={editMode ? selectedEmployee?.address : ""}
            className="w-full rounded-md p-3 pl-8"
            {...register("address")}
          ></textarea>
        </div>
        {errors.address && (
          <p className="text-error">{errors.address.message}</p>
        )}
        <label htmlFor="type" className="font-semibold">
          Personel Türü
        </label>
        <div className="relative">
          <select
            id="type"
            className="h-12 w-full appearance-none rounded-md text-center font-semibold hover:cursor-pointer"
            defaultValue={editMode ? selectedEmployee?.type : ""}
            {...register("type")}
          >
            <option value="Hekim">Hekim</option>
            <option value="Diğer">Diğer</option>
          </select>
          <IoMdArrowDropdown className="absolute right-6 top-1/2 -translate-y-1/2 transform text-lg" />
        </div>
        {errors.type && <p className="text-error">{errors.type?.message}</p>}
        <label htmlFor="photo" className="font-semibold text-secondary">
          Fotoğraf
        </label>
        <div className="flex flex-col">
          <input
            id="photo"
            type="file"
            accept="image/*"
            placeholder="Ürün Görseli"
            className="file:text-txtLight file:hover:bg-secondaryDark text-secondary file:ml-10 file:rounded-md file:bg-secondary file:p-2 file:hover:cursor-pointer md:file:ml-0"
            {...register("photo")}
          />
          {errors.photo && <p className="text-error">{errors.photo.message}</p>}
        </div>
        <Button el="wide-button">
          {editMode ? "Bilgileri Güncelle" : "Personel Ekle"}
        </Button>
      </form>
    </div>
  );
}
