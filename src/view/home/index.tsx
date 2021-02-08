import React, { useEffect } from 'react';

import useIframe from '../../hooks/useIframe';

const Home: React.FC = () => {
    const [setVisible, content] = useIframe('http://www.baidu.com');
    useEffect(()=>{
        setVisible(true);
    },[]);
    return (
        <>
            {content}
        </>
    );
};

export default Home;