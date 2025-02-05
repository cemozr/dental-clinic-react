import { FieldErrors, UseFormRegister } from "react-hook-form";
import { type AppointmentForm } from "./AppointmentPage";
type MedicalInfoProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors<AppointmentForm>;
};

export default function MedicalInfo({ register, errors }: MedicalInfoProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      <label htmlFor="allergies" className="font-semibold">
        Alerjiler
      </label>
      <textarea
        id="allergies"
        rows={3}
        className="rounded-md p-3"
        placeholder="Lateks, çeşitli metaller, lokal anestezi alerjileri vb. "
        {...register("allergies")}
      />
      {errors.allergies && (
        <p className="text-error">{errors.allergies.message}</p>
      )}
      <label htmlFor="medicines" className="font-semibold">
        Kullanılan İlaçlar ve Tedaviler
      </label>
      <textarea
        id="medicines"
        rows={3}
        className="rounded-md p-3"
        placeholder="Antibiyotik, ağrı kesici vb. "
        {...register("medicines")}
      />
      {errors.medicines && (
        <p className="text-error">{errors.medicines.message}</p>
      )}
      <label htmlFor="medical-history" className="font-semibold">
        Tıbbi Geçmiş
      </label>
      <textarea
        id="medical-history"
        rows={3}
        className="rounded-md p-3"
        placeholder="Diyabet, hipertansiyon (yüksek tansiyon), kalp hastalıkları..."
        {...register("medicalHistory")}
      />
      {errors.medicalHistory && (
        <p className="text-error">{errors.medicalHistory.message}</p>
      )}
      <label htmlFor="family-medical-history" className="font-semibold">
        Aile Tıbbi Geçmişi
      </label>
      <textarea
        id="family-medical-history"
        rows={3}
        className="rounded-md p-3"
        placeholder="Genetik rahatsızlıklar, diş eti hastalıkları, çürükler veya çene problemleri vb."
        {...register("familyMedicalHistory")}
      />
      {errors.familyMedicalHistory && (
        <p className="text-error">{errors.familyMedicalHistory.message}</p>
      )}
      <div className="flex gap-2">
        <input
          type="checkbox"
          id="privacy-check"
          {...register("privacyCheck")}
        />
        <p>
          Kişisel bilgilerimi ve sağlık bilgilerimi tarafınızla paylaşmayı ve
          bilgilerimin tarafınızca saklanmasını onaylıyorum
        </p>
      </div>
      {errors.privacyCheck && (
        <p className="text-error">{errors.privacyCheck.message}</p>
      )}
    </fieldset>
  );
}
