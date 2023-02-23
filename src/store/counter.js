//Importing createSlice from Redux toolkit to create a slice of state
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    //Name of slice of state that is implemented in store
    name: "counter",
    //Setting initial state of counter to 0
    initialState: {
        value: 0,
    },
    /*Below I have created the reducers used to manipulate the initial state. The reducers are called in the App component when a specific
    button is clicked */
    reducers: {
        //To calculate the interest, i've used the state.value and reset it to state .value +5%
        interest: (state) => {
            state.value += (state.value*0.05);
        },
        //To calculate the charges, i've used state.value and reset it to state.value -15%
        charges: (state) => {
            state.value = (state.value*0.85);
        },
        /*To calculate the deposit, i've used state and action parameters. This function takes the state.value and adds the action value (which
        in this case is a user input)*/
        deposit: (state, action) => {
            state.value += action.payload;
        },
        //I've then used the same function as above but subtracted the action.payload (user input) from state.value 
        withdraw: (state, action) => {
            state.value -= action.payload;
        },
    },
});

//Exporting the action creators
export const { interest, charges, withdraw, deposit } = counterSlice.actions;
//Exporting the counterSlice reducer function which is implemented into store
export default counterSlice.reducer;