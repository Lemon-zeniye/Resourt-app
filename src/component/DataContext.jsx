import {createContext, useState} from "react";
import Data from "./data";

export const DataContext = createContext();
export const DataProvider = (props) => {
    const [datas, setDatas] = useState(Data);
    return(
        <DataContext.Provider value={[datas, setDatas]}>
            {props.children}
        </DataContext.Provider>
    )
}