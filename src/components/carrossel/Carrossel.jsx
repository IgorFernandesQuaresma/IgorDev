import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import CardProjetos from '../../components/cards/Card'
import projetos from '../../data/projetos.json'
import { Pagination, Autoplay } from 'swiper/modules';
import './Carrossel.css'


const Carrossel = () => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}  
            navigation={true} 
            autoplay={{ delay: 3000 }}  
            scrollbar={{ draggable: true }}
            slidesPerView={1}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                },
            }}
        >
            {projetos.map((projeto, index) => (
                <SwiperSlide key={index}>
                    <CardProjetos projeto={projeto} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carrossel;