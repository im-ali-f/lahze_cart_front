import React, { createContext, useState, useEffect } from 'react'

// API
import { getServices } from '../api/api';

export const ServicesContext = createContext();

const ServicesContextProvider = (props) => {

    const [Services, setServices] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setServices(await getServices());
        }

        fetchAPI();

    }, []);

    return ( 
        <ServicesContext.Provider value={Services}>
            {props.children}
        </ServicesContext.Provider>
     );
}
 
export default ServicesContextProvider;