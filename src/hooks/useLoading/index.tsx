import React, { useState } from 'react';

import loadingImg from './img/loading.png';
import './index.scss';

export default function useLoading(){
    const [visible, setVisible] = useState<boolean>(true);
    const content = (
        <div className="loading-wrapper" style={{display: visible ? 'block' : 'none'}}>
            <div className='loading'>
                <img src={loadingImg} alt="loading"/>
            </div>
        </div>
    );
    return [setVisible, content] as const;
};