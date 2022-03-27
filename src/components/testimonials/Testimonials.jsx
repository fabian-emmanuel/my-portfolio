import "./testimonials.css"
import {testimonial_data} from "./testimonial_data";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";



const Testimonials = () => {
  return (
     <section id="testimonials">
       <h5>Reviews From Clients</h5>
       <h2>Testimonials</h2>
       <Swiper
          className="container container__testimonials"
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          pagination={{clickable: true, type: "bullets"}}
          navigation={true}>
         {
           testimonial_data.map(({id, avatar, name, review}) =>
              (
                 <SwiperSlide key={id} className="testimonial">
                   <div className="client__avatar">
                     <img src={avatar} alt={name}/>
                   </div>
                   <h5>{name}</h5>
                   <small className="client__review">{review}</small>
                 </SwiperSlide>
              ))
         }
       </Swiper>
     </section>
  )
};

export default Testimonials;
