import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setProducts(categoriesMap[category]);
    setIsLoading(false);
  }, [category, categoriesMap]);


  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
            {products &&
            products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </Fragment>
  );
};

export default Category;