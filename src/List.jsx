import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from './redux/slice/basketSlice'

const List = ({data}) => {
    const dispatch=useDispatch()
    const addHandler=(item)=>{
        dispatch(addToBasket(item))
    }
  return (
   <ul>
    {
        data.map((item,index)=>{
            return <li key={index}>{item.name} <button onClick={()=>{
              addHandler(item)
            }}>addToBaskek</button></li>
        })
    }
   </ul>
  )
}

export default List
