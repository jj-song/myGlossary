import React from "react";
import "./Definitions.css"

const Definitions = ({word, category, meanings, LightMode}) => {
    return (
        <div className="meanings">
            {
                meanings[0] && word && category==="en" && (
                <audio
                    src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} 
                    style={{backgroundColor: '#fff', borderRadius:10}}
                    controls
                >
                    Your Browser doesn't support audio element.
                </audio>
                )
            } 

            {word === "" ? (<span className="subtTitle">Start by typing a word in Search</span>
            ) : (

                word === "TIOCA" ? 
                [meanings[0]].map(
                    (mean) => (
                        mean.meanings.map((item) => (
                            item.definitions.map((def) => (
                                <div className="singleMean" style={{backgroundColor:LightMode?"#3b5360":"white", color: LightMode? "white": "black"}}>
                                    <b> Definition: Travel Issuance and Overseas Citizen Assistance.</b>
                                    <hr style={{backgroundColor:"black", width: "100%"}} />
                                    {
                                        meanings[0].phonetic && (
                                            <span>
                                                <b>Pronunciation: TIE-OH-KA </b>
                                            </span>
                                        )
                                    }
                                </div>
                            ))
                        ))
                    )
                ) :

                word === "ACS" ? 
                [meanings[0]].map(
                    (mean) => (
                        mean.meanings.map((item) => (
                            item.definitions.map((def) => (
                                <div className="singleMean" style={{backgroundColor:LightMode?"#3b5360":"white", color: LightMode? "white": "black"}}>
                                    <b> Definition: American Citizen Services.</b>
                                    <hr style={{backgroundColor:"black", width: "100%"}} />
                                    {
                                        meanings[0].phonetic && (
                                            <span>
                                                <b>Pronunciation: AE-SEE-ES </b>
                                            </span>
                                        )
                                    }
                                </div>
                            ))
                        ))
                    )
                ) :

                word === "IPCA" ? 
                [meanings[0]].map(
                    (mean) => (
                        mean.meanings.map((item) => (
                            item.definitions.map((def) => (
                                <div className="singleMean" style={{backgroundColor:LightMode?"#3b5360":"white", color: LightMode? "white": "black"}}>
                                    <b> Definition: International Parental Child Support.</b>
                                    <hr style={{backgroundColor:"black", width: "100%"}} />
                                    {
                                        meanings[0].phonetic && (
                                            <span>
                                                <b>Pronunciation: IHP-KA </b>
                                            </span>
                                        )
                                    }
                                </div>
                            ))
                        ))
                    )
                ) :

                meanings.map(
                    (mean) => (
                        mean.meanings.map((item) => (
                            item.definitions.map((def) => (
                                <div className="singleMean" style={{backgroundColor:LightMode?"#3b5360":"white", color: LightMode? "white": "black"}}>
                                    <b> Definition: </b> {def.definition}
                                    <hr style={{backgroundColor:"black", width: "100%"}} />
                                    {
                                        meanings[0].phonetic && (
                                            <span>
                                                <b>Pronunciation: </b> {meanings[0].phonetic}
                                            </span>
                                        )
                                    }
                                </div>
                            ))
                        ))
                    )
                )
            )}
        </div>
    );
};

export default Definitions;