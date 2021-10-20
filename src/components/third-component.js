import React, { useState } from "react";
import { useStore } from "../Context/store";
import {addName,addId} from '../Context/actions'

function ThirdComponent() {

  const [state, dispatch] = useStore();


  console.log(state)

  return (
    <div>
      <button onClick={()=>dispatch(addName("Fatima"))}>Add Name</button>
      <button onClick={()=>dispatch(addId("029"))}>Add ID</button>
    </div>
  );
}

export default ThirdComponent;
