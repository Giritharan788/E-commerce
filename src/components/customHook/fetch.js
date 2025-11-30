import { useEffect } from "react";
import { useState } from "react";

function useFetch(url){
      const [products, setProducts] = useState([]);
      const [errors, setErrors] = useState("");
      const [loading, setLoading] = useState("true");
    
    useEffect(()=>
    {
        let fetchApi = async ()=>{

            try{

                let respose = await fetch(url);
                if(respose.ok){
    
                    let data = await respose.json()
                    setProducts(data)
                }
                
                else{
                    throw new Error("Data Not Found")
                }
            }
            catch(error){
                setErrors(error)
            }
            finally{
                setLoading(false)
            }
        }
        fetchApi();
            

    },[])
    return {products,loading,errors,setProducts}

}
export default useFetch;