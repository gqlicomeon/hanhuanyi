import React, { useState } from 'react';
import './index.scss';

export default function useIframe(src: string){
    const [visible, setVisible] = useState<boolean>(false);
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