import {productsArray} from '../Data/Inventory'
import {Row, Col} from 'react-bootstrap'


export default function ProductCard() {
  return (
    <>
     <div className='product-page'>
    <Row>
    {productsArray.map((product, index) => (
    <Col key={index}>
      
    </Col>
    ))}
  </Row>
  </div>
    
    </>
  );
} 