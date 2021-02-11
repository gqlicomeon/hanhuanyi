import React, { useEffect } from 'react';
import useIframe from '../../hooks/useIframe';

import './index.scss';

interface PropType{
    setMusicVisible?():void;
}
const FireWork: React.FC<PropType> = (props: PropType) => {
    const [fireWork, setFireWork] = useIframe('http://120.76.196.121:3000/firework/');
    useEffect(()=>{
        props.setMusicVisible && props.setMusicVisible();
        setFireWork(true);
    },[]);
    return(
        <>
            <div className="fire-work">
                {fireWork}
            </div>
        </>
    )
}

export default FireWork;