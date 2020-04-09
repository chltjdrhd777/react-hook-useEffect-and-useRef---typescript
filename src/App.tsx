import React, { useState, useEffect } from "react";

const UseTitle = (initialTitle: string) => {
  const [title, setTitle] = useState(initialTitle);

  //useEffect
  //////////////////////////////////////////////////////////////////
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle!.innerText = title;
  };
  useEffect(updateTitle, [title]);
  //////////////////////////////////////////////////////////////////

  return setTitle;
};

const App = () => {
  //useEffect
  //////////////////////////////////////////////////
  const titleUpdate = UseTitle("Now Loading...");
  setTimeout(() => titleUpdate("Home"), 5000);
  ///////////////////////////////////////////////////

  //useRef
  //////////////////////////////////////////////////
  const docking = React.useRef<HTMLInputElement>(null);
  setTimeout(() => docking.current?.focus(), 5000);

  const useClick = () => {
    const element = React.useRef<HTMLHeadingElement>(null);
    const onClick = () => console.log("say Hi");
    function clicker() {
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
    }

    useEffect(clicker, []);
    return element;
  };

  const title = useClick();
  /////////////////////////////////////////////////
  return (
    <div>
      <div>Hi</div>
      <input ref={docking} placeholder="good" />
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
