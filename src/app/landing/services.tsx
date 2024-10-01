import { cn } from "@/utils";
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
} from "@tabler/icons-react"
import Image from "next/image";
import { Carousel, Card } from "@/components/image-slider/apple-card-carousel";
import '@fortawesome/fontawesome-free/css/all.min.css';

const DummyContent = () => {
    return (
      <>
        {[...new Array(1).fill(1)].map((_, index) => {
          return (
            <div className="categories-content rounded-bottom p-4">
                                <h4>Mercedes Benz R3</h4>
                                <div className="categories-review mb-4">
                                    <div className="me-3">4.5 Review</div>
                                    <div className="d-flex justify-content-center text-secondary">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star text-body"></i>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$99:00/Day</h4>
                                </div>
                                <div className="row gy-2 gx-0 text-start mb-4 ml-1">
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">4 Seat</span>
                                    </div>
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT/MT</span>
                                    </div>
                                    <div className="col-4">
                                        <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Petrol</span>
                                    </div>
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2015</span>
                                    </div>
                                    <div className="col-4 border-end border-white">
                                        <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                                    </div>
                                    <div className="col-4">
                                        <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">27K</span>
                                    </div>
                                </div>
                                <a href="#" className=" btn btn-primary rounded-full d-flex justify-content-center py-3 px-3 bg-blue-500 text-white">Add Your Vehicle</a>
                            </div>
          );
        })}
      </>
    );
  };
   
const data = [
    {
      category: "4.5 Review",
      title: "Mercedes Benz R3",
      src: "/images/product/car-1.png",
      content: <DummyContent />,
    },
    {
      category: "3.5 Review",
      title: "Toyota Corolla Cross",
      src: "/images/product/car-2.png",
      content: <DummyContent />,
    },
    {
      category: "3.8 Review",
      title: "Tesla Model S Plaid",
      src: "/images/product/car-3.png",
      content: <DummyContent />,
    },
   
    {
      category: "4.8 Review",
      title: "Hyundai Kona Electric",
      src: "/images/product/car-3.png",
      content: <DummyContent />,
    },
    {
        category: "3.5 Review",
        title: "Toyota Corolla Cross",
        src: "/images/product/car-2.png",
        content: <DummyContent />,
    },
    {
        category: "3.8 Review",
        title: "Tesla Model S Plaid",
        src: "/images/product/car-3.png",
        content: <DummyContent />,
    },
  ];
