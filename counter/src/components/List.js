import React from "react";

export default props => {
  const firstnames = [
    "Julien",
    "Kevin",
    "Lucas",
    "Renaud",
    "Aurélien",
    "Gregory",
    "Laurent",
    "Jérôme",
    "Nicolas",
    "Fabien",
    "Yacine",
  ];
  return (
    <ul>
      {firstnames.map((firstname, index) => <li key={index}>{firstname}</li>)}
    </ul>
  );
};
