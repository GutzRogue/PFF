import Hub from "./Hub";
import { useState, useRef, useEffect } from "react";
import QrReader from "react-qr-reader";
import Axios from "axios";

function Connection() {
  const [Name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const QrRef = useRef("null");
  const [scanqrcode, setScanqrcode] = useState("");

  const handleError = (error) => {
    console.error(error);
  };
  const handleScan = (result) => {
    setScanqrcode(result);
    console.log(scanqrcode);
    console.log(result);
    fetch("http://localhost:1500/api/select/" + result)
      .then((response) => {
        console.log(response.json());
      })
      .catch((err) => {
        console.log(err);
      });
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

          <p> CIN : {scanqrcode}</p>
          <p> Nom: {Name} </p>
          <p> Prenom: {LastName}</p>
        </div>
      </div>
    </div>
  );
}

export default Connection;
