interface Title {
    title: string;
    className?: string;
}

// eslint-disable-next-line no-redeclare
export default function Title({ title, className }: Title) {
    return (
        <h4 className={`text-xl font-bold uppercase md:(text-2xl) lg:(text-3xl ) ${className}`}>
            {title}
        </h4>
    );
}
