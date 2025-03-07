import { MdDelete, MdInfo, MdRefresh, MdSettings } from "react-icons/md";
import Button from "../../../UI/Button";
import usePagination from "../../../../hooks/usePagination";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../states/store";
import {
  getEmployees,
  updateEmployeeStatus,
} from "../../../../states/employeeSlice";
import Loading from "../../../UI/Loading";

export default function EmployeeTable() {
  const dispatch: AppDispatch = useDispatch();
  const { employees, isLoading } = useSelector(
    (state: RootState) => state.employeeReducer,
  );

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const pagination = usePagination({ itemList: employees, itemsPerPage: 4 });

  return (
    <div className="relative flex h-full w-full flex-col overflow-x-scroll rounded-lg bg-white bg-clip-border text-gray-700 shadow-md">
      {isLoading && <Loading />}
      <table className="w-full min-w-max table-auto text-left lg:table-fixed">
        <thead>
          <tr>
            <th className="border-b border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-normal leading-none text-slate-500">
                İsim
              </p>
            </th>
            <th className="border-b border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-normal leading-none text-slate-500 lg:block">
                Ünvan
              </p>
            </th>
            <th className="border-b border-slate-200 bg-slate-50 p-4">
              <p className="hidden text-sm font-normal leading-none text-slate-500 lg:block">
                Telefon
              </p>
            </th>
            <th className="border-b border-slate-200 bg-slate-50">
              <p className="text-sm font-normal leading-none text-slate-500">
                Durum
              </p>
            </th>
            <th className="flex h-full items-center justify-end border-b border-slate-200 bg-slate-50 py-4 pr-5">
              <Button el="icon-button" onClick={() => dispatch(getEmployees())}>
                <MdRefresh />
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {pagination.displayedItems.map((employeeData) => {
            return (
              <tr
                key={employeeData.id}
                className="border-b border-slate-200 hover:bg-slate-50"
              >
                <td className="p-4 py-5">
                  <p className="block truncate text-sm font-semibold text-slate-800">
                    {employeeData.name}
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="truncate text-sm text-slate-500 lg:block">
                    {employeeData.title}
                  </p>
                </td>
                <td className="p-4 py-5">
                  <p className="hidden truncate text-sm text-slate-500 lg:block">
                    {employeeData.tel}
                  </p>
                </td>
                <td>
                  <select
                    name="status"
                    id="status"
                    defaultValue={employeeData.status}
                    className={`rounded-md ${employeeData.status === "Aktif" ? "bg-success" : "bg-error"} p-1 text-secondary hover:cursor-pointer`}
                    onChange={(e) =>
                      updateEmployeeStatus(
                        employeeData.id,
                        e.currentTarget.value,
                      )
                    }
                  >
                    <option
                      value="Aktif"
                      className="bg-slate-100 text-custom-dark-blue hover:cursor-pointer"
                    >
                      Aktif
                    </option>
                    <option
                      value="İzinde"
                      className="bg-slate-100 text-custom-dark-blue hover:cursor-pointer"
                    >
                      İzinde
                    </option>
                  </select>
                </td>
                <td className="flex justify-center gap-4 px-5 py-5 md:px-0">
                  <Button el="icon-button" title="Randevu Detayı">
                    <MdInfo />
                  </Button>
                  <Button el="icon-button" title="Düzenle">
                    <MdSettings />
                  </Button>
                  <Button title="Sil" el="icon-button">
                    <MdDelete />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-sm text-slate-500">
          Gösteriliyor:{" "}
          <b>{`${pagination.startIndex} - ${pagination.endIndex}`} </b>Toplam
          Sayfa: {pagination.totalPages}
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
