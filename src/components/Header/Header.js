import { createTheme, MenuItem, TextField, ThemeProvider } from "@material-ui/core";
import React from 'react'
import './Header.css'
import categories from "../../data/category"
import dos_logo from '../../images/department-of-state.svg'



const Header = ({ setCategory, category, word, setWord, LightMode }) => {
    const darkTheme = createTheme({
        palette: {
          primary: {
              main:LightMode?"#000" : "#fff",
          },
          type: LightMode?"light" :"dark", 
        },
      });

      const HandleChange = (Language) => {
          setCategory(Language);
          setWord("");
      }

    return (
        <div className="header">
            <span className="title1">{word ? "" : "U.S. Department of State"}</span>
            <span className="title2">{word ? "" : "Bureau of Consular Affairs"}</span>
            <span className="title3">{word ? "" : "myGlossary"}</span>
            <span className="title3">{word ? word : ""}</span>
            {/* <img src={dos_logo} width='400vw' height='400vw' /> */}
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        id="standard-basic" 
                        label="Search an acronym" 
                            value={word}
                            onChange={(e)=>setWord(e.target.value)}
                    />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header