import React, { useEffect } from 'react';
import useIframe from '../../hooks/useIframe';

import './index.scss';

interface PropType{
    setMusicVisible?():void;
}
const FireWork: React.FC<PropType> = (props: PropType) => {
    const [fireWork] = useIframe('http://120.76.196.121:3000/firework/');

    return(
        <>
            <div className="fire-work">
                {fireWork}
            </div>
        </>
    )
}

export default FireWork;