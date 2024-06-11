import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddMoreInput from "./AddMoreInput";
import Preview from "./Preview";

function App() {
  const [title, setTitle] = useState("");
  const [isTitleInput, setIsTitleInput] = useState(false);
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <div className="m-4 d-flex" style={{ height: "80vh", gap: "20px" }}>
        {/* left  */}
         <AddMoreInput data={data} isTitleInput={isTitleInput} title={title} setTitle={setTitle} setIsTitleInput={setIsTitleInput} setData={setData}/>

        {/* right  */}
        <Preview data={data} title={title}/>
      </div>
    </div>
  );
}

export default App;
