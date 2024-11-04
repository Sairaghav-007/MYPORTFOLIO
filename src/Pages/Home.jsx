import React, { useState,useEffect,useRef } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Components/Loader'
import Island from '../Models/Island'
import Sky from '../Models/Sky'
import Bird from '../Models/Bird'
import Plane from '../Models/Plane'
import HomeInfo from '../Components/HomeInfo'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'



const Home = () => {
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true

  const [isRotating,setisRotating] = useState(false)
  const [CurrentStage, setCurrentStage] = useState(1)
  const [isPlaying, setisPlaying] = useState(false)

  useEffect(() => {
   if(isPlaying){
    audioRef.current.play()
   }
   return () => {
    audioRef.current.pause()
   }
  },[isPlaying])

  const adjust = () => {
    let screenScale = null;
    let screenPosition = [0,-6.5,-43];
    let rot = [0.1,4.7,0]

    if(window.innerWidth < 768) {
      screenScale = [0.9,0.9,0.9]
    }
    else{
      screenScale = [1,1,1]
      
    }
    return [screenScale,screenPosition,rot] 
  }
  const adjustPlane = () => {
    let screenScale ,screenPosition;

    if(window.innerWidth < 768) {
      screenScale = [1.5,1.5,1.5]
      screenPosition = [0,-1.5,0]
    }
    else{
      screenScale = [3,3,3]
      screenPosition = [0,-4,-4]
      
    }
    return [screenScale,screenPosition] 
  }

  const [islandScale,islandPosition,islandRotation] = adjust()
  const [planeScale,planePosition] = adjustPlane()
  return (
    <section className='w-full h-screen relative'>

    <div className='absolute top-28 left-0 right-0 z-10
      flex items-center justify-center'>
        {CurrentStage && <HomeInfo CurrentStage={CurrentStage}/>}
      </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing':'cursor-grab'}`}
      camera={{near:0.5, far:1000}}>
        <Suspense fallback={<Loader/>}>
           <directionalLight position={[1,1,1]} intensity={2}/>
           <ambientLight intensity={.5}/>
           <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/>
           <Bird/>
           <Sky isRotating={isRotating}/>
           <Island  
             position = {islandPosition}
             scale={islandScale}
             rot=  {islandRotation}
             isRotating = {isRotating}
             setisRotating= {setisRotating}
             setCurrentStage = {setCurrentStage}
           />
           <Plane
             isRotating={isRotating}
             scale = {planeScale}
             position = {planePosition}
             rotation={[0,20,0]}
           />
        </Suspense>
      
      </Canvas>
       <div className='absolute bottom-2 left-2'>
         <img src={!isPlaying ? soundoff : soundon} alt="" 
         className='w-10 h-10 cursor-pointer object-contain'
         onClick={() => setisPlaying(!isPlaying)}/>
       </div>
    </section>
  )
}

export default Home