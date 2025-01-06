import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { createContext, useEffect, useState } from "react";
import apiUrl from "../components/APIURL";
import fetchData from "../components/fetchData";

export const UserInfo = createContext({});

export const UserInfoProvider = ({children}:any) => {
    const [visitor, setVisitor] = useState<any>({});
    
    
    const getFingerprint = async () => {
        let result:any = localStorage.getItem("nolokayonVisitorId");
        
        if (!result){
          const fp = await FingerprintJS.load(); // Load the agent
          result = await fp.get();
          localStorage.setItem("nolokayonVisitorId",JSON.stringify({visitorId: result.visitorId}));
        }else{
          result = JSON.parse(result)
        }

        const url = apiUrl + "visitor/"+result.visitorId
        const response = await fetchData(url,"POST");
        if (response.status == 200) setVisitor(response.visitors);
      };

    useEffect(() => {
        getFingerprint();
      }, []);

    return (
        <UserInfo.Provider value={{visitor}}>
            {children}
        </UserInfo.Provider>
    )
};
