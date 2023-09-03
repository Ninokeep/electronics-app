import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="title">Electronics App</div>
      <div>
        <div>
          <FontAwesomeIcon size="2x" icon={["fas", "user"]} />
        </div>
      </div>
    </header>
  );
}
