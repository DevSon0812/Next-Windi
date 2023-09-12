interface IButtonProp {
    className?: string | any;
    type: 'button' | 'submit' | 'reset';
    children: string;
}

export function Button({ className, type, children }: IButtonProp) {
    return (
        <button
            className={`uppercase bg-[#fff] py-1 px-6 font-xs font-medium lg:(py-2 px-8 font-sm) rounded-60px ${className}`}
            type={type}
        >
            {children}
        </button>
    );
}
