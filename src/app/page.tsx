'use client';

import Categories from '@/components/categories/Categories';
import Banner from '@/components/banner/Banner';

export default function Home() {
    return (
        <main className="container">
            <Banner />
            <Categories />
        </main>
    );
}
