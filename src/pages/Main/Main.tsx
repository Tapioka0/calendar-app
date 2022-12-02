import { Calendary } from "../../components/calendar/calendary";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
export const Main = () => {
  const text = useRef<HTMLTextAreaElement>(null);
  const [events, setEvents] = useState<any>([]);
  const [permission, setPermission] = useState("no");
  const [date, seDate] = useState(new Date().toDateString());
  Notification.requestPermission().then((result) => {
    setPermission(result);
  });
  setInterval(() => seDate(new Date().toDateString()), 5000);
  useEffect(() => {
    events.forEach((e: Date) => {
      if (e && e.toDateString() === new Date().toDateString()) {
        setEvents(
          events.filter(
            (e: Date) => e.toDateString() !== new Date().toDateString()
          )
        );

        return new Notification(`Evento`);
      }
    });
  }, [events, date]);

  return (
    <Contenedor className="bg-dark text-white">
      <h1 className="text-center p-5">Calendario</h1>
      <Calendary setEvents={setEvents} events={events} />
      <h3 className="text-center pt-5">Proximos Eventos:</h3>
      {events.length >= 1
        ? events.map((elemento: Date, index: number) => (
            <div
              className="card m-4 d-inline-flex flex-wrap"
              style={{ width: "18rem" }}
              key={index}
            >
              <div className="card-body">
                <h5 className="card-title  text-black">Evento</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {elemento.toDateString()}
                </h6>
                <textarea
                  className="card-text"
                  placeholder="evento (editable)"
                  ref={text}
                />
              </div>
            </div>
          ))
        : null}
    </Contenedor>
  );
};

const Contenedor = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
