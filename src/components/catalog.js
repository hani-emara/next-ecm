import { getCollectionProducts } from "@/lib/shopify"
import Link from "next/link"
import ProductCard from "./product-card"
export default async function Catalog({collection, key}) {
  const products = await getCollectionProducts({collection: collection.handle})
    return <>
        <div className="p-6 gap-5 flex justify-between md:items-center border-b border-gray-200 dark:border-neutral-700" key={key}>
            <h2 className="text-l font-bold text-gray-800 dark:text-neutral-200">
                {collection.title}
            </h2>
            <div className="">
                <Link href={collection.path} className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>
                </Link>
            </div>
        </div>
        <div>
            <div className="flex flex-row no-scrollbar gap-x-3 overflow-auto justify-around">
                {products.map((product, i) => <> 
                    <ProductCard key={i} product={product}/>
                </>)}
            </div>
        </div>
        </> 

}