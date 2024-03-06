import {createSlice} from '@reduxjs/toolkit';

const initialState={weight:0 , height:0 , gender:"male", age:0}
const bodyInfoSlice = createSlice({
    name: 'bodyInfo',
    initialState:initialState,
    BmiCalc:{
        weight:(state,action)=>{
            state.weight = action.payload;
        },
        height:(state,action)=>{
            state.height = action.payload;
        },
        gender:(state,action)=>{
            state.gender = action.payload;
        },
        age:(state,action)=>{
            state.age = action.payload;
        },
        bodyBmi:(state,action)=>{
            state.Bmi=action.payload;
        },
        caloriesInDay:(state,action)=>{
            state.caloriesInDay=action.payload;
        }

    }
})

export const{height,weight,gender,age,bodyBmi,caloriesInDay} = bodyInfoSlice.actions;
export default bodyInfoSlice.reducer;