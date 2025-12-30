import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dropdowns({ title, description, defaultOpen = false, className = "" }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`dropdown-container ${isOpen ? "open" : ""} ${className}`}>
      <div className="dropdown-title">
        <span className="dropdown-title-text">{title}</span>
        <button className="chevron-button" onClick={() => setIsOpen((v) => !v)}>
          <span className="chevron">
            <FontAwesomeIcon
              icon="chevron-down"
              rotation={isOpen ? 180 : 0}
              className="chevron-icon"
            />
          </span>
        </button>
      </div>
      <div className="dropdown-content">{description}</div>
    </div>
  );
}
