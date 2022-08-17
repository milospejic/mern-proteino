import { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from 'use-reducer-logger'
//import data from "../data";

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, products: action.payload, loading: false};
    case 'FETCH_FAIL':
      return {...state, loading:false, error: action.payload};
    default:
      return state;
  }
};
function HomeScreen() {
  const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  
  //const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      
      //setProducts(result.data);
    };
    fetchData();
  }, []);
  return <div> 
          <h1>Featured products</h1>
          <div className="products">
            {loading? (
             <div>Loading...</div>
            ): error? (
              <div>{error}</div>
            ) : (
           products.map(product => (
              <div className="product" key={product.slang}>
              <Link to={`/product/${product.slang}`}>
                <img src={product.image} alt={product.name}  width='500' height='500'></img>
              </Link>
              <div className='product-info'>
              <Link to={`/product/${product.slang}`}>
                <p>{product.name}</p>
              </Link>
              <p><strong>{product.price} RSD</strong></p>
              <button>Add to cart</button>
              </div>
            </div>
          )))}
          </div>
    </div>;
}
export default HomeScreen;