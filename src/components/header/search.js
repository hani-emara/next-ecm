"use client"
import { useSearchParams, useRouter } from "next/navigation";
import { LuSearch } from "react-icons/lu"
import { createUrl } from "@/lib/utils";

export default function Search({className}) {
    const router = useRouter()
    const searchParams = useSearchParams();
    const onSubmit = e => {
        e.preventDefault();
        const search = e.target.search;
        const newParams = new URLSearchParams(searchParams.toString());
    
        if (search.value) newParams.set('q', search.value);
        else newParams.delete('q');
        router.push(createUrl('/search', newParams));
    }

    
    return <form onSubmit={onSubmit} className={className}>
        <label htmlFor="icon" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <LuSearch className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500" />
            </div>
            
            <input type="text" key={searchParams?.get('q')} name="search" defaultValue={searchParams?.get('q') || ''} className="py-2 px-4 ps-11 pe-20 block md:w-96 bg-transparent border-gray-700 shadow-sm rounded-lg text-sm text-gray-300 focus:z-10 focus:border-gray-900 focus:ring-gray-600 placeholder:text-gray-500 dark:border-neutral-700 dark:text-neutral-500 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Search" />
            
            <div className="hidden absolute inset-y-0 end-0 lg:flex items-center pointer-events-none z-20 pe-4">
                <span className="text-gray-500 dark:text-neutral-500">Ctrl + /</span>
            </div>
        </div>
    </form>
    
}