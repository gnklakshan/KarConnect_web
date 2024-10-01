import React from 'react';
import { FaCar, FaClock, FaComments, FaDollarSign } from 'react-icons/fa';
import Image from 'next/image';

const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="feature-item flex items-start mb-4">
    <div className="feature-icon text-primary text-2xl">{icon}</div>
    <div className="ms-4">
      <h5 className="mb-3 font-semibold text-black">{title}</h5>
      <p className="mb-0 text-black">{description}</p>
    </div>
  </div>
);

const FeaturesSection: React.FC = () => {
  return (
    <div className="feature py-5">
      <div className="mx-auto pb-5 max-w-2xl text-center">
        <h1 className="display-5 text-capitalize mb-3 text-5xl text-black">
          KarConnect <span className="text-primary text-5xl text-blue">Features</span>
        </h1>
        <p className="mb-0 text-black">
          Join our car rental platform and unlock the potential of your idle vehicle! Transform your car into a revenue-generating asset and start earning passive income effortlessly.
        </p>
        <p className="mb-0 text-black">
          Don’t let your car sit idle—start earning today!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-25">
        <div className="md:col-span-1 mb-4 space-y-20">
          <div>
            <FeatureItem
              icon={<FaCar />}
              title="Easy Listing"
              description="Easily list your car for rental in just a few simple clicks—it's that straightforward!"
            />
          </div>
          <div>
            <FeatureItem
              icon={<FaComments />}
              title="Customer Reviews"
              description="Enhance your credibility by showcasing transparent ratings and genuine feedback from renters, creating a trustworthy environment for potential customers."
            />
          </div>
        </div>
        <div className="md:col-span-1 flex justify-center mb-4">
          
          <Image
            src="/images/product/car-1.png" 
            className="img-fluid w-full max-w-md"
            style={{ objectFit: 'cover' }} 
            alt="Features"
            width={450} 
            height={200}
          />
        </div>
        <div className="md:col-span-1 mb-4 space-y-20">
          <div>
            <FeatureItem
              icon={<FaClock />}
              title="Flexible Availability"
              description="Establish your rental schedule and effortlessly manage bookings."
            />
          </div>
          <div>
            <FeatureItem
              icon={<FaDollarSign />}
              title="Secure Payments"
              description="Experience seamless transactions with guaranteed payments, ensuring a hassle-free rental process for both car owners and renters alike."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
