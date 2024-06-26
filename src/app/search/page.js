import Grid from '@/components/grid';
import ProductGridItems from '@/components/layout/product-grid-items';
import ProductCard from '@/components/product-card';
import { defaultSort, sorting } from '@/lib/constants';
import { getProducts } from '@/lib/shopify';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage({searchParams}) {
  const { sort, q: searchValue } = searchParams
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-5">
          {products.map(product => <ProductCard key={product.handle} product={product}/>)}
          {/* <ProductGridItems products={products} /> */}
        </Grid>
      ) : null}
    </>
  );
}
