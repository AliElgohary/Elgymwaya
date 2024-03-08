import {createSlice} from '@reduxjs/toolkit';

const initialState={weight:null , height:null , gender:"male", age:null}
const bodyInfoSlice = createSlice({
    name: 'bodyInfo',
    initialState:initialState,
    reducers:{
        weightValue:(state,action)=>{
            state.weight = action.payload;
        },
        heightValue:(state,action)=>{
            state.height = action.payload;
        },
        genderValue:(state,action)=>{
            state.gender = action.payload;
        },
        ageValue:(state,action)=>{
            state.age = action.payload;
        },
        bodyBmiValue:(state,action)=>{
            state.Bmi=action.payload;
        },
        caloriesInDayValue:(state,action)=>{
            state.caloriesInDay=action.payload;
        }

    }
})

export const {caloriesInDayValue,bodyBmiValue,ageValue,genderValue,heightValue,weightValue} = bodyInfoSlice.actions;
export default bodyInfoSlice.reducer;