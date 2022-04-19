import React, {createContext, useState} from 'react';

export const ModalContext = createContext();




export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState([1, 2, 3])
    

  return (
    <ModalContext.Provider value={{
        modal, setModal, 
    }}>
        { children }
    </ModalContext.Provider>
  )
}


  