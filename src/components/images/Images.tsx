import Image from 'next/image';
import React from 'react';

type Props = {
    src: string;
    alt: string;
    priority?: boolean;
    className?: string;
};

function CustomImages({ src, alt, priority, className }: Props) {
    return (
        <Image
            className={className}
            src={src}
            alt={alt}
            width={650}
            height={366}
            sizes="(min-width:720px) 650px, calc(95.5vw - 19px)"
            priority={!!priority}
        />
    );
}

export default CustomImages;
