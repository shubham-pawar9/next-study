"use client";

import { deposit, withdraw } from "@/redux/features/wallet/walletSlice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { walletStyle } from "./walletStyle";
import Transactions from "../component/Transactions/Transactions";

const WalletPage = () => {
    const balance = useAppSelector((s) => s.wallet.balance);
    const dispatch = useAppDispatch();

    const [withdrawAmount, setWithdrawAmount] = useState("");
    const [depositAmount, setDepositAmount] = useState("");

    return (
        <div style={walletStyle.root}>
            <h1 style={walletStyle?.heading}>Wallet Balance - {balance}</h1>
            <div style={walletStyle.mainSection}>
                <div style={walletStyle.walletSection}>
                    <div style={walletStyle.actionSection}>
                        <h2>Withdraw Amount</h2>

                        <input
                            style={walletStyle.inputSection}
                            type="number"
                            value={withdrawAmount}
                            onChange={(e) => setWithdrawAmount(e.target.value)}
                        />

                        <button
                            style={walletStyle.submitButton}
                            type="submit"
                            onClick={() => dispatch(withdraw(Number(withdrawAmount)))}
                        >
                            Submit
                        </button>
                    </div>

                    <div style={walletStyle.actionSection}>
                        <h2>Deposit Amount</h2>

                        <input
                            style={walletStyle.inputSection}
                            type="number"
                            value={depositAmount}
                            onChange={(e) => setDepositAmount(e.target.value)}
                        />

                        <button
                            style={walletStyle.submitButton}
                            type="submit"
                            onClick={() => dispatch(deposit(Number(depositAmount)))}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div style={walletStyle.transactionSection}>
                    <Transactions />
                </div>
            </div>
        </div>
    );
};

export default WalletPage;
