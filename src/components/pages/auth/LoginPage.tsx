import bannerImage from "/assets/Rectangle662_1.png";
import AuthForm from "./authForm/AuthForm";
export default function LoginPage() {
  return (
    <main className="mx-5 my-20 grid flex-grow text-custom-dark-blue lg:mx-20 lg:my-0 lg:mt-10 lg:grid-cols-12 xl:gap-10">
      <section className="hidden p-10 lg:col-span-5 lg:block xl:col-span-7">
        <img
          className="h-96 w-full rounded-lg object-cover"
          src={bannerImage}
          alt="dentist photo"
        />
      </section>
      <AuthForm />
    </main>
  );
}
