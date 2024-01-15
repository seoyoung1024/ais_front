import Button from "./button";
import { useRef, useState } from "react";

// const [contents, setContents] = useState("A")
// const input_ref = useRef("")

function Login({ click, errMsg}) {
  const input_ref = useRef("");

  return (
    <>
      {/* <div>{contents}</div> */}
      <div className="sen">
      <div>{errMsg}</div>
      <div>
        <input ref={input_ref}></input>
      </div>
      {/* <Button color = "yellow" btn = "click!" click = {handleClick} msg = "dd"></Button> */}
      <Button
        color="orange"
        btn="login"
        click={() => click(input_ref.current.value)}
      ></Button>
      </div>
    </>
  );
}

export default Login;
