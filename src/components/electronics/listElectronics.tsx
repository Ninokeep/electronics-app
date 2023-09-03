import { useEffect, useState } from "react";
import { Electronics } from "../../models/Electronics";
import Electronic from "../electronic/electronic";
import "./listElectronics.css";

export default function ListElectronics() {
  const [electronics, setElectronics] = useState<Electronics[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/electronics")
      .then((response) => response.json())
      .then((data) => {
        setElectronics(data);
      });
  }, []);

  return (
    <div className="container-flex">
      <div className="list-electronics">
        {electronics.map((electronic: Electronics, key: number) => (
          <Electronic {...electronic} key={key} />
        ))}
      </div>
    </div>
  );
}