export function FeaturesSectionDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      ));
  const features = [
    {
      title: "Flexible Pricing Options",
      description: "Set your own rental prices and choose between daily, weekly, or monthly rates to maximize your earnings.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Instant Booking Notifications",
      description: "Receive real-time alerts when someone books your vehicle, ensuring you're always informed.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Detailed Vehicle Management",
      description: "Easily manage your vehicle listings, including uploading photos, descriptions, and specifications.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Secure Payment Processing",
      description: "Our platform ensures safe and secure payment processing, so you can rent out your car with peace of mind.",
      icon: <IconCloud />,
    },
    {
      title: "Customer Reviews and Ratings",
      description: "Build your reputation as a trusted car owner through customer feedback and ratings.",
      icon: <IconHeart />,
    },
    {
      title: "24/7 Customer Support",
      description: "Access dedicated support any time of the day to resolve issues or answer your questions.",
      icon: <IconHelp />,
    },
    
  ];
  
  return (
    <div>
        <div className="mx-auto pb-5 max-w-2xl text-center">
            <h1 className="display-5 text-capitalize mb-3 text-5xl text-black">
              KarConnect <span className="text-primary text-5xl text-blue">Services</span>
            </h1>
            <p className="mb-0 text-black">
            Rent your vehicle effortlessly with flexible pricing, secure payments, instant notifications, customer support, insurance options, and detailed analytics.
            </p>
            <p className="mb-0 text-black">
            Join our community of trusted car owners today!
            </p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
        <div className="mx-auto pb-5 max-w-2xl text-center">
            <h1 className="display-5 text-capitalize mb-3 text-5xl text-black">
              KarConnect  <span className="text-primary text-5xl text-blue">Vehicle Categories</span>
            </h1>
            <p className="mb-0 text-black">
            vehicles are categorized into distinct groups, including compact cars, SUVs, and luxury vehicles, allowing users to easily navigate and select their desired option. 
            </p>
            <p className="mb-0 text-black">
            Each category offers specific features and pricing, ensuring a tailored experience for every customer based on their preferences and needs.</p>
          </div>
      <Carousel items={cards} />
      {/* Process Step*/}
      <div className="relative py-5 flex flex-col items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center h-[75vh]" 
        style={{ 
          backgroundImage: "url('/images/cover/bg-1.jpg')", 
          opacity: 0.9 // Adjust the opacity for the image
        }} 
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-90 h-[75vh]" />

      <div className="relative z-10 text-center pb-5 mt-5" style={{ maxWidth: '800px' }}>
        <h1 className="display-5 text-capitalize mb-3 text-5xl text-white">
          Central<span className="text-primary"> Process</span>
        </h1>
        <p className="mb-0 text-white">
        Our vehicle rental application streamlines the process into three simple steps: Register Your Vehicle, Mark Available, and Rent Your Vahicle once the rental is Confirmed.        </p>
      </div>
      
      <div className="relative z-10 flex flex-wrap justify-center gap-4 mt-15">
        <div className="flex-1 max-w-xs bg-blue-900 bg-opacity-70 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
          <h4 className="text-lg text-white font-semibold">Register Your Vehicle</h4>
          <p className="mb-0 text-white">Start by creating an account and entering your vehicle details to list it for rental.</p>
          <div className="text-white text-lg font-bold">01.</div>
        </div>
        <div className="flex-1 max-w-xs bg-blue-900 bg-opacity-70 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
          <h4 className=" text-lg text-white font-semibold">Mark Available</h4>
          <p className="mb-0 text-white">Once your vehicle is registered, set it as available for rent to attract potential renters.</p>
          <div className="text-white text-lg font-bold">02.</div>
        </div>
        <div className="flex-1 max-w-xs bg-blue-900 bg-opacity-70 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
          <h4 className="text-lg text-white font-semibold">Rent Your Vehicle</h4>
          <p className="mb-0 text-white">After receiving a rental request and confirming the details, complete the rental process and enjoy the benefits of renting out your vehicle.</p>
          <div className="text-white text-lg font-bold">03.</div>
        </div>
      </div>
    </div>
    {/* Pricing plans */}
    <section className="bg-white dark:bg-gray-900 mt-30">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto pb-5 max-w-2xl text-center">
            <h1 className="display-5 text-capitalize mb-3 text-5xl text-black">
              KarConnect  <span className="text-primary text-5xl text-blue">Bussiness Plans</span>
            </h1>
            <p className="mb-0 text-black">
            The Starter Plan is ideal for individual car owners, providing essential support and updates. For larger fleets, the Company Plan offers extended features, while the Enterprise Plan supports unlimited teams with lifetime updates. </p>
          </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 text-black">
                    {/* Pricing Card */}
                    {[
                        {
                            title: "Starter",
                            description: "Best option for personal use & for your next project.",
                            price: 29,
                            features: [
                                "Individual configuration",
                                "No setup, or hidden fees",
                                "Rental size: 1 Vehicle",
                                "Premium support: 6 months",
                                "Free updates: 6 months"
                            ]
                        },
                        {
                            title: "Company",
                            description: "Relevant for multiple users, extended & premium support.",
                            price: 99,
                            features: [
                                "Individual configuration",
                                "No setup, or hidden fees",
                                "Rental size: 10 Vehicles",
                                "Premium support: 24 months",
                                "Free updates: 24 months"
                            ]
                        },
                        {
                            title: "Enterprise",
                            description: "Best for large scale uses and extended redistribution rights.",
                            price: 499,
                            features: [
                                "Individual configuration",
                                "No setup, or hidden fees",
                                "Rental size: Unlimited",
                                "Premium support: 36 months",
                                "Free updates: Lifetime"
                            ]
                        }
                    ].map((plan, index) => (
                        <div key={index} className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-3xl text-blue-800 font-semibold">{plan.title}</h3>
                            <p className="font-light text-black sm:text-lg ">{plan.description}</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">${plan.price}</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            {/* List */}
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center space-x-3">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">
                                Get started
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100 text-2xl ">
          {title}
        </span>
      </div>
      <p className=" text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
