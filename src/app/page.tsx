'use client';

import Categories from '@/components/categories/Categories';
import Banner from '@/components/banner/Banner';
import Seller from '@/components/sellers/Sellers';
import Control from '@/components/control/Control';
import Featured from '@/components/featured/Featured';
import Collections from '@/components/collections/Collections';

export default function Home() {
    return (
        <main>
            <Banner />
            <Categories />
            <Seller />
            <Control />
            <Featured />
            <Collections />
        </main>
    );
}
