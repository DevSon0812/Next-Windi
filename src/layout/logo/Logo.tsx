import Link from 'next/link';
import { routes } from '@/utils/routes';

export function Logo() {
    return (
        <Link
            className="no-underline uppercase xl:text-xl font-extrabold text-[#000] text-md"
            href={routes.HOME}
        >
            <h1>Son</h1>
        </Link>
    );
}
