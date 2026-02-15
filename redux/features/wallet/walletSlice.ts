import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITransactions {
  id: string;
  type: "deposit" | "withdraw";
  amount: number;
  date: string;
}

interface IinitialState {
  balance: number;
  transactions: ITransactions[];
}

const initialState: IinitialState = {
  balance: 0,
  transactions: [],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    deposit: (state, action: PayloadAction<number>) => {
      const amount = action.payload;

      if (amount <= 0) return;

      state.balance += amount;

      // ⭐ Add transaction
      state.transactions.push({
        id: Date.now().toString(),
        type: "deposit",
        amount,
        date: new Date().toISOString(),
      });
    },

    withdraw: (state, action: PayloadAction<number>) => {
      const amount = action.payload;

      if (amount <= 0) return;

      if (amount > state.balance) return;

      state.balance -= amount;

      // ⭐ Add transaction
      state.transactions.push({
        id: Date.now().toString(),
        type: "withdraw",
        amount,
        date: new Date().toISOString(),
      });
    },
  },
});

export const { deposit, withdraw } = walletSlice.actions;
export default walletSlice.reducer;
