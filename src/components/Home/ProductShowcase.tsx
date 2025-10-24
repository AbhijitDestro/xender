import React from "react";
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section className="showcase bg-linear-to-b from-[#FFFFFF] to-[#D2DCFF] py-10 md:py-16 lg:py-20 overflow-x-clip">
      <div className="flex justify-center flex-col items-center px-10 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32">
        <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight text-black">
          Boost your creativity
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold tracking-tighter bg-linear-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center w-96 mb-3 sm:w-[500px] lg:w-[900px]">
          Shape your ideas into websites that work your way
        </h2>
        <p className="text-center font-medium w-[450px] mb-3 sm:w-[650px] lg:w-[850px]">
          Xender does the heavy lifting for you, so you can focus on your vision
          instead of fighting errors. Watch it transform into a working
          app—complete with all the necessary components, pages, flows and
          features.
          <br />
          <span className="font-bold text-[#001E80]">
            So, what are we building?
          </span>
        </p>
        <div className="flex justify-center mt-6 relative">
          <Image
            src="/HomeSection/assets/new-product-image.png"
            alt="ProductShowcase"
            width={1300}
            height={900}
            className="rounded-lg shadow-lg max-w-full h-auto"
            />
          <Image
            src="/HomeSection/assets/pyramid.png"
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src="/HomeSection/assets/tube.png"
            alt="Tube Image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
