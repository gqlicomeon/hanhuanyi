import React, { useEffect } from "react";

import "./index.scss";
import useText, {TextStyleType} from '../../../hooks/useText';

interface PropType {
    iconUrl: string,
    quote: string,
    isNavOpen: boolean;
}

const Personal: React.FC<PropType> =  function Personal(props: PropType){
    const {iconUrl,quote="",isNavOpen} = props;
    const [text, setBegin] = useText(quote, TextStyleType.style4, true);
    useEffect(()=>{
        const timer = window.setTimeout(()=>{
            setBegin(true);
        },2000);
        return ()=>{
            window.clearTimeout(timer);
        }
    }, [quote,isNavOpen]);

    return (
        <div className="personal">
            <div className={isNavOpen ? "icon animated" : "icon"}>
                <img src={iconUrl || "/logo.jpg"} alt="头像"/>
            </div>
            {text}
        </div>
    )
}

export default Personal;