import {productsArray} from '../assets/Inventory'
import {Row, Col} from 'react-bootstrap'







export default function ProductCard() {
  
  return (
    <>
    <div className='products'>
      {productsArray.map((product) => (
        <div key={product.id}> {/* Make sure to provide a unique key for each product */}
          <img src={product.image} alt={product.name} />
        <div className='product-info'>
          <h1>{product.name}</h1>
          <p>${product.price}.00</p>
        </div>
        </div>
      ))}
    </div>
  </>
  );
} 