import React from "react";
import FormLayout from "./FormLayout";

const Home = () => {
  const imageUrls = [
    "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg",
    "https://images.pexels.com/photos/4916534/pexels-photo-4916534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2291624/pexels-photo-2291624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  return (
    <div className="relative">
      {/* Main content */}
      <div className="container mx-auto px-4 py-8 w-full">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 font-barlow">
            Welcome to Hotel Galavanic
          </h1>
          <p className="mt-4 text-lg text-cyan-600">
            Experience luxury and comfort at the heart of the city.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {imageUrls.map((url, index) => (
            <div key={index}>
              <img
                className="w-full h-48 object-cover rounded-lg shadow-2xl"
                src={url}
                alt={`Hotel view ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </section>

        <section className="mt-12 text-center pb-0">
          <h2 className="text-3xl font-semibold text-cyan-600 font-barlow">
            About Galavanic
          </h2>
          <p className="mt-4 text-gray-600 pt-0 pb-5">
            Hotel Galavanic stands as a beacon of excellence in hospitality,
            celebrated for its impeccable service and luxurious accommodations.
            Nestled in a prime location, our hotel offers unparalleled
            convenience and accessibility, ensuring guests can effortlessly
            explore the vibrant heart of the city. With a sophisticated design
            that blends elegance and comfort, every corner of Hotel Galavanic
            exudes a sense of refinement and tranquility. From the meticulously
            appointed rooms to the expansive public spaces, every detail is
            crafted to exceed expectations. Our commitment to excellence extends
            beyond aesthetics, with premium amenities that cater to the needs of
            both leisure and business travelers alike. Whether you're seeking
            relaxation or productivity, Hotel Galavanic promises an
            unforgettable experience tailored to elevate your stay.
          </p>
        </section>
      </div>
      <FormLayout />
    </div>
  );
};

export default Home;
