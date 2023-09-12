import Image from 'next/image';

type Props = {
    src: string | any;
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
            width={500}
            height={366}
            sizes="(min-width:720px) 650px, calc(95.5vw - 19px)"
            priority={!!priority}
        />
    );
}

export default CustomImages;
