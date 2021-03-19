import React, { useCallback, useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import Home from './view/home';
import NewYear from './view/newYear';
import FireWork from './view/fireWork';
import Cherryrain from './view/cherryrain';
import Valentine from './view/valentine';
import useMusic from './hooks/useMusic';
import Guide from './view/guide';
import NavContent from './components/navContent';

const App: React.FC = ()=>{
  const [AudioContent, setMusicSrc, setMusicVisible, playAudio, isPlay] = useMusic('/somedayOrOneDay.mp3');
  // 添加文字效果
  const addWordStyle = useCallback(()=>{
    const signs = document.querySelectorAll('.x-sign');
    const randomIn = (min: number, max: number) => (
      Math.floor(Math.random() * (max - min + 1) + min)
    );
    const mixupInterval = el => {
      const ms = randomIn(2000, 4000)
      el.style.setProperty('--interval', `${ms}ms`)
    };
    signs.forEach(el => {
      mixupInterval(el)
      el.addEventListener('webkitAnimationIteration', () => {
        mixupInterval(el)
      })
    });
  },[]);

  useEffect(()=>{
    addWordStyle();
  },[]);

  return (
    <>
      {AudioContent}
      <Router>
        <NavContent 
          photo={['/logo.jpg']} 
          quote='我们这一生要对抗的是虚荣和虚空'  
          introduce='HanHuanYi' 
          setMusicSrc={setMusicSrc}
          setMusicVisible={setMusicVisible}
          playAudio={playAudio}
          isPlay={isPlay}
        />
        <Switch>
          <Route exact path="/">
            <Home  playAudio={playAudio}/>
          </Route>
          <Route exact path="/guide">
            <Guide />
          </Route>
          <Route exact path="/newyear">
            <NewYear />
          </Route>
          <Route exact path="/firework">
            <FireWork />
          </Route>
          <Route exact path="/valentine">
            <Valentine />
          </Route>
          <Route exact path="/cherryrain">
            <Cherryrain />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
