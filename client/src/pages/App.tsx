import { useState, useEffect } from 'react'
import { Button } from '@mantine/core';

function App() {

  const FDlength = 100;
  
  let frames: any[] = [];
  let orangeX = 0;
  let cyanX = FDlength;
  
  const [orangeMaxHP, setOrangeMaxHP] = useState(Math.random() * 200)
  const [cyanMaxHP, setCyanMaxHP] = useState(Math.random() * 200)
  const [orangeDmg, setOrangeDmg] = useState(Math.random() * 20)
  const [cyanDmg, setCyanDmg] = useState(Math.random() * 20)

  let _range = 20

  let _orangeHP = orangeMaxHP;
  let _cyanHP = cyanMaxHP;

  function frameState() {
    return {
      orangeX: orangeX,
      cyanX: cyanX,
      orangeMaxHP: orangeMaxHP,
      cyanMaxHP: cyanMaxHP,
      orangeHP: _orangeHP,
      cyanHP: _cyanHP,
      orangeDmg: orangeDmg,
      cyanDmg: cyanDmg,
    }
  }

  frames.push(frameState())
  while (_orangeHP > 0 && _cyanHP > 0 && frames.length < 3000) {
    // if attackable, attack, otherwise move
    if (Math.abs(orangeX - cyanX) <= _range) {
      _orangeHP -= cyanDmg;
      _cyanHP -= orangeDmg;
    } else {
      orangeX += 5;
      cyanX -= 5;
    }

    frames.push(frameState())

  }

  const [currentFrame, setCurrentFrame] = useState(0)
  let currentState = frames[currentFrame]

  const [ playing, setPlaying ] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => currentFrame < frames.length - 1 && playing && setCurrentFrame(currentFrame+1), 1e2)
    return () => clearTimeout(timer)
   }, [currentFrame, playing])

  return (
    <>
      <Button
        variant="filled"
        color="gray"
        onClick={() => setCurrentFrame(currentFrame-1)}
        disabled={currentFrame === 0}
      >back</Button>
      { currentFrame }
      <Button
        variant="filled"
        color="gray"
        onClick={() => setCurrentFrame(currentFrame+1)}
        disabled={currentFrame === frames.length - 1}
      >fwd</Button>
      <Button onClick={() => setPlaying(false)}>pause</Button>
      <Button onClick={() => setPlaying(true)}>resume</Button>
      <br/>

      <div style={{position: 'relative', width: FDlength*10, height: 20}}>
        <div style={{ 
          position: "absolute",
          background: 'orange',
          width: 10,
          height: 10,
          left: currentState["orangeX"] + "px",
        }}></div>
        <div style={{ 
          background: 'cyan',
          width: 10,
          height: 10,
          left: currentState["cyanX"] + "px",
          position: "absolute"
        }}></div>
      </div>
      <div>
        <div style={{
          display: "inline-block",
          background: 'green',
          width: currentState["orangeHP"],
          height: 20,
        }}></div>
        <div style={{
          display: "inline-block",
          background: 'red',
          width: orangeMaxHP - Math.max(currentState["orangeHP"], 0),
          height: 20
        }}></div>
        HP: {currentState["orangeHP"]}/{orangeMaxHP}, 
        Damage: {orangeDmg}
        <br/>
        <div style={{
          display: "inline-block",
          background: 'green',
          width: currentState["cyanHP"],
          height: 20,
        }}></div>
        <div style={{
          display: "inline-block",
          background: 'red',
          width: cyanMaxHP - Math.max(currentState["cyanHP"], 0),
          height: 20
        }}></div>
        HP: {currentState["cyanHP"]} / {cyanMaxHP}, 
        Damage: {cyanDmg}
      </div>
    </>
  )
}

export default App
