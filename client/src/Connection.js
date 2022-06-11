import Hub from "./Hub";
import { useState, useRef } from "react";
import QrReader from "react-qr-reader";

function Connection() {
  const [Cin, setCin] = useState("");
  const [Name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const QrRef = useRef("null");

  const handleError = (error) => {
    console.error(error);
  };
  const handleScan = (result) => {
    Cherche(result);
  };
  const Cherche = async (result) => {
    const res = await fetch("http://localhost:1500/api/select/" + result);
    const json = await res.json();
    let values = Object.values(json[0]);
    if (values[0]) {
      setCin(values[0]);

      for (let i in values) {
        if ((i = 1)) {
          setName(values[i]);
        }

        if ((i = 2)) {
          setLastName(values[i]);
        }
      }
      alert("vous pouvez passer");
    } else {
      alert("Vous ne passer pas");
    }
  };
  const onScanFun = () => {
    QrRef.current.openImageDialog();
  };
  return (
    <div>
      <Hub />
      <div style={{ marginLeft: "45%" }}>
        <div>
          <button onClick={onScanFun}> Scan QR code :</button>
          <QrReader
            ref={QrRef}
            delay={300}
            onScan={handleScan}
            onError={handleError}
            style={{ width: "50%" }}
            legacyMode
          />

          <p> CIN : {Cin}</p>
          <p> Nom: {Name} </p>
          <p> Prenom: {LastName}</p>
        </div>
      </div>
    </div>
  );
}

export default Connection;
