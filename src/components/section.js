import { Link } from "next/link"
export default function Section({title, link, products}) {
    
    return <>
        <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                {title}
            </h2>
            <div>
                <Link href={link}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>
                </Link>
            </div>
            <div>
                {products}
            </div>
        </div>
    </>
}