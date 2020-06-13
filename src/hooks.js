import { useState } from "react";

function useLocalStorage(initialToken=false) {
  const [token, setValue] = useState(initialToken);

  const setToken = () => {
    if(localStorage._joblyToken) {
      setValue(true)
    }
  }
  return [token, setToken]
}

export default useLocalStorage;