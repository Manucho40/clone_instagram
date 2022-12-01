import React from "react"

export interface AppContextInterface {
    switchConnexionMode: Boolean;
    updateSwitchConnexionMode: (newBool: boolean) => void
  }
export default React.createContext<AppContextInterface | null>(null)