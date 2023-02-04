import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';

function App() {

  const TextInput = () => {
    const inputed_text=document.getElementById("user-text").textContent;

    axios.get("http://127.0.0.1:5000/get_result/"+inputed_text).then(res => 
        {
            console.log(res);
            document.getElementById("user-text").textContent = res.data.serverReply;
            console.log(res.data.serverReply)
        }
    );
  }

  return (
    <Box backgroundColor="white" display="flex" flexDirection="row" borderRadius="15px" m="40px">
    <Box m="60px" display="flex" flexDirection="column" width="50%">
      <Typography variant="h3">Sickness PolyHacks</Typography>
      <Typography> 
        <p>
          Sickness PolyHacks is a web application that allows users to input their symptoms and receive a diagnosis of their illness.
        </p>
      </Typography>
      <Typography variant="h8">Enter your symptoms</Typography>
      <TextField
      id="outlined"
      label="Symptoms"
      multiline
      rows={4}
      defaultValue="Ex: Fever, Cough, Headache, etc."
      variant="outlined"
      />
      <Button variant="contained" width="20px" color="success">Submit</Button>
    </Box>
    <Box m="60px" display="flex" flexDirection="column" width="40%">
      <img className='hero__img' src={Doctor} alt="Doctor" />
      <button onClick={TextInput}>Submit</button>
  </Box>
  </Box>
  )
}

export default App
