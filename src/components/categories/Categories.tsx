// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
// components
import { ICategoriesProps } from '@/interfaces';
import Title from '../primitive/Text/Title';
import Category from '../compound/category/Category';
import categories from '../../../public/api/categories.json';

function Categories() {
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
        <section className="w-full max-w-1600px mx-auto px-5">
            <Title
                className="text-center"
                title="Categories"
            />
            <Swiper {...swiperConfig}>
                {categories.categories?.map((category: ICategoriesProps) => (
                    <SwiperSlide key={`category-item-${category.id}`}>
                        <Category
                            image={category.image}
                            label={category.label}
                            id={category.id}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Categories;
