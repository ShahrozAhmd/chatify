import React, { useState } from "react";
import { useStore } from "Context/store";
import { addName, addId } from "Context/actions/actions";

function ThirdComponent() {
  const [state, dispatch] = useStore();

  console.log(state);

  return (
    <div>
      <button className="btn btn-green">
  Button
</button>

      <button onClick={() => dispatch(addName("Fatima"))}>Add Name</button>
      <button onClick={() => dispatch(addId("007"))}>Add ID</button>
    </div>
  );
}

export default ThirdComponent;
