'use client';

import Link from 'next/link';
import { HiMenuAlt4, HiOutlineShoppingBag } from 'react-icons/hi';
import { MdSearch } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { Navbar } from '../navbar/Navbar';

export default function Header() {
    return (
        <div className="w-full max-w-1600px mx-auto px-5">
            <div className="flex items-center justify-between uppercase py-2 text-xs font-medium border-b-1px lg:(py-5 text-sm)">
                <div className="flex items-center gap-8  ">
                    <Link href="#">Register</Link>
                    <Link href="#">stores</Link>
                </div>
                <Link href="#">Login</Link>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 lg:(gap-8)">
                    <HiMenuAlt4 />
                    <MdSearch />
                </div>
                <Navbar />
                <div className="flex items-center gap-3 lg:(gap-8)">
                    <AiOutlineHeart />
                    <HiOutlineShoppingBag />
                </div>
            </div>
        </div>
    );
}
