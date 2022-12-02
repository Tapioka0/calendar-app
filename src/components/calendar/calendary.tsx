import { useState } from "react";
import Calendar from "react-calendar";
import Swal from "sweetalert2";
export const Calendary = (u: any) => {
  const [confirmation, setConfirmation] = useState(new Date());

  return (
    <div>
      <Calendar
        onClickDay={(value) => {
          Swal.fire({
            title: "Evento",
            icon: "info",
            html: `Quieres crear un evento para este dia? <hr>${value.toDateString()}`,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: "Si!",

            cancelButtonText: "No!",
          }).then((result) => {
            if (result.isConfirmed) {
              u.setEvents([...u.events, value]);
            }
          });
        }}
        value={confirmation}
        goToRangeStartOnSelect={true}
        className="d-flex justify-content-center "
      />
    </div>
  );
};
