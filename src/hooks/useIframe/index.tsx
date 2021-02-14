import React, { useState } from 'react';
import './index.scss';

export default function useIframe(src: string, initalState: boolean = true){
    const [visible, setVisible] = useState<boolean>(initalState);
    const content = (
        <>
            <iframe 
                src={src} 
                style={{display: visible ? 'block' : 'none'}} 
            >
            </iframe>
        </>
    );
    return [content, setVisible, visible] as const;
}