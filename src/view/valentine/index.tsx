import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useIframe from '../../hooks/useIframe';
import useText, { TextStyleType } from '../../hooks/useText';

import './index.scss';

const Valentine: React.FC = () => {
    const history = useHistory();
    const [starrysky] = useIframe('http://120.76.196.121:3000/starrysky/');
    const [text1, setBegin1, isEnd1] = useText("Happy Valentine's Day", TextStyleType.style6, true);
    const [text2, setBegin2, isEnd2] = useText('My Baby', TextStyleType.style6, true);
    const [text3, setBegin3, isEnd3] = useText('I Love You', TextStyleType.style6, true);
   
    useEffect(()=>{
        const timer = window.setTimeout(()=>{
            setBegin1(true);
        },2000);

        return ()=>{
            window.clearTimeout(timer);
        };
    },[]);
    useEffect(()=>{
        if(isEnd1){
            const timer = window.setTimeout(()=>{
                setBegin2(true);
            },1000);
            return ()=>{
                window.clearTimeout(timer);
            };
        }
    },[isEnd1]);
    useEffect(()=>{
        if(isEnd2){
            const timer = window.setTimeout(()=>{
                setBegin3(true);
            },1000);
            return ()=>{
                window.clearTimeout(timer);
            };
        }
    },[isEnd2]);
    useEffect(()=>{
        if(isEnd3){
            const timer = window.setTimeout(()=>{
                window.setTimeout(()=>{
                    history.push('/cherryrain');
                },1000);
            },2000);
            return ()=>{
                window.clearTimeout(timer);
            };
        }
    },[isEnd3]);


    
    return(
        <>
            <div className="new-year">
                {starrysky}
                <div className="text-content2">
                    {text1}
                    {text2}
                    {text3}
                </div>
               
            </div>
        </>
    )
}

export default Valentine;