import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../../../UI/Button";
import { GoMail } from "react-icons/go";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { authSchema } from "./authSchema";
import Loading from "../../../UI/Loading";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../states/store";
import { login } from "../../../../states/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type AuthForm = z.infer<typeof authSchema>;

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>({ resolver: zodResolver(authSchema) });

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { isLoading, status } = useSelector(
    (state: RootState) => state.authReducer,
  );

  const onSubmit: SubmitHandler<AuthForm> = (loginData) => {
    dispatch(login(loginData));
  };
  useEffect(() => {
    if (status === "signed in") {
      navigate("/admin");
    }
  }, [status]);
  return (
    <section
      id="auth-section"
      className="grid max-h-96 gap-4 p-10 lg:col-span-7 xl:col-span-5"
    >
      {isLoading && <Loading />}
      <h1 className="text-4xl font-bold">Hoşgeldin</h1>
      <p>Lütfen yönetim paneline erişmek için giriş yap.🔒 </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="relative">
          <GoMail className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
          <input
            className="h-12 w-full rounded-md pl-8"
            type="text"
            placeholder="E-posta"
            {...register("mail")}
          />
        </div>
        {errors.mail && <p>{errors.mail.message}</p>}
        <div className="relative">
          <RiLockPasswordLine className="absolute left-2 top-1/2 -translate-y-1/2 transform text-lg text-gray-500" />
          <input
            className="h-12 w-full rounded-md pl-8"
            type="password"
            placeholder="Şifre"
            {...register("password")}
          />
        </div>
        {errors.password && <p>{errors.password.message}</p>}
        <p>
          Şifreni mi unuttun?{" "}
          <span className="text-custom-mid-blue underline hover:cursor-pointer">
            Buraya Tıkla
          </span>
        </p>
        <Button type="submit" el="wide-button">
          Giriş Yap
        </Button>
      </form>
    </section>
  );
}
