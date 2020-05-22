import { useState } from "react";

function useLocalStorage(initialToken=false) {
  const [token, setValue] = useState(initialToken);

  const setToken = () => {
    if(localStorage._token) {
      setValue(true)
    }
  }
  return [token, setToken]
}

export default useLocalStorage;