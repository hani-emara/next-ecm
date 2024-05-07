import Link from "next/link"
import { LuPlus } from "react-icons/lu"
export default function ProductCard({key, product}) {
    return <>
        <div class="my-3 flex-shrink-0  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-neutral-700 shadow-md hover:opacity-70 transition-opacity" key={key}>
            
            <a class="relative mx-3 mt-3 flex size-15 overflow-hidden rounded-xl" href={`/product/${product.handle}`}>
                <img class="object-cover" src={product.featuredImage.url} alt="product image" />
                
                {/* <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> */}
            </a>
            <div class="mt-2 px-5 pb-5 flex flex-col flex-grow">
                <div className="basis-1/2">
                    <Link href={`/product/${product.handle}`}>
                    <h5 class="text-lg text-gray-800 dark:text-neutral-200">{product.title}</h5>
                    </Link>
                </div>
                <div className="basis-1/2 ">
                    <div class=" flex flex-row justify-between items-center">
                    <p className="">
                        <span class="text-lg font-bold text-gray-800 dark:text-neutral-200">{product.priceRange.maxVariantPrice.currencyCode} {product.priceRange.maxVariantPrice.amount}</span>
                        {/* {product.availableForSale ? <span class="text-sm text-slate-900 line-through">{product.priceRange.minVariantPrice.currencyCode}{product.priceRange.minVariantPrice.amount}</span> : <></>} */}
                        
                    </p>
                    <Link href={`/product/${product.handle}`} class="flex flex-row rounded-full bg-slate-900 p-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"> <LuPlus className="h-6 w-6" /> Add To Cart</Link>
                
                    
                        
                    
                    </div>

                </div>
            </div>
        </div>

    </>
}