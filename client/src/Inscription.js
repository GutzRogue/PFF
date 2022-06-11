import { useState } from "react";
import QRCode from "qrcode";
import Hub from "./Hub";
import Axios from "axios";
function Inscription() {
  const [Cin, setCin] = useState("");
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Pass, setPass] = useState("");
  const [imgurl, setImgurl] = useState("");
  const GenerateQR = async () => {
    try {
      const response = await QRCode.toDataURL(Cin);
      setImgurl(response);
    } catch (error) {
      console.log(error);
    }
  };
  const Create = () => {
    Axios.post("http://localhost:1500/api/insert", {
      cin: Cin,
      nom: Nom,
      prenom: Prenom,
      pass: Pass,
    }).then(() => {
      alert("Sleep");
    });
  };
  return (
    <div>
      <Hub />
      <fieldset>
        <h1>Inscription</h1>
        <pre>
          CIN :
          <input
            required
            type="text"
            name="cin"
            onChange={(e) => {
              setCin(e.target.value);
            }}
          />
          <br />
          Nom :
          <input
            required
            type="text"
            name="nom"
            onChange={(e) => {
              setNom(e.target.value);
            }}
          />
          <br />
          Prenom :
          <input
            required
            type="text"
            name="prenom"
            onChange={(e) => {
              setPrenom(e.target.value);
            }}
          />
          <br />
          Pass :
          <input
            required
            type="password"
            name="pass"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <br />
          <button
            onClick={() => {
              GenerateQR(); //problem car fonction asynchrone
              Create();
            }}
          >
            Inscription et generation de code QR
          </button>
        </pre>
        <a href={imgurl} download>
          <img src={imgurl} name="code" id="code" alt="" />
        </a>
      </fieldset>
    </div>
  );
}
export default Inscription;
