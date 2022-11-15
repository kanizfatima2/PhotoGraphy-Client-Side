import { useEffect } from "react"



const useTitle = title => {

    useEffect(() => {
        document.title = `${title} -Dream WOrld`;
    }, [title])
}

export default useTitle;