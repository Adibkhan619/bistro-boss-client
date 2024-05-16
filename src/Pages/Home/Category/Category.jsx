import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
    return (
        <div className="mx-24">
            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                // centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                // loop={true}
                modules={[Pagination]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <img className="mx-auto " src={slide1} alt="" />
                    <h1 className="text-center text-3xl text-white font-semibold -mt-16">
                        SALADS
                    </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" className="mx-auto"/>
                    <h1 className="text-center text-3xl text-white font-semibold -mt-16">
                        PIZZA
                    </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" className="mx-auto"/>
                    <h1 className="text-center text-3xl text-white font-semibold -mt-16">
                        SOUP
                    </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" className="mx-auto"/>
                    <h1 className="text-center text-3xl text-white font-semibold -mt-16">
                        DESERT
                    </h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" className="mx-auto"/>
                    <h1 className="text-center text-3xl text-white font-semibold -mt-16">
                        SALADS
                    </h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
