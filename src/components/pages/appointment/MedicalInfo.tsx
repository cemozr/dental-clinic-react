export default function MedicalInfo() {
  return (
    <fieldset className="flex flex-col gap-2">
      <label htmlFor="extra-info" className="font-semibold">
        Alerjiler
      </label>
      <textarea
        id="extra-info"
        name="extra-info"
        rows={3}
        className="rounded-md p-3"
        placeholder="Lateks, çeşitli metaller, lokal anestezi alerjileri vb. "
      />
      <label htmlFor="extra-info" className="font-semibold">
        Kullanılan İlaçlar ve Tedaviler
      </label>
      <textarea
        id="extra-info"
        name="extra-info"
        rows={3}
        className="rounded-md p-3"
        placeholder="Antibiyotik, ağrı kesici vb. "
      />
      <label htmlFor="extra-info" className="font-semibold">
        Tıbbi Geçmiş
      </label>
      <textarea
        id="extra-info"
        name="extra-info"
        rows={3}
        className="rounded-md p-3"
        placeholder="Diyabet, hipertansiyon (yüksek tansiyon), kalp hastalıkları..."
      />
      <label htmlFor="extra-info" className="font-semibold">
        Aile Tıbbi Geçmişi
      </label>
      <textarea
        id="extra-info"
        name="extra-info"
        rows={3}
        className="rounded-md p-3"
        placeholder="Genetik rahatsızlıklar, diş eti hastalıkları, çürükler veya çene problemleri vb."
      />
      <div className="flex gap-2">
        <input type="checkbox" />
        <p>
          Kişisel bilgilerimi ve sağlık bilgilerimi tarafınızla paylaşmayı ve
          bilgilerimin tarafınızca saklanmasını onaylıyorum
        </p>
      </div>
    </fieldset>
  );
}
