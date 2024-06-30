import React, { useState } from "react";
import AboutHeader from "./AboutHeader";
const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <AboutHeader />
      <div className="container mx-auto px-4 py-8">
        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
                activeIndex === 1 ? "bg-gray-100 bg-gray-800" : ""
              }`}
              onClick={() => handleAccordionClick(1)}
              aria-expanded={activeIndex === 1}
              aria-controls="accordion-collapse-body-1"
            >
              <span>About Hotel Galvanic</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${activeIndex === 1 ? "rotate-180" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className={`${activeIndex === 1 ? "block" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Hotel Galvanic is a premier destination offering unparalleled
                luxury and comfort. Located in the heart of the city, it
                combines modern amenities with classic elegance, providing
                guests with a unique and unforgettable experience.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Our hotel features state-of-the-art facilities, exquisite dining
                options, and a dedicated staff committed to making your stay as
                enjoyable and relaxing as possible.
              </p>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
                activeIndex === 2 ? "bg-gray-100 dark:bg-gray-800" : ""
              }`}
              onClick={() => handleAccordionClick(2)}
              aria-expanded={activeIndex === 2}
              aria-controls="accordion-collapse-body-2"
            >
              <span>Our Rooms</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${activeIndex === 2 ? "rotate-180" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className={`${activeIndex === 2 ? "block" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                At Hotel Galvanic, we offer a variety of room types to suit
                every need and preference. From deluxe rooms to luxurious
                suites, each space is designed with comfort and style in mind.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                All our rooms are equipped with modern amenities, including
                high-speed internet, flat-screen TVs, and plush bedding to
                ensure a restful stay.
              </p>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
                activeIndex === 3 ? "bg-gray-100 dark:bg-gray-800" : ""
              }`}
              onClick={() => handleAccordionClick(3)}
              aria-expanded={activeIndex === 3}
              aria-controls="accordion-collapse-body-3"
            >
              <span>Dining Experience</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${activeIndex === 3 ? "rotate-180" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            className={`${activeIndex === 3 ? "block" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-3"
          >
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Our on-site restaurant offers a diverse menu featuring both
                local and international cuisine. Our chefs use only the freshest
                ingredients to create dishes that are both delicious and
                visually appealing.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Whether you are in the mood for a hearty breakfast, a light
                lunch, or a gourmet dinner, our dining options are sure to
                satisfy your culinary cravings.
              </p>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-4">
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
                activeIndex === 4 ? "bg-gray-100 dark:bg-gray-800" : ""
              }`}
              onClick={() => handleAccordionClick(4)}
              aria-expanded={activeIndex === 4}
              aria-controls="accordion-collapse-body-4"
            >
              <span>Services and Amenities</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${activeIndex === 4 ? "rotate-180" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-4"
            className={`${activeIndex === 4 ? "block" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-4"
          >
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Hotel Galvanic offers a range of services and amenities to
                ensure that your stay is both comfortable and convenient. Our
                facilities include a fitness center, spa, swimming pool, and
                business center.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                We also provide 24-hour room service, concierge assistance, and
                complimentary Wi-Fi throughout the hotel. Our dedicated staff is
                always on hand to assist with any requests or special needs.
              </p>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-5">
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
                activeIndex === 5 ? "bg-gray-100 dark:bg-gray-800" : ""
              }`}
              onClick={() => handleAccordionClick(5)}
              aria-expanded={activeIndex === 5}
              aria-controls="accordion-collapse-body-5"
            >
              <span>Location and Accessibility</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${activeIndex === 5 ? "rotate-180" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-5"
            className={`${activeIndex === 5 ? "block" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-5"
          >
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Conveniently located in the heart of the city, Hotel Galvanic is
                easily accessible by both public and private transportation. We
                are close to major attractions, shopping centers, and business
                districts.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                We offer complimentary shuttle services to and from the airport,
                as well as ample parking facilities for guests who drive. Our
                prime location makes it easy for you to explore the vibrant
                surroundings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
