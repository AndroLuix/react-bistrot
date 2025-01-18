import {useState, useContext, createContext} from 'react';


const AppContext = createContext();


const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [scrollPosition,setScrollPosition] = useState(0);

    const [queryInput, setQueryInput] = useState("margarita");
    const [queryInputMeal, setQueryInputMeal] = useState("");

    

    const openSidebar = () =>{
       return setIsSidebarOpen(true);
    }
    const closeSidebar = () =>{
        return setIsSidebarOpen(false);
    }


    const getScrollPosition = (value) =>{
        setScrollPosition(value);
    }
    const deleteScrollPosition = () => {
        setScrollPosition(0)
    }


    

    return <AppContext.Provider value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        scrollPosition,
        getScrollPosition,
        deleteScrollPosition,

        queryInput, setQueryInput, // for drinks

        queryInputMeal, setQueryInputMeal // for meals
        
    }}> {children} </AppContext.Provider>
}



const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext};
