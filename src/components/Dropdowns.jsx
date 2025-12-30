import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dropdowns({
  title,
  description,
  defaultOpen = false,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.maxHeight = "0px";
      }
    }
  }, [isOpen, description]);

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
      <div
        id={`dropdown-${title}`}
        ref={contentRef}
        className="dropdown-content"
      >
        {description}
      </div>
    </div>
  );
}
