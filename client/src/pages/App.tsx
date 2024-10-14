import { useState } from 'react'
import { Button } from '@mantine/core';

function App() {

  const FDlength = 100;
  
  let frames: any[] = [];
  let orangeX = 0;
  let cyanX = FDlength;
  
  let orangeHP = 100
  let cyanHP = 100
  let orangeDmg = 9
  let cyanDmg = 11

  let _range = 20

  function frameState() {
    return {
      orangeX: orangeX,
      cyanX: cyanX,
      orangeHP: orangeHP,
      cyanHP: cyanHP,
      orangeDmg: orangeDmg,
      cyanDmg: cyanDmg,
    }
  }
  frames.push(frameState())
  while (orangeHP > 0 && cyanHP > 0 && frames.length < 3000) {
    // if attackable, attack, otherwise move
    if (Math.abs(orangeX - cyanX) <= _range) {
      orangeHP -= cyanDmg;
      cyanHP -= orangeDmg;
    } else {
      orangeX += 5;
      cyanX -= 5;
    }

    frames.push(frameState())

  }
  console.log(frames);


  const [currentFrame, setCurrentFrame] = useState(0)
  let currentState = frames[currentFrame]

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
          width: 100 - Math.max(currentState["orangeHP"], 0),
          height: 20
        }}></div>
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
          width: 100 - Math.max(currentState["cyanHP"], 0),
          height: 20
        }}></div>
      </div>
    </>
  )
}

export default App
