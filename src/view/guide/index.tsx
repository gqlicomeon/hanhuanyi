import React from 'react';
import useIframe from '../../hooks/useIframe';
import useText, { TextStyleType } from '../../hooks/useText';
import "./index.scss";

const Guide: React.FC = function(){
    const [starrysky] = useIframe('http://120.76.196.121:3000/starryrain/');
    const [text1] = useText("韩环艺", TextStyleType.style5);
    const [text2] = useText("喜欢你是我做过最有耐心的一件事", TextStyleType.style5);
    return (
        <>
            {starrysky}
            <div className="text-content-guide">
                {text1}
                {text2}
            </div>
           
        </>
    )
}

export default Guide;