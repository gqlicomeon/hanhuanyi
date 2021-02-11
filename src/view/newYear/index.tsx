import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useIframe from '../../hooks/useIframe';
import useText, { TextStyleType } from '../../hooks/useText';

import './index.scss';

interface PropType{
    setMusicVisible?():void;
}
const NewYear: React.FC<PropType> = (props: PropType) => {
    const history = useHistory();
    const [isConten1End, setIsConten1End] = useState<boolean>(false);
    const [starrysky, setStarrysky] = useIframe('http://120.76.196.121:3000/starrysky/');
    const [text1, setBegin1, isEnd1] = useText('Happy New Year', TextStyleType.style6, true);
    const [text2, setBegin2, isEnd2] = useText('My Baby', TextStyleType.style6, true);
    const [text3, setBegin3, isEnd3] = useText('Best Wishes To You', TextStyleType.style6, true);
    const [text4, setBegin4, isEnd4, setVisible4] = useText('I Heard That You like fireworks', TextStyleType.style2, true);
    const [text5, setBegin5, isEnd5, setVisible5] = useText('I Have Prepared It For You', TextStyleType.style2, true);
    const [text6, setBegin6, isEnd6, setVisible6] = useText('Wish You Like It', TextStyleType.style2, true);
    const [text7, setBegin7, isEnd7, setVisible7] = useText('So, Are You Ready ?', TextStyleType.style2, true);
    const [text8, setBegin8, isEnd8, setVisible8] = useText(`Let's count down ! ! !`, TextStyleType.style2, true);
    const [text9, setBegin9, isEnd9, setVisible9] = useText('3', TextStyleType.style5, true);
    const [text10, setBegin10, isEnd10, setVisible10] = useText('2', TextStyleType.style5, true);
    const [text11, setBegin11, isEnd11, setVisible11] = useText('1', TextStyleType.style5, true);
    const [text12, setBegin12, isEnd12] = useText('0', TextStyleType.style5, true);
    useEffect(()=>{
        setStarrysky(true);
        props.setMusicVisible && props.setMusicVisible();
        const timer = window.setTimeout(()=>{
            setBegin1(true);
        },2000);
        return ()=>{
            window.clearTimeout(timer);
        };
    },[]);
    useEffect(()=>{
        if(isEnd1){
            const timer = window.setTimeout(()=>{
                setBegin2(true);
            },1000);
            return ()=>{
                window.clearTimeout(timer);
            };
        }
    },[isEnd1]);
    useEffect(()=>{
        if(isEnd2){
            const timer = window.setTimeout(()=>{
                setBegin3(true);
            },1000);
            return ()=>{
                window.clearTimeout(timer);
            };
        }
    },[isEnd2]);
    useEffect(()=>{
        if(isEnd3){
            const timer = window.setTimeout(()=>{
                setIsConten1End(true);
                window.setTimeout(()=>{
                    setBegin4(true);
                },4000);
            },1000);
            return ()=>{
                window.clearTimeout(timer);
            };
        }
    },[isEnd3]);
    useEffect(()=>{
        if(isEnd4){
            const timer = window.setTimeout(()=>{
                setVisible4(false);
                window.setTimeout(()=>{
                    setBegin5(true);
                },1000);
            },1000);
            return ()=>{
                window.clearTimeout(timer);
            };
        }
    },[isEnd4]);
    useEffect(()=>{
        if(isEnd5){
            const timer = window.setTimeout(()=>{
                setVisible5(false);
                window.setTimeout(()=>{
                    setBegin6(true);
                },1000);
            },1000);
            return ()=>{
                window.clearTimeout(timer);
            };
        }
    },[isEnd5]);
    useEffect(()=>{
        if(isEnd6){
            const timer = window.setTimeout(()=>{
                setVisible6(false);
                window.setTimeout(()=>{
                    setBegin7(true);
                },1000);
            },1000);
            return ()=>{
                window.clearTimeout(timer);
            };
        }
    },[isEnd6]);
    useEffect(()=>{
        if(isEnd7){
            const timer = window.setTimeout(()=>{
                setVisible7(false);
                window.setTimeout(()=>{
                    setBegin8(true);
                },1000);
            },1000);
            return ()=>{
                window.clearTimeout(timer);
            };
        }
    },[isEnd7]);
    useEffect(()=>{
        if(isEnd8){
            const timer = window.setTimeout(()=>{
                setVisible8(false);
                window.setTimeout(()=>{
                    setBegin9(true);
                },1000);
            },1000);
            return ()=>{
                window.clearTimeout(timer);
            };
        }
    },[isEnd8]);
    useEffect(()=>{
        if(isEnd9){
            const timer = window.setTimeout(()=>{
                setVisible9(false);
                window.setTimeout(()=>{
                    setBegin10(true);
                },1000);
            },1000);
            return ()=>{
                window.clearTimeout(timer);
            };
        }
    },[isEnd9]);
    useEffect(()=>{
        if(isEnd10){
            const timer = window.setTimeout(()=>{
                setVisible10(false);
                window.setTimeout(()=>{
                    setBegin11(true);
                },1000);
            },1000);
            return ()=>{
                window.clearTimeout(timer);
            };
        }
    },[isEnd10]);
    useEffect(()=>{
        if(isEnd11){
            const timer = window.setTimeout(()=>{
                setVisible11(false);
                window.setTimeout(()=>{
                    setBegin12(true);
                },1000);
            },1000);
            return ()=>{
                window.clearTimeout(timer);
            };
        }
    },[isEnd11]);
    useEffect(()=>{
        if(isEnd12){
            const timer = window.setTimeout(()=>{
                history.push('/firework');
            },1000);
            return ()=>{
                window.clearTimeout(timer);
            };
        }
    },[isEnd12]);
    
    return(
        <>
            <div className="new-year">
                {starrysky}
                <div className={isConten1End ? "text-content1 end" : "text-content1"} >
                    {text1}
                    {text2}
                    {text3}
                </div>
                <div className="text-content2">
                    {text4}
                    {text5}
                    {text6}
                    {text7}
                    {text8}
                    {text9}
                    {text10}
                    {text11}
                    {text12}
                </div>
               
            </div>
        </>
    )
}

export default NewYear;