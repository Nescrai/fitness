import React from "react";

type props = {
    children: React.ReactNode
};

const HText = ({children}: props) => {
  return <h1 className="basis-3/5 font-montserrat text-3xl font-bold text-sky-500">
    {children}
  </h1>;
};

export default HText;
