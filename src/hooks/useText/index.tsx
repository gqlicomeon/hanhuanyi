import React, { useEffect, useMemo, useState } from 'react';

export enum TextStyleType {
    style1 = 'style1',
    style2 = 'style2',
    style3 = 'style3',
    style4 = 'style4',
    style5 = 'style5',
    style6 = 'style6',
    style7 = 'style7',
    style8 = 'style8',
    style9 = 'style9',
}
export default function useText(
    text: string, 
    textStyle: TextStyleType = TextStyleType.style1,
    ifAnimation: boolean = false,
    delay: number = 350
){
    const textArr = useMemo(()=>text.split(''),[text]);
    const [animTextArr, setAnimTextArr] = useState<string[]>([]);
    const [begin, setBegin] = useState<boolean>(false);
    const [isEnd, setIsEnd] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(true);
    useEffect(()=>{
        if(ifAnimation && animTextArr.length < textArr.length && begin){
            const timer = window.setTimeout(()=>{
                if(animTextArr.length >= textArr.length-1){
                    window.clearTimeout(timer);
                    setIsEnd(true);
                }
               
                setAnimTextArr(value => {
                    return value.concat(textArr[animTextArr.length])
                });
            },delay);

            return ()=>{
                window.clearTimeout(timer);
            }
        }
    },[ifAnimation, animTextArr, begin]);

   
    const textContent = (
        <div className={`x-sign ${textStyle}`} style={{display: visible ? "block" : "none"}}>
            {
                ifAnimation ? animTextArr.join("") : text
            }
        </div>
    );
    return [textContent, setBegin, isEnd, setVisible] as const;
}