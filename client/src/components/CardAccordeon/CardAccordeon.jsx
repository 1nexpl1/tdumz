import React, { useRef, useState } from 'react'

import data from "./CardAccordeonData";
import './AccordeonStyles.css'
import { RiArrowDropDownLine } from 'react-icons/ri'


const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef();
    return (
        <div className="wrapper">
            <button
                className={`question-container ${isOpen ? "active" : ""}`}
                onClick={onClick}
            >
                <p className="question-content">{question}</p>
                <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
            </button>

            <div
                ref={contentHeight}
                className="answer-container"
                style={
                    isOpen
                        ? { height: contentHeight.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                <p className="answer-content" 
                dangerouslySetInnerHTML={{ __html: answer }}/>
            </div>
        </div>
    );
};


const CardAccordeon = ({description}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <div className="container">
      {description.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.title}
          answer={item.text}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
    )
}

export default CardAccordeon