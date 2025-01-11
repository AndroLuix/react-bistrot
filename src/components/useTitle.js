import  { useEffect } from 'react'

const useTitle = (title) => {
  
    useEffect(()=>{
        document.title = `Bistrot - ${title} _ Tech Craft Code`;

    },  [title])
    
}

export default useTitle