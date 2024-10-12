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

      <div style={{position: 'relative', width: FDlength}}>
        <div style={{ 
          background: 'orange',
          width: 20,
          height: 20,
          left: currentState[orangeX],
          position: "absolute"
        }}></div>
        <div style={{ 
          background: 'cyan',
          width: 20,
          height: 20,
          left: currentState[cyanX],
          position: "absolute"
        }}></div>
      </div>
    </>
  )
}

export default App
