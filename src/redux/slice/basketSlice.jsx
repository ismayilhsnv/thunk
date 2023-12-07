import { createSlice } from "@reduxjs/toolkit";

const basketSlice=createSlice({
    name:'basket',
    initialState:{
        items:[],
    },
    reducers:{
        addToBasket:(state,action)=>{
            const target=state.items.find(item=>item.product.id==action.payload.id)
            if(target){
                target.count=target.count +1,
                target.totalPrice=target.count*target.product.unitPrice
                state.items=[...state.items]
            }
            else{
                const basketItem={
                    id:Date.now(),
                    product:action.payload,
                    count:1,
                    totalPrice:action.payload.unitPrice
                }
                state.items=[...state.items,basketItem]
            }
            console.log(state.items)
        }
    }
})
export const {addToBasket}=basketSlice.actions
export default basketSlice.reducer