import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../UI/Loading";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { type AppDispatch, type RootState } from "../../../../states/store";
import {
  setAppointments,
  type Appointment,
} from "../../../../states/appointmentSlice";
import usePagination from "../../../../hooks/usePagination";

export default function AppointmentTable() {
  const dispatch: AppDispatch = useDispatch();
  const { isLoading, appointments } = useSelector(
    (state: RootState) => state.appointmentReducer,
  );
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "appointments"),
      (snapshot) => {
        const temp: Appointment[] = [];
        snapshot.docs.forEach((doc) => {
          temp.push({ id: doc.id, ...doc.data() } as Appointment);
        });
        dispatch(setAppointments(temp));
      },
    );
    return () => unsubscribe();
  }, []);

  const pagination = usePagination({ itemList: appointments, itemsPerPage: 4 });

  return (
    <div className="relative flex h-full w-full flex-col overflow-scroll rounded-lg bg-white bg-clip-border text-gray-700 shadow-md">
      {isLoading && <Loading />}
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th className="border-b border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-normal leading-none text-slate-500">
                İsim
              </p>
            </th>
            <th className="border-b border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-normal leading-none text-slate-500">
                Hastanın Rahatsızlığı
              </p>
            </th>
            <th className="border-b border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-normal leading-none text-slate-500">
                Hekim
              </p>
            </th>
            <th className="border-b border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-normal leading-none text-slate-500">
                Randevu Tarihi
              </p>
            </th>
            <th className="border-b border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-normal leading-none text-slate-500">
                Telefon
              </p>
            </th>
            <th className="border-b border-slate-200 bg-slate-50">
              <p className="text-sm font-normal leading-none text-slate-500"></p>
            </th>
          </tr>
        </thead>
        <tbody>
          {pagination.displayedItems.map((appointmentData) => {
            return (
              <tr
                key={appointmentData.id}
                className="border-b border-slate-200 hover:bg-slate-50"
              >
                <td className="p-4 py-5">
                  <p className="block text-sm font-semibold text-slate-800">
                    {appointmentData.name}
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">
                    {appointmentData.medicalIssue}
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">
                    {appointmentData.dentist}
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">
                    {appointmentData.appointmentDate}
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="text-sm text-slate-500">
                    {appointmentData.tel}
                  </p>
                </td>

                <td className="flex justify-center gap-4 py-5">
                  <button>Detaylar...</button>
                  <button>Onayla</button>
                  <button>Düzenle</button>
                  <button>Sil</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-sm text-slate-500">
          Gösteriliyor:{" "}
          <b>{`${pagination.startIndex} - ${pagination.endIndex}`}</b> Toplam:{" "}
          {pagination.totalPages}
        </div>
        <div className="flex space-x-1">
          <button
            onClick={pagination.previousPage}
            className="min-h-9 min-w-9 rounded border border-slate-200 bg-white px-3 py-1 text-sm font-normal text-slate-500 hover:border-custom-light-blue hover:bg-custom-light-blue"
          >
            Geri
          </button>
          <div className="min-h-9 min-w-9 rounded border border-slate-200 bg-white px-3 py-2 text-center text-sm font-normal text-slate-500">
            {pagination.currentPage}
          </div>
          <button
            onClick={pagination.nextPage}
            className="min-h-9 min-w-9 rounded border border-slate-200 bg-white px-3 py-1 text-sm font-normal text-slate-500 hover:border-custom-light-blue hover:bg-custom-light-blue"
          >
            İleri
          </button>
        </div>
      </div>
    </div>
  );
}
