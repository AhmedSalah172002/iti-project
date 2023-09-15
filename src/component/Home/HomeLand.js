import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
import banner1 from "../../images/pizza-banner-1.png"
import banner2 from "../../images/daily-fresh.png"
import banner3 from "../../images/pizza-banner-2.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const HomeLand = () => {
  return (
   <>
   <div dir='ltr' className="banner ">
 
   <Swiper
        slidesPerView={1}
        spaceBetween={40}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
      }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="text-banner mb-5">
                <h1>عنواننا .. السلامة الغدائية</h1>
                <p>من أجل رضاكم وصحتكم، لا تختصر بيتزا هت سبل وإجراءات السلامة الغدائية. ولهذا السبب 
                  .. نطبق بحزم كافة معايير الأمان والسلامة الغدائية 
                  العالمية والحكومية، عند شحن المواد الغذائية من الموردين إلى مطاعمنا</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="banner-image">
                <img className='img-fluid' src={banner1} alt="banner1" />
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="text-banner text-center mb-5">
                <h1 >طازجة .. وعلى ذوقك</h1>
                <p>بدءاً من العجينة وانتهاءاً بتقطيع المكونات وتحضيرها، يحرص فريقنا المؤهل على تقديم أنواع 
                  البيتزا كلّها بشكل طازج. لذا .. كل وجبة تطلبها ستأتيك طازجة
                   .. على ذوقك .. بل وتفوق توقعاتك</p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="banner-image">
                <img className='img-fluid' src={banner2} alt="banner2" />
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
          <div className="row">
          <div className="col-lg-6 col-md-12">
              <div className="banner-image">
                <img className='img-fluid' src={banner3} alt="banner3" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="text-banner mb-5">
                <h1>لا نقدم لك إلا الأفضل</h1>
                <p>يحرص “فريق ضمان الجودة“ على التمسك بأعلى المعايير، بحزم يفوق تدريبات الأندية 
                  الإيطالية لكرة القدم. فمثلا.. لتكون موّردا معتمدا لدى بيتزا هت، عليك تجاوز عملية اختيار صارمة، والخضوع لاختبارات جودة دورية. نقوم بكل هذه الإجراءات الصعبة .. لنقدم لزبنائنا طعماً يتّسم بالمكونات 
                  الطبيعية، الرائعة والشهية في كل مرة يزوروننا فيها</p>
              </div>
            </div>
           
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
   </div>
   </>
  )
}

export default HomeLand
