import React from "react";

function Card(props) {
  return (
    <section className="Card">
      <h2>{props.details.name}</h2>
      <a href={props.details.url}>profile</a>
      {/* Just showing how we can do math inside of JSX  */}
      <p>Age next year: {props.details.age + 1}</p>
      {/* or even conditionally render stuff with a ternary!  */}
      <p>{props.details.age <= 21 ? "you are young" : "you are young-ish"}</p>
    </section>
  );
}

export default Card;
