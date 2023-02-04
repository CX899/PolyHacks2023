import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)

  const TextInput = () => {
    const inputed_text=document.getElementById("user-text").textContent;

    axios.get("http://127.0.0.1:5000/get_result/"+inputed_text).then(res => 
        {
            console.log(res);
            document.getElementById("user-text").textContent = res.data.serverReply;
            console.log(res.data.serverReply)
        }
    );

};

  return (
    <div id="user-text">
      Hello my name is colin
      <button onClick={TextInput}>Submit</button>
    </div>

  )
}

export default App
