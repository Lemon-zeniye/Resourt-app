import { createContext, useState } from "react";
import Data from "./data";
export const ResorteContext = createContext()

export const ResorteProvider = (props) => {
   const [resort, setResort] = useState[Data];
    return(
        <ResorteContext.Provider>
            {props.children}
        </ResorteContext.Provider>
    )
}