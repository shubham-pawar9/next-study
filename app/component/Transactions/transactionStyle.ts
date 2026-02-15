import { CSSProperties } from "react";

export const transactionStyle: Record<string, CSSProperties> = {
  root: {
    padding: "0 12px",
    borderLeft: "1px solid #d4c7c7",
    minWidth: "280px",
  },
  itemSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  leftSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  itemType: {
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  date: {
    fontSize: "12px",
    fontStyle: "italic",
  },
  rightSection: {
    fontWeight: "bold",
  },
};
