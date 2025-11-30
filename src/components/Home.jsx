import React from 'react'
import useFetch from './customHook/fetch'

const Home = () => {
  let {products} = useFetch("http://localhost:4000/products")
  return (
    <>
    <h1>Home - Number of Products - {products.length}</h1>
    <h3 style={{textAlign:"center"}}> *** ONLY THE PRODUCTS SECTION WOULD WORK *** </h3>
    </>
  )
}

export default Home