import { CSSProperties } from "react";

export const walletStyle: Record<string, CSSProperties> = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px",
  },
  heading: {
    padding: "24px",
  },
  walletSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: "50px",
    justifyContent: "center",
  },
  actionSection: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px",
    gap: "24px",
  },
  inputSection: {
    border: "1px solid black",
  },
  submitButton: {
    padding: "10px 36px",
    background: "#198cb7",
    borderRadius: "6px",
    color: "#fff",
    boxShadow: "0px 3px 6px 1px #8080806b",
  },
  mainSection: {
    display: "flex",
    width: "100%",
    gap: "12px",
    alignItems: "flex-start",
  },
};
