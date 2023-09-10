'use client';

import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { routes } from '@/utils/routes';
import categories from '../../../public/api/categories.json';

interface INavbar {
    id: number;
    label: string;
}

export function Navbar() {
    return (
        <ul className="flex items-center justify-center gap-8 pt-2 lg:(pt-5)">
            {categories?.categories?.slice(0, 5)?.map((item: INavbar) => (
                <li
                    className="list-none "
                    key={`nav-items-${item.id}`}
                >
                    <Link
                        className=" no-underline text-xs font-medium uppercase text-[#000] transition duration-300 group lg:(text-sm)"
                        href={routes.PRODUCTS}
                    >
                        {item.label}
                        <span className="block w-0 h-2px bg-[#000] transition-all ease-in duration-300 lg:group-hover:w-full"></span>
                    </Link>
                </li>
            ))}
            <AiOutlineClose
                size={24}
                className="absolute right-8 top-12 block lg:hidden"
            />
        </ul>
    );
}
