import definition from "../../../../data/definition.json"
import precautions from "../../../../data/precautions.json"
import { useState, useEffect } from "react"
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material"
import Virus from "../assets/virus.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Response = ({word}) => {
    console.log(word);
    const [text, setText] = useState('')
    const [Multiprecautions, setMultiPrecautions] = useState([
        {precaution1: '', precaution2: '', precaution3: '', precaution4: ''},
    ]);

    useEffect(() => {
        var wordDef = definition[word]["Description"];
        var precautionsDef1 = precautions[word]["Precaution_1"];
        var precautionsDef2 = precautions[word]["Precaution_2"];
        var precautionsDef3 = precautions[word]["Precaution_3"];
        var precautionsDef4 = precautions[word]["Precaution_4"];
    
        setText(wordDef);
        setMultiPrecautions(
          {precaution1: precautionsDef1, precaution2: precautionsDef2, precaution3: precautionsDef3, precaution4: precautionsDef4});
    }, [word])

  return (
    <Box m="30px" backgroundColor="#f7f7f7" textAlign="left" borderRadius="15px" boxShadow={1} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
        <Typography m="60px" fontFamily="Poppins" fontWeight="600" fontSize="2rem">Our prediction: <Typography marginLeft="5px"fontFamily="Poppins" fontWeight="600" fontSize="2rem" color="grey">{word.toUpperCase()}</Typography></Typography>
        <Typography marginRight="60px" marginLeft="60px" fontFamily="Poppins" fontWeight="400" textAlign="left">
            {text}
        </Typography>
        <Box display="flex" flexDirection="row">
        <Box width="50%" m="40px">
          <List>
            <ListItem>
            <ListItemText primary={<Typography fontFamily="roboto" fontWeight="700" p="5px" m="5px" backgroundColor="white" width="100px" borderRadius="20px" textAlign="center" boxShadow={2}>Precaution 1</Typography>} secondary={<Typography fontFamily="roboto" fontWeight="300" paddingLeft="15px"> ○ {Multiprecautions.precaution1}</Typography>}/>
            </ListItem>
            <ListItem>
                <ListItemText primary={<Typography fontFamily="roboto" fontWeight="700" p="5px" m="5px" backgroundColor="white" width="100px" borderRadius="20px" textAlign="center" boxShadow={2}>Precaution 2</Typography>} secondary={<Typography fontFamily="roboto" fontWeight="300" paddingLeft="15px"> ○ {Multiprecautions.precaution2}</Typography>}/>
            </ListItem>
            <ListItem>
            <ListItemText primary={<Typography fontFamily="roboto" fontWeight="700" p="5px" m="5px" backgroundColor="white" width="100px" borderRadius="20px" textAlign="center" boxShadow={2}>Precaution 3</Typography>} secondary={<Typography fontFamily="roboto" fontWeight="300" paddingLeft="15px"> ○ {Multiprecautions.precaution3}</Typography>}/>
            </ListItem>
            <ListItem>
                <ListItemText primary={<Typography fontFamily="roboto" fontWeight="700" p="5px" m="5px" backgroundColor="white" width="100px" borderRadius="20px" textAlign="center" boxShadow={2}>Precaution 4</Typography>} secondary={<Typography fontFamily="roboto" fontWeight="300" paddingLeft="15px"> ○ {Multiprecautions.precaution4}</Typography>} />
            </ListItem>
          </List>
          </Box>
        <Box width="50%">
            <img className="hero__img" src={Virus} alt="Virus" />
          </Box>
          </Box>
      </Box>
  )
}

export default Response