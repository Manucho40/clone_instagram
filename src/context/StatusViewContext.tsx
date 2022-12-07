import React from "react"

export interface StatusView {
    showStatus: Boolean;
    setShowStatus: (newBool: boolean) => void
  }
export default React.createContext<StatusView | null>(null)