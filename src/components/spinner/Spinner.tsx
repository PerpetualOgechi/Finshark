import React from 'react'
import { ClipLoader } from 'react-spinners'
import "./Spinner.css"

type props = {
    isLoading?: boolean
}

const Spinner = ({isLoading = true}: props) => {
  return (
    <>
    <div id='loading-spinner'>
        <ClipLoader 
        color='#36d7b7'
        loading={isLoading}
        size={35}
        aria-label='Loading-Lpinner'
        data-testid="loader"
         />
    </div>
    </>
  )
}

export default Spinner