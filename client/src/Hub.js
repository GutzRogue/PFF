import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
function Hub() {
  return (
    <div style={{ textAlign: "center" }}>
      <ul>
        <li>
          <Link to="/inscription">Inscription </Link>
        </li>
        <li>
          <Link to="/Connection">Connection</Link>
        </li>
      </ul>
    </div>
  );
}
export default Hub;
