import { useState } from "react";
import GachaButton from "./GachaButton"
import { fetchGachaResult } from "./lib/fetch";

function App() {
  const [result, setResult] = useState<string>("");

  const showGachaResult = async () => {
    setResult("ガチャを引いています...");
    const result = await fetchGachaResult();
    const result_str = `${result["name_en"]}, ${result["number"]}, ${result["rarity"]}, ${result["card_img"]}`;
    setResult(result_str);
  }
  
  return (
    <>
      <div>
        <GachaButton onClick={showGachaResult}/>
        <p>{result}</p>
      </div>
    </>
  )
}

export default App
