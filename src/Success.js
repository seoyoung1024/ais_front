import Login from "./Login";
import Button from "./button";
import { useRef, useState } from "react";

function Success({ id, Login1}) {
  return(
  <> 
  <div className="sen">{id}</div>
  <div> 
  <Button
    color="orange"
    btn="logout"
    click={Login1}
  ></Button>
  </div>
  </>
  )
  
}

export default Success;
