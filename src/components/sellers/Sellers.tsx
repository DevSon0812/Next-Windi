import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

import { Button } from '../compound/button';
import Title from '../primitive/Text/Title';
import Products from '../../../public/api/products.json';
import Product from '../compound/product/Product';
import { IProductsProps } from '@/interfaces';

export default function Seller() {
    const swiperConfig = {
        spaceBetween: 32,
        scrollbar: {
            hide: true,
        },
        modules: [Scrollbar],
        className: 'mySwiper',
        breakpoints: {
            320: { slidesPerView: 1.5 },
            500: { slidesPerView: 2.5 },
            768: { slidesPerView: 3.5 },
            1024: { slidesPerView: 5.5 },
        },
    };

    return (
        <section className="w-full bg-[#f9f8f4] py-5 lg:(py-16)">
            <div className="container">
                <div className="flex items-center justify-between w-full">
                    <Title
                        className="text-left"
                        title="Best sellers"
                    />
                    <Button
                        className="mb-4 hidden md:(block)"
                        type="button"
                    >
                        View ALl
                    </Button>
                </div>
                <div className="mt-2 lg:(mt-3)">
                    <Swiper {...swiperConfig}>
                        {Products.products?.map((product: IProductsProps) => (
                            <SwiperSlide key={`product-item-${product.id}`}>
                                <Product
                                    image={product.image}
                                    price={product.price}
                                    id={product.id}
                                    name={product.name}
                                    sale={product.sale}
                                    category={product.category}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
