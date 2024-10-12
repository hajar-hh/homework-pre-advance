import { useEffect, useState } from "react";
import "./App.css";

function RandomAdviceRendering() {
  const [advice, setAdvice] = useState("a advice for you 🤗");
  const fetchRes = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      setAdvice("error");
    }
  };

  return (
    <section>
      <h1>{advice}</h1>
      <button onClick={fetchRes}>🌈 get advice 🌈</button>
    </section>
  );
}

export default RandomAdviceRendering;
