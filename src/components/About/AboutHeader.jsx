import React from "react";

const AboutHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 dark:bg-gray-800 p-5 rounded-lg mb-6">
      <div className="w-full md:w-1/2 text-gray-800 dark:text-gray-200 md:pr-6">
        <h2 className="text-7xl font-bold mb-4 p-2 font-barlow">
          Welcome to Hotel Galvanic
        </h2>
        <p className="p-4  text-cyan-600">
          Whether you are here for business or leisure, our dedicated staff is
          here to cater to your every need. Experience the best in hospitality
          with us.
        </p>
        <p className="mb-4 pl-4">
          Hotel Galvanic, nestled in the heart of New York City, embodies the
          essence of luxury and comfort, making it your ultimate destination for
          a memorable stay. Ideally located amidst the bustling streets of
          Manhattan, our hotel caters to discerning travelers seeking
          sophistication and convenience. Our commitment to excellence shines
          through in every aspect of your experience, from impeccable service to
          meticulously curated amenities. Whether you're here for leisure or
          business, Hotel Galvanic ensures a stay that surpasses expectations,
          promising a blend of tranquility and indulgence that feels like a home
          away from home.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-end p-4 shadow-xl">
        <img
          src="https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg"
          alt="Hotel Galvanic"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutHeader;
