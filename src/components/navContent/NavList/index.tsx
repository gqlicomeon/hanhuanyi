import React, { useCallback, useState } from "react";
import {Link} from "react-router-dom";

import "./index.scss";
import useText, {TextStyleType} from '../../../hooks/useText';

interface PropType{
    setNavOpen(isOpen: boolean):void;
    playAudio(): void;
}
const NavList: React.FC<PropType> = function(props: PropType){
    const handler = (e) =>{
        let href = e.target.getAttribute("href") || e.target.parentNode.getAttribute("href");
        console.log("href===>",href)
        if(href){
            setTimeout(()=>{
               props.setNavOpen(false);
               props.playAudio();
            },300);
        }
    }
    const [nav1] = useText('NewYear', TextStyleType.style6)
    const [nav2] = useText("Valentine's Day", TextStyleType.style6);
    return (
        <>
            <nav>
                <div className="go"></div>
                <div className="click-me"></div>
                <ul onClick={handler}>
                    <li><Link to="/newyear">{nav1}</Link></li>
                    <li><Link to="/valentine">{nav2}</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default NavList;