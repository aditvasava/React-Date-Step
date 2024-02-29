import "./accordion.css";
import React, { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Main() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion(props) {
  const [opened, setOpened] = useState(null);
  return (
    <div className="accordion">
      {props.data.map((element, i) => {
        return (
          <AccordionItem
            num={i}
            key={i}
            content={element}
            curopen={opened}
            setopen={setOpened}
          />
        );
      })}
    </div>
  );
}

function AccordionItem(props) {
  const isOpen = props.curopen === props.num;
  const handletoggle = () => {
    if (props.curopen === props.num) {
      props.setopen(null);
    } else {
      props.setopen(props.num);
    }
  };
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handletoggle}>
      <p className="number">
        {props.num < 9 ? `0${props.num + 1}` : props.num + 1}
      </p>
      <p className="title">{props.content.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box text">{props.content.text}</div>}
    </div>
  );
}
