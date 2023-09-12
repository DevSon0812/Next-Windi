import CustomImages from '@/components/images/Images';

function Banner() {
    return (
        <section className="container  mt-4 mb-6 lg:(mt-8 mb-12) relative">
            <CustomImages
                className="w-full h-300px rounded-md
								 mx-auto  md:(h-500px) lg:(h-600px) object-cover"
                src="https://images.pexels.com/photos/13990237/pexels-photo-13990237.jpeg?auto=compress&cs=tinysrgb&w=2200"
                alt="Banner Hero"
            />
            <div className="abs-center text-4xl text-[#fff] font-font-extrabold lg:(text-8xl tracking-tighter) ">
                RoseWood
            </div>
        </section>
    );
}

export default Banner;
