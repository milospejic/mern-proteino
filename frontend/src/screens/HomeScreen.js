import { Link } from "react-router-dom";
import data from "../data";
function HomeScreen() {
    return <div> 
        <h1>Featured products</h1>
          <div className="products">
          {data.products.map(product => (
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
          ))}
          </div>
    </div>;
}
export default HomeScreen;