import React from 'react'
import { useState } from 'react'

const useAlert = () => {
   const [alert, setalert] = useState({show : 'false',text:'',type:'danger'})

   const showAlert = ({ text,type='danger'}) => {
      console.log('showAlert called:', text, type); 
      setalert({
      show:true,
      text,
      type
   })
  }
   const hideAlert = () => {
      console.log('hideAlert called');
      setalert({
      show:false,
      text:'',
      type:'danger'
   })
}
   
   return {alert,showAlert,hideAlert}
 }

export default useAlert