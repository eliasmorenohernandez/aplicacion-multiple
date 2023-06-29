/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 24/06/2023 - 12:37:31
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/06/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { useState, useEffect } from "react";

const useCounter = (initialState) => {
  
  const [counter, setCounter] = useState( Number(localStorage.getItem("counter") ?? initialState));

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter])

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return {
    counter,
    increment,
    decrement
  };
};

export default useCounter;