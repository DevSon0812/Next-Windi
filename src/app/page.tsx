'use client';

import Categories from '@/components/categories/Categories';
import Banner from '@/components/banner/Banner';
import Seller from '@/components/sellers/Sellers';
import Control from '@/components/control/Control';

export default function Home() {
    return (
        <main>
            <Banner />
            <Categories />
            <Seller />
            <Control />
        </main>
    );
}
