import { useRouter } from 'next/router';

const ProductItem = () => {
    const router = useRouter();
    console.log(router.query, "Router");

    return (
        <>
            <h2>Product Item Number </h2>
            <h4>Product Id: {router.query.productId}</h4>
        </>
    )
  }
  
  export default ProductItem