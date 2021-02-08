import React, { useCallback, useEffect, useRef, useState } from 'react';
import useLoading from '../useLoading';
import './index.scss';

export default function useIframe(src: string){
    const [visible, setVisible] = useState<boolean>(false);
    const [setLoading, loadingEle] = useLoading();
    useEffect(()=>{
        setLoading(true);
    },[]);
    const content = (
        <>
            {loadingEle}
            <iframe 
                src={src} 
                onLoad={()=>{setLoading(false)}}
                style={{display: visible ? 'block' : 'none'}} 
            >
            </iframe>
        </>
    );
    return [setVisible, content] as const;
}