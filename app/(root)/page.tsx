import { getLatestProducts } from "@/lib/actions/product.action";
import ProductList from "@/components/shared/product/product-list";
const HomePage = async () => {
  const latestProducts = await getLatestProducts() 
  return  <>
    <ProductList 
    data={latestProducts} 
    title="Newest Arrivals"
    
    />
  </> ;
}
 
export default HomePage;