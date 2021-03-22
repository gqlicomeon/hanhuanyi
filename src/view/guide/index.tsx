import React, { useEffect } from 'react';
import useIframe from '../../hooks/useIframe';
import useText, { TextStyleType } from '../../hooks/useText';
import "./index.scss";

const Guide: React.FC = function(){
    const [starrysky] = useIframe('http://120.76.196.121:3000/starryrain/');
    const [text1, setBegin1, isEnd1] = useText("韩环艺", TextStyleType.style5, true, 400);
    const [text2, setBegin2] = useText("喜欢你是我做过最有耐心的一件事", TextStyleType.style5, true, 300);
    useEffect(()=>{
        const timer = window.setTimeout(()=>{
            setBegin1(true);
        },8000)
        return () => {
            clearTimeout(timer);
        }
    },[]);

    useEffect(()=>{
        let timer;
        if(isEnd1){
            timer = window.setTimeout(()=>{
                setBegin2(true);
            },2000)
        }
        return () => {
            timer && clearTimeout(timer);
        }
    },[isEnd1]);
    
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