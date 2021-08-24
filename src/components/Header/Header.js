import { createTheme, MenuItem, TextField, ThemeProvider } from "@material-ui/core";
import React from 'react'
import './Header.css'
import categories from "../../data/category"



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
            <span className="title">{word ? word : "DoS/CST: myGlossary"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        id="standard-basic" 
                        label="Search an acronym" 
                            value={word}
                            onChange={(e)=>setWord(e.target.value)}
                    />
                    <TextField className="select"
                        id="standard-select-currency"
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => HandleChange(e.target.value)}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}> {option.value} </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header