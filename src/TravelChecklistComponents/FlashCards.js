import "./flashcards.css";
import React, { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCardComponent(props) {
  const handleClick = () => {
    props.trigger(Number(props.data.id));
  };
  return (
    <div onClick={handleClick} className={props.cn}>
      <p>{props.data.msg}</p>
    </div>
  );
}

export default function FlashCards() {
  const [selected, setSelected] = useState(null);
  const somefun = (id) => {
    if (id === selected) setSelected(null);
    else setSelected(id);
  };
  return (
    <div className="flashcards">
      {questions.map((q) => {
        return (
          <FlashCardComponent
            data={
              q.id === selected
                ? { id: q.id, msg: q.answer }
                : { id: q.id, msg: q.question }
            }
            key={q.id}
            cn={q.id === selected ? "selected" : ""}
            trigger={somefun}
          />
        );
      })}
    </div>
  );
}
