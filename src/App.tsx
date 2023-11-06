import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useResetRecoilState,useRecoilValue,atom, RecoilRoot } from 'recoil'

import BasicCard from './Dialog'

import DetailCard from './Retrieve'

import {ButtonAppBar} from './Appbar'


function App() {
  return (
    <RecoilRoot>
      <ButtonAppBar/>
      <AssignRoot/>
    </RecoilRoot>
  )
}
function AssignRoot(){
  const tabVal=useRecoilValue(tab)
  return (
  <div>
        {tabVal==1 && <BasicCard/>}
        {tabVal==2 && <DetailCard/>}
  </div>
  )
}
export const tab=atom({
  key:"tab",
  default:1
})

export default App
