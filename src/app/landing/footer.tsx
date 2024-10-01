import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col py-5 bg-blue-900 text-white">
        <div className="flex flex-wrap justify-between px-5">
          <div className="flex flex-col mb-5 w-full md:w-1/2 lg:w-1/4 ml-20">
            <div>
              <h4 className="text-2xl font-bold mb-4">About Us</h4>
              <p className="mb-3 text-justify">
                We are Nitro Runners, a dedicated team of three developers currently in our
                third year of undergraduate studies. Our diverse skills and collaborative approach enable us to tackle
                complex challenges and deliver high-quality products. Each member of our team brings unique strengths and perspectives,
                allowing us to innovate and create effective solutions that meet the needs of our clients and users. Our commitment to excellence and continuous learning drives
                us to stay at the forefront of technology and industry trends, ensuring that we deliver top-notch results in every project we undertake.
              </p>
            </div>
            <Image
              src="./images/logo/teamlogo.png" // Replace with your image URL
              alt="Team Logo"
              width={300} // Adjust width
              height={80} // Adjust height
              className="object-cover mb-3"
            />
          </div>
          <div className="flex flex-col mb-5 w-full md:w-1/2 lg:w-1/4 ml-15">
            <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
            <a href="#" className="mb-2"><i className="fas fa-angle-right mr-2"></i> About</a>
            <a href="#" className="mb-2"><i className="fas fa-angle-right mr-2"></i> Cars</a>
            <a href="#" className="mb-2"><i className="fas fa-angle-right mr-2"></i> Car Types</a>
            <a href="#" className="mb-2"><i className="fas fa-angle-right mr-2"></i> Team</a>
            <a href="#" className="mb-2"><i className="fas fa-angle-right mr-2"></i> Contact us</a>
            <a href="#"><i className="fas fa-angle-right mr-2"></i> Terms & Conditions</a>
          </div>
          <div className="flex flex-col mb-5 w-full md:w-1/2 lg:w-1/4 ml-15">
            <h4 className="text-2xl font-bold mb-4">Contact Info</h4>
            <a href="#" className="flex items-center mb-2">
              <i className="fa fa-map-marker-alt mr-2"></i> Colombo, Sri Lanka
            </a>
            <a href="mailto:info@example.com" className="flex items-center mb-2">
              <i className="fas fa-envelope mr-2"></i> info@example.com
            </a>
            <a href="tel:+01234567890" className="flex items-center mb-2">
              <i className="fas fa-phone mr-2"></i> +94 123456789
            </a>
            <a href="tel:+01234567890" className="flex items-center mb-3">
              <i className="fas fa-print mr-2"></i> +94 123456789
            </a>
            <div className="flex space-x-3">
              <a className="btn btn-secondary rounded-full" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-secondary rounded-full" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-secondary rounded-full" href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-secondary rounded-full" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center container mx-auto">
          <div className="flex justify-center md:justify-start mb-4 md:mb-0">
            <span className="text-body">
              <a href="#" className="border-b text-white">
                <i className="fas fa-copyright text-light me-2"></i>KarConnect.com
              </a>, All rights reserved.
            </span>
          </div>
          <div className="flex justify-center md:justify-end text-body">
            Designed By <a className="border-b text-white" href="">Nitro Runners</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
