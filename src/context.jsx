import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

// pravimo custom hook da ne moramo stalno u komponenti 
// u kojoj zelimo da koristimo context kucamo useContext(imeContexta)
export const useGlobalContext = () => useContext(GlobalContext);

// podesavamo mehanizam da bi vrednosti mogle da se prenose na children
const AppContext = ({ children }) => {
  
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };


  return <GlobalContext.Provider value={{isSidebarOpen, setIsSidebarOpen, isModalOpen, setIsModalOpen, openSidebar, closeSidebar, openModal, closeModal}}>
      { children }
  </GlobalContext.Provider>
}

export default AppContext;