import React, { useEffect, useState } from "react";
import {useLocation} from "react-router-dom";

import NavList from "./NavList";
import Personal from "./Personal";
import NavFoot from "./NavFoot";

import UseText, {TextStyleType} from "../../hooks/useText";

import "./index.scss";

interface PropType{
    photo: string[];
    introduce: string;
    quote: string;
    setMusicSrc(src: string): void;
    setMusicVisible(visible: boolean): void;
    playAudio(): void;
    isPlay: boolean;
}

const NavContent: React.FC<PropType> = function NavContent(prop: PropType){
    const {photo,introduce,quote, setMusicVisible,setMusicSrc, playAudio} = prop;
    const [text] = UseText(introduce, TextStyleType.style5);
    const [isNavOpen,setNavOpen] = useState(false);
    const {pathname} = useLocation();

    useEffect(()=>{
        switch(pathname){
            case "/":
                setMusicVisible(false);
                break;
            case "/newyear":
                setMusicSrc('/somedayOrOneDay.mp3');
                setMusicVisible(true);
                break;
            case "/valentine":
                setMusicSrc('/IAmWait.mp3');
                setMusicVisible(true);
                break;
            default:
                setMusicVisible(true);
        }
    
    },[pathname]);
    return (
        <>      
            <button className={pathname === "/" ? "nav__bar hide" : "nav__bar"} onClick={()=>setNavOpen(state=>!state)}>
                <i className={isNavOpen ? "nav__close" : "nav__open"}></i>
            </button>
            <div className={isNavOpen ? "nav__content down" : "nav__content"}>
                <h1 className={pathname === "/" ? "nav__title" : "nav__title hide"}>{text}</h1>
               <Personal iconUrl={photo[0]} quote={quote} isNavOpen={isNavOpen}/>
               <div className="guide-nav">
                    <NavList setNavOpen={setNavOpen} playAudio={playAudio}/>
               </div>
               <NavFoot />
            </div>
        </>
    )
}



export default NavContent;