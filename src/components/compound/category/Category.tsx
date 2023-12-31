import Link from 'next/link';
import CustomImages from '@/components/images/Images';
import { ICategoriesProps } from '@/interfaces';

function Category({ id, image, label }: ICategoriesProps) {
    return (
        <div
            className=" flex flex-col gap-3 mt-2 lg:(mt-8)"
            key={id}
        >
            <CustomImages
                className="w-full h-200px rounded-md cursor-pointer object-cover  scale-scale-90 transition-all duration-300 hover:(scale-scale-110)"
                alt="category"
                src={image}
            />
            <Link
                href={`product/?category=${id}`}
                className=" tracking-tight mb-8 text-center uppercase text-xs font-font-semibold md:(text-sm) lg:(text-lg mb-10)"
            >
                {label}
            </Link>
        </div>
    );
}
export default Category;
