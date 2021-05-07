import React from "react";

function Button(props) {
  // Here we can use that special prop called
  // children which will give us the text
  // from rendering the buttons in App.js
  // e.g. <Button>this will be in props.children</Button>
  return <button className="Button">{props.children}</button>;
}

export default Button;
