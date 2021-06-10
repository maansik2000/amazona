import React, { useEffect } from "react";

import ProductList from "../components/ProductList";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";


const HomeScreen = () => {
  //use effect
  // const [products, setProducts] = useState([]sdf);      //setting the product items using useState
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const dispatch = useDispatch();



  //getting all the products from the redux store
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;         //getting three value from the productList

  useEffect(() => {
    dispatch(listProducts());        //dispatching a action only once when components load
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <ProductList key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;


  //this function make a ajax request to the backend and get the data using axios library. and it runs only ones
  // useEffect(() => {
  //   const fetchData = async () => {

  //   try{
    //    setLoading(true);
  //     const {data} = await axios.get('/api/products')
  //    setLoading(false)
  //     setProduct(data);
  //   }
  //}catch(err){
  //   setError(err.message)
  //   setLoading(false)
  // }
  //   fetchData();
  // },[])     
