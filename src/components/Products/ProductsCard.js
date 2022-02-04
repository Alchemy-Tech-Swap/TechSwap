import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/tswapbanner.png';
import '../../App.css';

export default function ProductsCard({ products }) {
  return (
    <>
      <h1 className="productListTitle">
        <img className="techlogo" src={logo} alt="Techswap2"></img>
        Welcome To The TechSwap
      </h1>

      {products.map((item) => (
        <div className="productLists" key={item.id}>
          <Link className="productLinks" to={`/products/${item.id}`}>
            <img className="productImage" src={item.image} />
            <h1 className="productTitle">{item.title}</h1>
            <p className="productCondition">{item.condition}</p>
            <p className="productPrice">${item.price}</p>
          </Link>
        </div>
      ))}
    </>
  );
}
