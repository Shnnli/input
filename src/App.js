import "./styles.css";
import { useEffect, useRef } from "react";
export default function App() {
  const ref = useRef();
  const flag = useRef();
  useEffect(() => {
    ref.current.style.color = "red";
  }, []);
  const onChange = (e) => {
    console.log(e.target);
    let text = e.target.innerText;
    // let res = text.split(/((?<=[=;*/+-@#!%])\d+)/);
    let res = text.split(/((?<=[=;*/+#!%])\d+)/);
    e.target.innerHTML = "";
    let span = e.target.querySelector("span");
    if (span) e.target.removeChild(span);
    console.log(res);

    res.forEach((item) => {
      let span = document.createElement("span");
      span.innerText = item;
      if (/^\d+$/.test(item)) {
        span.style.color = "blue";
      } else {
        span.style.color = "red";
      }
      e.target.appendChild(span);
    });
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div className="inp" ref={ref} onBlur={onChange} contentEditable></div>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
