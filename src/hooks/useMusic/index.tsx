import React, { useCallback, useState } from 'react';
import './index.scss';

export default function UseMusic(src: string){
    const [musicSrc, setMusicSrc] = useState<string>(src);
    const [visible, setVisible] = useState<boolean>(false);
    const [isPlay, setIsPlay] = useState<boolean>(false);
    const playAudio = useCallback(()=>{
        const audioEle: HTMLAudioElement | null = document.querySelector('.fullpage-music .full-music');
        audioEle?.play();
        setIsPlay(true);
    },[]);
    const pauseAudio = useCallback(()=>{
        const audioEle: HTMLAudioElement | null = document.querySelector('.fullpage-music .full-music');
        audioEle?.pause();
        setIsPlay(false);
    },[]);

    const switchAudio = useCallback(()=>{
        if(isPlay){
            pauseAudio();
        }else{
            playAudio();
        }
    },[isPlay,playAudio, pauseAudio]);

    const content = (
        <>
            <div className="music" style={{display: visible ? "block" : "none"}}>
                <div 
                    className={isPlay ? "music-icon rotate" : "music-icon"}
                    onClick={switchAudio}
                ></div>
                <div 
                    className={isPlay ? "music-sign rotate" : "music-sign"}
                    onClick={switchAudio}
                >
                    {
                        [1,2,3,4,5,6,7].map(val => <div key={val} className={`sign${val}`}></div>)
                    }
                </div>
                <div className="fullpage-music">
                    <audio className="full-music" src={musicSrc} loop></audio>
                </div>
            </div>
        </>
    );
    return [content, setMusicSrc, setVisible, playAudio, isPlay] as const;
}