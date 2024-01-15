import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import Button from "./button";
import Login from "./Login";
import Success from "./Success";

//코드 설명
// const로 변수 선언해서 useState로 "처음화면" 값 초기화 해주고(그럼 처음화면에는 처음화면이 뜨게됨)
// 버튼이 눌리게 되면, 리턴 값으로 setMag의 값이 나오게 된다. setMag는 name 값인데 name은 파라미타이다. 그래서 btn의 값을 받아온다.
// 그러므로 버튼이 눌리면, btn의 값이 화면에 출력되게 된다.

function App() {
  // const[msg, setMag] = useState("처음화면") // 1. msg 변수에 1값으로 초기화
  // const [contents, setContents] = useState("A")
  const [success, setSuccess] = useState(false);
  const [id, setContents] = useState("");
  const [errMsg, setErrMsg] = useState("");
  // const [flag, setFlag] = useState(true)
  // const input_ref = useRef("")
  // const checkbox_ref = useRef("")

  // function handleClick(){

  // //   //javascript
  // //   const tmp = document.getElementById("abc")
  // //   console.log(tmp.value)

  // // //react
  // //   console.log(input_ref.current.value)

  //   setContents(input_ref.current.value)
  //   setFlag(checkbox_ref.current.value)
  // }

  // function handleChang(){
  //   const e = input_ref.current.value
  //   setContents(e)
  // }

  function handleLogin(id) {
    if (id == "") {
      setErrMsg("id를 입력해주세요");
    } else {
      fetch("https://test-server-4r7i.onrender.com/login/" + id) //이것을 쓰면 서버에서 값을 들고 온다. 이것이 잘 되면 then이 실행됨 실제 json양식이 있음 이해 안되면 통으로 외워서 사용json으로 바꾸고, 
      .then((res) => res.json())
      .then((date) => {

        if(date.msg!=""){
          setSuccess(true);
        setContents(date.msg);
        }else{
          setErrMsg("일치하는 id가 없습니다!")
        }
      });
    }
  }

  function Login1() {
    setSuccess(false);
    setErrMsg("");
  }

  return (
    <>
      <Login click={handleLogin} />
      {/* const a = 2
    let tmp = ""
    if(a==3){
      tmp = "a"
      }else{
        tmp = "b"
      }

      let tmp =  */}

      {!success ? (
        <Login errMsg={errMsg} click={handleLogin} />
      ) : (
        // <>
        //   {/* <div>{msg}</div>
        //   <Button color = "red" fontSize = "50px" btn = "Button1" click={handleClick}/>
        //   <Button color = "orange" fontSize= "50px" btn = "Button2"click={handleClick}/>
        //   <Button color = "yellow" fontSize="50px" btn = "Button3" click={handleClick}/>
        //   <Button color = "green" fontSize="50px" btn = "Button4" click={handleClick}/>
        //   <Button color = "blue" fontSize="50px" btn = "Button5"click={handleClick}/>
        //   <Button color = "navy" fontSize="50px" btn = "Button6" click={handleClick}/> */}
        //   <div>{contents}</div>
        //   {/* <div>{flag}</div> */}
        //   {/* javascript */}
        //   {/* <div><input id="abc"></input></div> */}

        //   {/* react */}
        //   <div><input onChange={handleChang} ref={input_ref}></input></div>
        //   <div><input type="checkbox" ref = {checkbox_ref}></input></div>

        //   <Button color = "yellow" btn = "click!" click = {handleClick} msg = "dd"></Button>
        //   <Button color = "orange" btn = "login" click = {handleLigin}></Button>

        //   </>
        <Success id={id} Login1={Login1} />
      )}

      {/* div태그가 제일 상위이므로 <></> 태그를 안 넣어도 에러가 안남 */}
      {/* <button>im button1</button>
//       <button>im button2</button>
//       <button id="but4">im button3</button>
//       <button className="btn2 font_size_4px" >im button4</button>
//       <button>im button5</button>
//       <button>im button6</button>
//       <button>im button7</button>
//       <button>im button8</button>
//       <button>im button9</button>
//       <button className = "btn1">im button10</button> */}
    </>
  );
}
export default App;
