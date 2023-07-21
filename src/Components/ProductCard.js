import {productsArray} from '../assets/Inventory'








export default function ProductCard() {
  
  return (
    <>
    <div className='products'>
      {productsArray.map((product) => (
        <div key={product.id}> {/* Make sure to provide a unique key for each product */}
          <img src={product.image} alt={product.name} />
        <div className='product-info'>
          <p>{product.name}</p>
          <p>${product.price}.00</p>
        </div>
        </div>
      ))}
    </div>
  </>
  );
} 