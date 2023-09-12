import React from 'react';
import CustomImages from '@/components/images/Images';
import { IProductsProps } from '@/interfaces';

function Product({ image, name, price }: IProductsProps) {
    return (
        <div className="mt-2 lg:(mt-4) ">
            <CustomImages
                className="h-200px  lg:(h-280px)  rounded-md w-full"
                alt={name}
                src={image}
            />
            <div className="text-xs font-medium text-[#5b5857] mb-4  md:(text-sm) lg:(text-lg my-2 mb-10) ">
                <p>{name}</p>
                <p className="font-normal">${price}.00</p>
            </div>
        </div>
    );
}

export default Product;
