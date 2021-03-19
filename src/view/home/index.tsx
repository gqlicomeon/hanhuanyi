import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import useIframe from '../../hooks/useIframe';
import useText, { TextStyleType } from '../../hooks/useText';
import SearchInput from '../../components/searchInput/index';
import NavFoot from '../../components/navContent/NavFoot';
import './index.scss';
interface PropType{
    playAudio():void;
}
const Home: React.FC<PropType>= (prop: PropType) => {
    const history = useHistory();
    const [content] = useIframe('http://120.76.196.121:3000/starryrain/');
    const [hanHuanYi] = useText('HanHuanYi', TextStyleType.style5);
    const successInput = () => {
        history.push('/guide');
        prop.playAudio();
    }

    return (
        <div className="home">
            {content}
            <div className="head-title">
                {hanHuanYi}
            </div>
            <div className="foot-search">
                <SearchInput  placeholder="请输入环亦的生日（如0101）" success={successInput}/>
            </div>
            <NavFoot />
        </div>
    );
};

export default Home;