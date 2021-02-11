import React, { useCallback, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import Home from './view/home';
import NewYear from './view/newYear';
import FireWork from './view/fireWork';
import UseMusic from './hooks/useMusic';

const App: React.FC = ()=>{
  const [AudioContent, setVisible, playAudio, isPlay] = UseMusic('/somedayOrOneDay.mp3');
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

  const playMusic = useCallback(()=>{
    if(!isPlay){
      setVisible(true);
      playAudio();
    }
  },[playAudio,setVisible]);

  const setMusicVisible = useCallback(()=>{
    setVisible(true)
  }, [setVisible]);

  useEffect(()=>{
    addWordStyle();
  },[]);

  return (
    <>
      {AudioContent}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home success={playMusic}/>
          </Route>
          <Route exact path="/newyear">
            <NewYear setMusicVisible={setMusicVisible}/>
          </Route>
          <Route exact path="/firework">
            <FireWork setMusicVisible={setMusicVisible}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
