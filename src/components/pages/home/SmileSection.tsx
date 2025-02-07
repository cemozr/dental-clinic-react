import smileImage from "/assets/image4.png";
export default function SmileSection() {
  return (
    <section className="mt-4 flex flex-col bg-secondary md:flex-row lg:w-3/4">
      <article className="order-1 flex flex-col gap-4 p-4 lg:p-0">
        <h2 className="text-3xl font-bold">
          Endişelerinizi kapıda bırakın ve daha sağlıklı, daha kusursuz bir
          gülümsemenin tadını çıkarın
        </h2>
        <p>
          Hastalarımıza en iyi ürünleri sunabilmek için piyasadaki en kaliteli
          malzemeleri kullanıyoruz. Bu yüzden hiçbir şey için endişelenmeyin ve
          kendinizi ayırtın.
        </p>
      </article>
      <div className="order-2 flex px-4">
        <img src={smileImage} alt="smile" className="my-2 rounded-lg" />
      </div>
    </section>
  );
}
