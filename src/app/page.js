import Carousel from "@/components/carousel";
import Catalog from "@/components/catalog";
import CategoriesView from "@/components/categories-view";
import { getCollections } from "@/lib/shopify";

export default async function Home() {
  const collections = await getCollections();
  return (
    <>
      <Carousel />
      <CategoriesView />
      {collections.map((collection, key) => <Catalog collection={collection} key={key} />)}

    </>
  );
}
