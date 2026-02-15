import { useAppSelector } from "@/redux/hooks";
import { transactionStyle } from "./transactionStyle";
import { formatDate } from "./hooks";

const Transactions = () => {
    const transactionsData = useAppSelector((s) => s.wallet.transactions);

    return (
        <div style={transactionStyle.root}>
            <h1>Transaction History</h1>
            {
                transactionsData.map((item) => {
                    return (
                        <div key={item.id} style={transactionStyle.itemSection}>
                            <div style={transactionStyle.leftSection}>
                                <span style={transactionStyle.itemType}>{item.type}</span>
                                <span style={transactionStyle.date}>{formatDate(item.date)}</span>
                            </div>
                            <div style={transactionStyle.rightSection}>{item.amount}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Transactions;