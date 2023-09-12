import CustomImages from '@/components/images/Images';

export default function Control() {
    return (
        <section className="container my-10 grid grid-cols-1 gap-5 lg:(my-20 grid-cols-2)">
            <div className=" relative row-span-2">
                <CustomImages
                    className=" h-180px md:(h-240px) lg:(h-500px) w-full rounded-xl"
                    alt="control"
                    src="https://images.pexels.com/photos/7319165/pexels-photo-7319165.jpeg?auto=compress&cs=tinysrgb&w=1200"
                />
                <p className="abs-center t uppercase text-2xl font-extrabold text-[#fff] z-10  lg:(text-4xl tracking-wider w-max)">
                    Quantity control
                </p>
            </div>
            <CustomImages
                className="w-full h-180px md:(h-240px) rounded-xl"
                alt="control"
                src="https://images.pexels.com/photos/3837464/pexels-photo-3837464.jpeg?auto=compress&cs=tinysrgb&w=1200"
            />
            <CustomImages
                className="w-full h-180px md:(h-240px) rounded-xl"
                alt="control "
                src="https://images.pexels.com/photos/6070190/pexels-photo-6070190.jpeg?auto=compress&cs=tinysrgb&w=1220"
            />
        </section>
    );
}
