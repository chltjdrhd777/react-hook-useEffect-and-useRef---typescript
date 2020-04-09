import React, { useEffect } from "react";

//when I set the useEffect(function, []), it means I would run componentDidmont. In this case, adding addEventlistner.
//and to get rid of pre-existent addEventlistener, I would retrun A function which acts like componentwillUnmount
const useClick = () => {
  const docking = React.createRef<HTMLHeadingElement>();
  const clickPhrase = () => console.log("Hi there");
  function clicker() {
    //////componentDidmount///////////////////////////////////////
    if (docking.current) {
      docking.current.addEventListener("click", clickPhrase);
    }
    //////componentwillUnmount//////////////////////////////////////////
    return () => {
      if (docking.current) {
        docking.current.removeEventListener("click", clickPhrase);
      }
    };
  }

  useEffect(clicker, []);
  return docking;
};

const App2 = () => {
  return (
    <div>
      <div>Hi</div>
      <h1 ref={useClick()}>Hi</h1>
    </div>
  );
};

export default App2;
