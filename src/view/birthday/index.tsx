import React, { useEffect } from 'react';
import useIframe from '../../hooks/useIframe';

import './index.scss';

interface PropType{
    setMusicVisible?():void;
}
const Birthday: React.FC<PropType> = (props: PropType) => {
    const [birthday] = useIframe('http://120.76.196.121:3000/birthday/');

    return(
        <>
            <div className="birthday">
                {birthday}
            </div>
        </>
    )
}

export default Birthday;