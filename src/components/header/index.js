import Menu from "./menu";
import Search from "./search"
import "./styles/header.css"
import { LuBell, LuShoppingCart } from "react-icons/lu";
import Cart from "./cart/cart";
import Link from "next/link";



export default function Header() {
    return <>
        <header>
            <nav>
                <Menu />

                <div className="me-5 md:me-8">
                    <Link className="flex-none text-xl font-semibold text-white" href="/" aria-label="Brand">Brand</Link>
                </div>

                <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
                    
                    <Search className="mx-auto hidden sm:block"/>

                    <div className="flex flex-row items-center justify-end gap-2">
                        <Cart />
                        <button type="button">
                            <LuBell className="flex-shrink-0 size-4"/>
                        </button>

                        <div className="hs-dropdown relative inline-flex" data-hs-dropdown-placement="bottom-right">
                            <button id="hs-dropdown-with-header" type="button">
                                <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
                            </button>
                            {/* dropdown */}
                        
                        </div>

                        {/* sm drop down */}
                    </div>
                </div>
            </nav>
        </header>
    </>
}