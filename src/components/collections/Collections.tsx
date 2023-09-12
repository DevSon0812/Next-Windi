import CustomImages from '@/components/images/Images';
import { Button } from '../compound/button';
import Title from '../primitive/Text/Title';

function Collections() {
    return (
        <section className="w-full max-w-1600px mx-auto px-5 my-10 lg:(my-20)  ">
            <Title
                title="Get you weekly fix of style inspirations"
                className="text-center w-full max-w-400px mx-auto mb-5 lg:(mb-10)"
            />
            <div className="grid grid-cols-1 gap-4 md:(grid-cols-2 gap-6 ) lg:(grid-cols-3 gap-8)">
                <div className=" relative">
                    <CustomImages
                        className="w-full h-200px rounded-md lg:(h-300px) object-cover"
                        src="https://images.pexels.com/photos/13719410/pexels-photo-13719410.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Banner Hero"
                    />
                    <Button
                        type="button"
                        className="abs-center transition-opacity duration-300 hover:(opacity-80)"
                    >
                        Collection
                    </Button>
                </div>
                <div className="  relative">
                    <CustomImages
                        className="w-full h-200px rounded-md lg:(h-300px) object-cover"
                        src="https://images.pexels.com/photos/4846432/pexels-photo-4846432.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt="Banner Hero"
                    />
                    <Button
                        type="button"
                        className="abs-center transition-opacity duration-300 hover:(opacity-80)"
                    >
                        Collection
                    </Button>
                </div>
                <div className=" relative">
                    <CustomImages
                        className="w-full h-200px rounded-md lg:(h-300px) object-cover"
                        src="https://images.pexels.com/photos/1420902/pexels-photo-1420902.png?auto=compress&cs=tinysrgb&w=1200"
                        alt="Banner Hero"
                    />
                    <Button
                        type="button"
                        className="abs-center transition-opacity duration-300 hover:(opacity-80)"
                    >
                        Collection
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Collections;
