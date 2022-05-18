import { useEffect, useState } from "react";




const useData = () =>{

const [apiData , setApiData] = useState([])



useEffect(()=>{


    fetch('https://api.spacexdata.com/v3/launches')
    .then(res => res.json())
    .then(data => setApiData(data))


},[])

return {apiData , setApiData}

}

export default useData