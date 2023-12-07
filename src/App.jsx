import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './redux/slice/apiSlice'
import List from './List'

function App() {

const {data,loading}=useSelector(state=>state.api)

const dispatch=useDispatch()
  return (
    <>
    <button onClick={()=>{
      dispatch(getData())
    }}>getData</button>
    {
      loading ? <p>...loading</p> : <List data={data}/>
    }
    </>
  )
}

export default App
