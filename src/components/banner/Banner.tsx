import CustomImages from '@/components/images/Images';
import Banner1 from '../../assets/images/bannerRosewood.jpg';

function Banner() {
    return (
        <section className="w-full mt-4 mb-6 lg:(mt-8 mb-12)">
            <CustomImages
                className="w-full h-300px rounded-md
								 mx-auto relative md:(h-500px) lg:(h-600px)"
                src={Banner1}
                alt="Banner Hero"
            />
        </section>
    );
}

export default Banner;
