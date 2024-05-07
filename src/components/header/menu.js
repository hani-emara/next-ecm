"use client";
import { useState } from "react";
import { LuAlignJustify } from "react-icons/lu";
import { Drawer } from "@mui/material";
import "./styles/header.css"
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import Search from "./search";


export default function Menu() {
  
  
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
    <div className="sm:hidden">
      <button onClick={() => setIsOpen(true)} className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600 "><LuAlignJustify className="flex-shrink-0 size-4" /></button>

    </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <div className="bg-gray-900 border-b border-gray-700 text-sm py-2.5 sm:py-4 dark:bg-neutral-950 dark:border-neutral-700 h-full p-3">

          <Search className="mx-auto"/>
        </div>
      </Drawer>
      
    </>
  );
  }