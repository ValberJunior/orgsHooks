import { useState, useEffect } from "react";
import { getProducers } from '../services/getData';

const useProducers = () => {

    const [title, setTitle] = useState("");
    const [producers, setProducers] = useState([]);
    
    useEffect(()=>{
        const data = getProducers();
        setTitle(data.title);
        setProducers(data.list);
    },[]) 

    return [title, producers]
}

export default useProducers;