import React, { useState } from "react";

const Tab= ({tabs}) => {
    console.log(tabs)
    const [tabClick, setTabClick] = useState("");

    function handleClick(content){
            setTabClick(content);
    }

    return(
        <>
            <div>
              <ul>
                {
                    tabs.map((value)=> (
                        
                        <li onClick={() => handleClick(value.contents)}>{value.titles}</li>
                    )) 
                }
             </ul>

            {
                tabClick && <p>This is the content for {tabClick}</p>
            } 
         
            </div>
        </>
       
       
    )
}
export default Tab;