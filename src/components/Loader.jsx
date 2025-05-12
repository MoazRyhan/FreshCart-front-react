import React from 'react'
import { LineWave } from 'react-loader-spinner';

export default function Loader() {



  return (
    <>
          <div className="flex justify-center items-center h-screen w-full bg-emerald-50">
      <LineWave
  visible={true}
  height="130"
  width="130"
  color="#4fa94d"
  ariaLabel="line-wave-loading"
  wrapperStyle={{}}
  wrapperClass=""
  firstLineColor=""
  middleLineColor=""
  lastLineColor=""
  />    
      </div>
    </>
  )
}
