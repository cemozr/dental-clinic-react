import { FaTooth } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="absolute left-1/2 top-1/2 z-40 transform animate-pulse rounded-full border-b-2 border-l-2 border-custom-mid-blue p-3">
      <FaTooth className="animate-spin text-5xl text-custom-mid-blue" />
    </div>
  );
}
