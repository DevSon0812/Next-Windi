import CustomImages from '@/components/images/Images';

function Banner() {
    return (
        <section className="w-full mt-4 mb-6 lg:(mt-8 mb-12)">
            <CustomImages
                className="w-full h-300px rounded mx-auto relative md:(h-500px) lg:(h-600px)"
                src="https://images.unsplash.com/photo-1592885355659-53ce4560ce71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHxmdXJuaXR1cmUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Banner Hero"
            />
            <h4 className=" abs-center text-4xl font-font-extrabold lg:(text-6xl font-black) text-[#fff] leading-4">
                RoseWood
            </h4>
        </section>
    );
}

export default Banner;
