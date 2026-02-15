import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    balance: number
}

const initialState: IinitialState = {
    balance: 1000
}
const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        deposit: (state, action) => {
            const amount = action.payload;
            if(amount <= 0){
                alert("Amount greater than 0")
            }
            state.balance += action.payload
        },
        withdraw: (state, action) => {
            const amount = action.payload;
            if(amount <= 0){
                alert("Amount greater than 0")
            }
            // Prevent negative balance
            if (amount <= state.balance) {
                state.balance -= amount;
            } else {
                alert("Insufficient balance");
            }
        }
    }
});

export const { deposit, withdraw } = walletSlice.actions;
export default walletSlice.reducer;
