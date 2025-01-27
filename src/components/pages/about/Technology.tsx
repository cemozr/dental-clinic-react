import techImage from "/assets/Rectangle662_1.png";

export default function Technology() {
  return (
    <section className="mb-4 flex flex-col gap-4 p-4 lg:gap-10">
      <article className="lg:flex lg:flex-col lg:items-center lg:gap-4">
        <h2 className="text-2xl font-bold">Son Teknoloji</h2>
        <p className="lg:w-1/2 lg:text-center">
          Diş hekimliğindeki büyük teknolojik gelişmeler sayesinde, en karmaşık
          vakaların bile daha az zamanda, daha etkili bir şekilde tedavi
          edilebilmesi mümkün hale gelmiştir.
        </p>
      </article>
      <article className="grid lg:grid-cols-2 lg:gap-20">
        <div className="mb-4 md:aspect-h-1 md:aspect-w-4">
          <img
            className="rounded-md object-cover"
            src={techImage}
            alt="device image"
          />
        </div>
        <div>
          <p className="text-xl font-semibold">
            Diş Hekimliğinin Geleceği Dijitalde
          </p>
          <br />
          <p>
            Diş hekimleri bugün klinik karar alma süreçlerinde içgörü elde etmek
            için yazılımdan yararlanıyor. Bu uygulamalar, klinisyenlerin
            hastaları için en iyi yöntemleri bulmasını sağlayan yapay zeka
            algoritmalarını entegre etmek için gelişmeye devam edecek.
            <br />
            <br />
            21. yüzyılda, dijital radyografiler ve 3B görüntüleme diş bakımının
            standardı haline geldi. Diş kronu için 3B diş izlenimleri (polivinil
            siloksan ve kauçuk bazlı izlenimler yerine) için dijitalleştirilmiş
            verilerle ağız içi tarayıcı kullanmak artık yaygın bir uygulama.
            <br />
            <br />
            Yapay zeka, diş endüstrisinin geleceği için temel oluşturuyor. Diş
            robotları artık çürükleri doldurma ve dişleri temizleme veya çekme
            gibi işlevleri yerine getirebiliyor
          </p>
        </div>
      </article>
    </section>
  );
}
