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
} from "@tabler/icons-react";
import Image from "next/image";
import { Carousel, Card } from "@/components/image-slider/apple-card-carousel";
import "@fortawesome/fontawesome-free/css/all.min.css";

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div key={index} className="categories-content rounded-bottom p-4">
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
              <h4 className="rounded-pill mb-0 bg-white px-4 py-2 text-primary">
                $99:00/Day
              </h4>
            </div>
            <div className="row gy-2 gx-0 mb-4 ml-1 text-start">
              <div className="col-4 border-end border-white">
                <i className="fa fa-users text-dark"></i>{" "}
                <span className="ms-1 text-body">4 Seat</span>
              </div>
              <div className="col-4 border-end border-white">
                <i className="fa fa-car text-dark"></i>{" "}
                <span className="ms-1 text-body">AT/MT</span>
              </div>
              <div className="col-4">
                <i className="fa fa-gas-pump text-dark"></i>{" "}
                <span className="ms-1 text-body">Petrol</span>
              </div>
              <div className="col-4 border-end border-white">
                <i className="fa fa-car text-dark"></i>{" "}
                <span className="ms-1 text-body">2015</span>
              </div>
              <div className="col-4 border-end border-white">
                <i className="fa fa-cogs text-dark"></i>{" "}
                <span className="ms-1 text-body">AUTO</span>
              </div>
              <div className="col-4">
                <i className="fa fa-road text-dark"></i>{" "}
                <span className="ms-1 text-body">27K</span>
              </div>
            </div>
            <a
              href="#"
              className=" btn btn-primary d-flex justify-content-center rounded-full bg-blue-500 px-3 py-3 text-white"
            >
              Add Your Vehicle
            </a>
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
    src: "./images/product/car-1.png",
    content: <DummyContent />,
  },
  {
    category: "3.5 Review",
    title: "Toyota Corolla Cross",
    src: "./images/product/car-2.png",
    content: <DummyContent />,
  },
  {
    category: "3.8 Review",
    title: "Tesla Model S Plaid",
    src: "./images/product/car-3.png",
    content: <DummyContent />,
  },

  {
    category: "4.8 Review",
    title: "Hyundai Kona Electric",
    src: "./images/product/car-3.png",
    content: <DummyContent />,
  },
  {
    category: "3.5 Review",
    title: "Toyota Corolla Cross",
    src: "./images/product/car-2.png",
    content: <DummyContent />,
  },
  {
    category: "3.8 Review",
    title: "Tesla Model S Plaid",
    src: "./images/product/car-3.png",
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
      description:
        "Set your own rental prices and choose between daily, weekly, or monthly rates to maximize your earnings.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Instant Booking Notifications",
      description:
        "Receive real-time alerts when someone books your vehicle, ensuring you're always informed.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Detailed Vehicle Management",
      description:
        "Easily manage your vehicle listings, including uploading photos, descriptions, and specifications.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Secure Payment Processing",
      description:
        "Our platform ensures safe and secure payment processing, so you can rent out your car with peace of mind.",
      icon: <IconCloud />,
    },
    {
      title: "Customer Reviews and Ratings",
      description:
        "Build your reputation as a trusted car owner through customer feedback and ratings.",
      icon: <IconHeart />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "Access dedicated support any time of the day to resolve issues or answer your questions.",
      icon: <IconHelp />,
    },
  ];

  return (
    <div>
      <div className="mx-auto max-w-2xl pb-5 text-center">
        <h1 className="display-5 text-capitalize mb-3 text-5xl text-black">
          KarConnect{" "}
          <span className="text-blue text-5xl text-primary">Services</span>
        </h1>
        <p className="mb-0 text-black">
          Rent your vehicle effortlessly with flexible pricing, secure payments,
          instant notifications, customer support, insurance options, and
          detailed analytics.
        </p>
        <p className="mb-0 text-black">
          Join our community of trusted car owners today!
        </p>
      </div>
      <div className="relative z-10 mx-auto grid  max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      <div className="mx-auto max-w-2xl pb-5 text-center">
        <h1 className="display-5 text-capitalize mb-3 text-5xl text-black">
          KarConnect{" "}
          <span className="text-blue text-5xl text-primary">
            Vehicle Categories
          </span>
        </h1>
        <p className="mb-0 text-black">
          vehicles are categorized into distinct groups, including compact cars,
          SUVs, and luxury vehicles, allowing users to easily navigate and
          select their desired option.
        </p>
        <p className="mb-0 text-black">
          Each category offers specific features and pricing, ensuring a
          tailored experience for every customer based on their preferences and
          needs.
        </p>
      </div>
      <Carousel items={cards} />
      {/* Process Step*/}
      <div className="relative flex flex-col items-center py-5">
        {/* Background Image */}
        <div className="absolute inset-0 h-[75vh]">
          <Image
            src="./images/cover/bg-1.jpg"
            layout="fill"
            objectFit="cover"
            alt="Background Image"
            style={{ opacity: 0.9 }}
          />
        </div>
        <div className="absolute inset-0 h-[75vh] bg-black opacity-90" />

        <div
          className="relative z-10 mt-5 pb-5 text-center"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3 text-5xl text-white">
            KarConnect<span className="text-primary"> Process</span>
          </h1>
          <p className="mb-0 text-white">
            Our vehicle rental application streamlines the process into three
            simple steps: Register Your Vehicle, Mark Available, and Rent Your
            Vahicle once the rental is Confirmed.{" "}
          </p>
        </div>

        <div className="relative z-10 mt-15 flex flex-wrap justify-center gap-4">
          <div className="max-w-xs flex-1 transform rounded-lg bg-blue-900 bg-opacity-70 p-4 shadow-lg transition-transform hover:scale-105">
            <h4 className="text-lg font-semibold text-white">
              Register Your Vehicle
            </h4>
            <p className="mb-0 text-white">
              Start by creating an account and entering your vehicle details to
              list it for rental.
            </p>
            <div className="text-lg font-bold text-white">01.</div>
          </div>
          <div className="max-w-xs flex-1 transform rounded-lg bg-blue-900 bg-opacity-70 p-4 shadow-lg transition-transform hover:scale-105">
            <h4 className=" text-lg font-semibold text-white">
              Mark Available
            </h4>
            <p className="mb-0 text-white">
              Once your vehicle is registered, set it as available for rent to
              attract potential renters.
            </p>
            <div className="text-lg font-bold text-white">02.</div>
          </div>
          <div className="max-w-xs flex-1 transform rounded-lg bg-blue-900 bg-opacity-70 p-4 shadow-lg transition-transform hover:scale-105">
            <h4 className="text-lg font-semibold text-white">
              Rent Your Vehicle
            </h4>
            <p className="mb-0 text-white">
              After receiving a rental request and confirming the details,
              complete the rental process and enjoy the benefits of renting out
              your vehicle.
            </p>
            <div className="text-lg font-bold text-white">03.</div>
          </div>
        </div>
      </div>
      {/* Pricing plans */}
      <section className="dark:bg-gray-900 mt-30 bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-2xl pb-5 text-center">
            <h1 className="display-5 text-capitalize mb-3 text-5xl text-black">
              KarConnect{" "}
              <span className="text-blue text-5xl text-primary">
                Bussiness Plans
              </span>
            </h1>
            <p className="mb-0 text-black">
              The Starter Plan is ideal for individual car owners, providing
              essential support and updates. For larger fleets, the Company Plan
              offers extended features, while the Enterprise Plan supports
              unlimited teams with lifetime updates.{" "}
            </p>
          </div>
          <div className="space-y-8 text-black sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
            {/* Pricing Card */}
            {[
              {
                title: "Starter",
                description:
                  "Best option for personal use & for your next project.",
                price: 5000,
                features: [
                  "Individual configuration",
                  "No setup, or hidden fees",
                  "Rental size: 1 Vehicle",
                  "Premium support: 6 months",
                  "Free updates: 6 months",
                ],
              },
              {
                title: "Company",
                description:
                  "Relevant for multiple users, extended & premium support.",
                price: 12500,
                features: [
                  "Individual configuration",
                  "No setup, or hidden fees",
                  "Rental size: 10 Vehicles",
                  "Premium support: 24 months",
                  "Free updates: 24 months",
                ],
              },
              {
                title: "Enterprise",
                description:
                  "Best for large scale uses and extended redistribution rights.",
                price: 22500,
                features: [
                  "Individual configuration",
                  "No setup, or hidden fees",
                  "Rental size: Unlimited",
                  "Premium support: 36 months",
                  "Free updates: Lifetime",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="text-gray-900 border-gray-100 dark:border-gray-600 dark:bg-gray-800 mx-auto flex max-w-lg flex-col rounded-lg border bg-white p-6 text-center shadow dark:text-white xl:p-8"
              >
                <h3 className="mb-4 text-3xl font-semibold text-blue-800">
                  {plan.title}
                </h3>
                <p className="font-light text-black sm:text-lg ">
                  {plan.description}
                </p>
                <div className="my-8 flex items-baseline justify-center">
                  <span className="mr-2 text-5xl font-extrabold">
                    Rs.{plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
                {/* List */}
                <ul role="list" className="mb-8 space-y-4 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 dark:text-white"
                >
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
        "group/feature relative flex  flex-col py-10 dark:border-neutral-800 lg:border-r",
        (index === 0 || index === 4) && "dark:border-neutral-800 lg:border-l",
        index < 4 && "dark:border-neutral-800 lg:border-b",
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}

      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />
        <span className="inline-block text-2xl text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100 ">
          {title}
        </span>
      </div>
      <p className=" relative z-10 max-w-xs px-10 text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  );
};
