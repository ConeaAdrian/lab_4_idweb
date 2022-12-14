import React, { useState } from "react";

const Multiplier = () => {
  const [multiplier, setMultiplier] = useState(1);

  const multiplyCounter = () => {
    setMultiplier((prevMultiplier) => prevMultiplier * 1);
  };

  const divideCounter = () => {
    setMultiplier((prevMultiplier) => prevMultiplier / 1);
  };

  return (
    <>
      <button data-testid="multiply" onClick={multiplyCounter}>
        *
      </button>
      <p data-testid="multiplier">{multiplier}</p>
      <button data-testid="divide" onClick={divideCounter}>
        :
      </button>
    </>
  );
};

export default Multiplier;
