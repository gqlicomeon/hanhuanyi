import React from 'react';
import useIframe from '../../hooks/useIframe';
import NavContent from '../../components/navContent';

const Guide: React.FC = function(){
    const [starrysky] = useIframe('http://120.76.196.121:3000/starryrain/');
    const photo = ['/logo.jpg'];
    return (
        <>
            {/* {starrysky}
            <NavContent photo={photo} quote='我们这一生要对抗的是虚荣和虚空'  introduce='HanHuanYi' /> */}
        </>
    )
}

export default Guide;