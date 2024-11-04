import React, { useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Fox from '../Models/Fox'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'  
import useAlert from '../Hooks/useAlert'
import Alert from '../Components/Alert'

emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const formRef = useRef(null)
  const [form, setform] = useState({name:'',email:'',message:''})
  const [isLoading, setisLoading] = useState(false)
  
  const [currentAnimation, setcurrentAnimation] = useState('idle')

  const {alert,showAlert,hideAlert} = useAlert()

  const handleChange = (e) => {
     setform({...form, [e.target.name]: e.target.value})

  }

  const handleFocus = () => setcurrentAnimation('walk')
  const handleBlur = () => setcurrentAnimation('idle')
  const handleSubmit = (e) => {
     e.preventDefault();
     setisLoading(true)
     setcurrentAnimation('hit')

     console.log("Submitting form, isLoading:", isLoading);

     console.log(isLoading)

     emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID ,
      {
        from_name : form.name,
        to_name: "Sairaghav",
        from_email : form.email,
        to_email : 'sai.react.three.js007@gmail.com',
        message: form.message

      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
     ).then(() => {
      setisLoading(false)
      console.log("Message sent successfully");

      showAlert({text:'Message Sent Successfully',type:'success'})
     
      setTimeout(() => {
        hideAlert()
        setcurrentAnimation('idle')
        setform({name:'',email:'',message:''})
      },[3000])

      
     }).catch((error) => {
      setisLoading(false)
      setcurrentAnimation('idle ')
      console.log(error)
      console.error("Error in sending message:", error);
      showAlert({text:'I didnt receive your message',type:'danger'})
     })



  }
  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>

      {alert.show && <Alert type={alert.type} text={alert.text} />}
    
      <div className='flex-1 min-w-[50%] flex flex-col'>
      <h1 className='head-text'>Get in Touch</h1>
      <form  className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
        <label className='text-black-500 font-semibold'>
          Name
          <input type="text"  name='name' className='input'
          placeholder='Enter Your Name'
          required
          value={form.name}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}/>
        </label>

      <label className='text-black-500 font-semibold'>
        Email
        <input type="email"  name='email' className='input'
        placeholder='Enter Your email'
        required
        value={form.email}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}/>
      </label>

    <label className='text-black-500 font-semibold'>
      Your Message
      <textarea name='message'
      rows={4}
      className='textarea'
      placeholder='Let me know how I can help you!'
      required
      value={form.message}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}></textarea>
    </label>
    <button type='submit' className='btn'
    onFocus={handleFocus} onBlur={handleBlur}
    disabled={isLoading}
    >
      {
        isLoading ? 'Sending...' : 'Send Message'
      }
    </button>
      </form>
      </div>

    <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
      <Canvas
       camera={{
        position:[0,0,5],
        fov:75,
        near:0.1,
        far:1000
       }}>
      <directionalLight intensity={2.5} position={[0,0,1]}/>
      <ambientLight intensity={1}/>
      <Suspense>
          <Fox
            currentAnimation={currentAnimation}  
            position={[0.5,0.35,0]}
            rotation={[12.6,-0.6,0]}
            scale={[0.5,0.5,0.5]}
          />
      </Suspense>
      </Canvas>
      <Loader/>
    
    </div>

    </section>
  )
}

export default Contact