import React from 'react';
import logo from "../../images/header-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className=" mt-5">
      <footer dir='ltr' className="text-center text-lg-start text-white" style={{ backgroundColor: '#121619' }}>
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-12 col-lg-6  mx-auto mt-3">
                <img src={logo} alt="img" className='mb-3' />
                <p className='mb-3'>
                 العنوان : الكيلو 52.5 - طريق مصر اسماعيليه الصحراوى
                </p>
                <p className='mb-3'>  الهاتف : 2425110111</p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-12 col-lg-6 mx-auto mt-3">
                <h6 className="mb-4 font-weight-bold">أوقات العمل</h6>
                <p className='d-flex justify-content-between'><span>11:00 AM - 3:50 AM</span><span>الإثنين</span></p>
                <p className='d-flex justify-content-between'><span>11:00 AM - 3:50 AM</span><span>الأربعاء</span></p>
                <p className='d-flex justify-content-between'><span>11:00 AM - 3:50 AM</span><span>الثلاثاء</span></p>
                <p className='d-flex justify-content-between'><span>11:00 AM - 3:50 AM</span><span>الخميس</span></p>
                <p className='d-flex justify-content-between'><span>11:00 AM - 3:50 AM</span><span>يوم الجمعة</span></p>
                <p className='d-flex justify-content-between'><span>11:00 AM - 3:50 AM</span><span>يوم السبت</span></p>
                <p className='d-flex justify-content-between'><span>11:00 AM - 3:50 AM</span><span>الأحد</span></p>
              </div>

            
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2020 Copyright: <img src={logo} alt="logo" style={{width:"80px"}} />
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a className="btn text-white btn-outline-light btn-floating m-1" role="button">
                <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="btn text-white btn-outline-light btn-floating m-1" role="button">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="btn text-white btn-outline-light btn-floating m-1" role="button">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="btn text-white btn-outline-light btn-floating m-1" role="button">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
