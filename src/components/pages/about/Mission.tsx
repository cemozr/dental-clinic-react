import dentistImage from "/assets/Rectangle682.png";

export default function Mission() {
  return (
    <section className="flex flex-col gap-4 p-4">
      <h1 className="mb-4 text-center text-4xl font-bold">Hakkımızda</h1>
      <article className="grid lg:grid-cols-2 lg:gap-32">
        <div className="flex h-auto flex-col gap-4">
          <h2 className="text-2xl font-bold">Misyonumuz</h2>
          <p>
            Lorem Dental'da insanlar her şeyden önce gelir. Ağız sağlığına
            bütünsel bir vücut yaklaşımı kullanarak her bir hastamızın en iyi
            sağlık ve zindeliğe kavuşmasına yardımcı oluyoruz. Bu, sadece
            çürüklere odaklanmak değil; kranio-fasiyal gelişim, ısırık ve eklem
            dengesi, ağız florası, uygun kas dengesi/fonksiyonu ve diş
            malzemelerinin biyouyumluluğuna odaklanmak anlamına gelir. Harika
            bir bakım ve planlama, yaptığımız her şeyin genel sağlık ve
            zindeliği desteklemeye yardımcı olmasını sağlar.
          </p>
          <p className="text-xl font-semibold">
            Her şeyden çok mutlu, sağlıklı gülümsemeler yaratmayı seviyoruz.
          </p>
          <p>
            Hastalarımızın mümkün olan en iyi bakımı almasını sağlamak için en
            gelişmiş teknikler ve teknolojilerle güncel kalmak için çok
            çalışıyoruz. Ofisimiz, yönlendirilmiş cerrahi ve endodontik
            protokollere olanak sağlamak için 3D CBCT radyografilerini kullanır.
            Bu, bu prosedürlerin cerrahi olarak gerçekleştirilmeden önce dijital
            olarak gerçekleştirilmesini ve böylece optimum sonuçların
            sağlanmasını mümkün kılar. 3D görüntüleme ayrıca hava yolu
            büyümesinin ve gelişiminin analizi için de kullanılır. Ayrıca tüm
            diş restorasyonlarımız ve Invisalign izlenimlerimiz için en iyi 3D
            optik tarayıcıyı kullanıyoruz. Dr. Williams, mikrocerrahi
            tekniklerin kullanılmasının güçlü bir savunucusudur, bu daha az
            rahatsızlık ve daha hızlı iyileşme süreleri anlamına gelir.
          </p>
        </div>
        <div className="mt-4 md:aspect-h-1 md:aspect-w-2">
          <img
            className="rounded-md object-cover"
            src={dentistImage}
            alt="dentist"
          />
        </div>
      </article>
    </section>
  );
}
