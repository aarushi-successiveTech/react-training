'use client'

import ErrorDisplay from "./childFetch";
import {ClipLoader} from "react-spinners"

const { useState, useEffect } = require("react");

async function fetching(page , itemsPerPage) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  const data = await response.json();

  const totalItems = data.length;
  const startIndex = (page -1)*itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex+itemsPerPage);
   

    
    return {
        data : paginatedData, 
        totalItems
    }
  
}


const FetchData = () =>{
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [spinner , setSpinner] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [totalItems, setTotalItems] = useState(0);

    const loadData = async() => {

        setSpinner(true)
        setError(null);
        try{
            const result = await fetching(currentPage, itemsPerPage);
            setData(result.data);
            setTotalItems(result.totalItems);
        }
        catch(err){
            setError(err.message)
        }
        finally{

            setSpinner(false);
        }
    };

    useEffect(() =>{
        loadData();
    },[currentPage]);

    const totalPages = Math.ceil(totalItems/itemsPerPage);

    const nextPage = () => {
        if(currentPage < totalPages){
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const prevPage = () => {
        if(currentPage > 1){
            setCurrentPage(prevPage=> prevPage -1);
        }
    };

    if (spinner) {
      return (
         <ClipLoader
      color="grey"  
      loading={true}  
      size={96} 
    />
      );
    }
    if(error){
        return <ErrorDisplay errorMessage={error} onRetry={loadData}/>;

    }

    if(!data){
        return null; 
    }

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <div>
                <button onClick={prevPage} disabled={currentPage ===1}>Previous</button>
                <button onClick={nextPage} disabled={currentPage ===totalPages}>Next</button>
            </div>
        </div>
    )
};

export default FetchData;