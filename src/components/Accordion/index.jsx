import "./index.scss";
import React, { useState, useEffect, useRef } from "react";

const Accordion = ({ title, content, id }) => {
  const [maxHeight, setMaxHeight] = useState("0px");
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && contentRef.current) {
      const curRef = contentRef.current;
      setMaxHeight(`${curRef.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="accordion" id={id}>
      <div
        className="accordion__header"
        onClick={toggleAccordion}
        data-is-expanded={isOpen}
      >
        <h4>{title}</h4>
        <h4>{isOpen ? "-" : "+"}</h4>
      </div>
      <div
        className="accordion__content"
        data-is-expanded={isOpen}
        style={{ maxHeight: maxHeight }}
        ref={contentRef}
      >
        <div className="accordion__content__container">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
