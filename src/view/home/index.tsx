import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import useIframe from '../../hooks/useIframe';
import useText, { TextStyleType } from '../../hooks/useText';
import SearchInput from '../../components/searchInput/index';
import './index.scss';

interface PropType {
    success?():void;
}
const Home: React.FC<PropType> = (props: PropType) => {
    const history = useHistory();
    const [content, setVisible] = useIframe('http://hanhuanyi.top:3000/starryrain/');
    const [hanHuanYi] = useText('HanHuanYi', TextStyleType.style5);
    const successInput = () => {
        props.success && props.success();
        history.push('/newyear');
    }
    useEffect(()=>{
        setVisible(true);
    },[]);

    return (
        <div className="home">
            {content}
            <div className="head-title">
                {hanHuanYi}
            </div>
            <div className="foot-search">
                <SearchInput  placeholder="请输入环亦的生日（如0101）" success={successInput}/>
            </div>
        </div>
    );
};

export default Home;