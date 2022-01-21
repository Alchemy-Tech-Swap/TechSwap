import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailCard from '../../components/Products/ProductDetailCard';
import { getProductById } from '../../services/products';
import { getUserById } from '../../services/users';
import { client } from '../../services/client';

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductById(params.id);
      const user = await getUserById(client.auth.session().user.id);
      setProduct(data);
      setCurrentUser(user);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);
  if (loading) {
    return <h1>loading</h1>;
  }

  const onClick = async () => {
    return window.open(
      `mailto:${currentUser.email}?subject=I'm interested in your ${product.title}`
    );
  };

  return (
    <div className="product-detail">
      <div key={product.id}>
        <ProductDetailCard product={product} currentUser={currentUser} onClick={onClick} />
      </div>
    </div>
  );
}
