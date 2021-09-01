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
                                    <b> Definition:</b> Travel Issuance and Overseas Citizen Assistance. comprised of the following programs: 1. Passport Support Services (PSS), 2. American Citizen Services (ACS), 3. Non-Citizen Services (NCS), and 4. Consular Lookout and Support Systems (CLASS).
                                    <hr style={{backgroundColor:"black", width: "100%"}} />
                                    {
                                        meanings[0].phonetic && (
                                            <span>
                                                <b>Pronunciation:</b> TIE-OH-KA 
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
                                    <b> Definition:</b> American Citizen Services. An umbrella of applications which includes, but is not limited to: passport services, notary services, and Consular Reports of Births Abroad. The U.S. Consulate General also assists in emergencies, including deaths, arrests and crisis situations.
                                    <hr style={{backgroundColor:"black", width: "100%"}} />
                                    {
                                        meanings[0].phonetic && (
                                            <span>
                                                <b>Pronunciation:</b> AE-SEE-ES 
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
                                    <b> Definition:</b> International Parental Child Support. Application which facilitates the U.S. Department of State's assistance in addressing the removal or retention of a child outside their country of habitual residence in breach of another parent or guardian’s custody rights.
                                    <hr style={{backgroundColor:"black", width: "100%"}} />
                                    {
                                        (
                                            <span>
                                                <b>Pronunciation:</b> IHP-KA 
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