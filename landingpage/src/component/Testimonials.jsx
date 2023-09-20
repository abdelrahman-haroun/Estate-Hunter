import React, { useState } from "react";

export default function Testimonials() {
  const testimonialsData = [
    {
      name: "Maria Smantha",
      text: "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.",
      imageSrc: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      color: "#698bcb",
    },
    {
      name: "Lisa Cudrow",
      text: "Neque cupiditate assumenda in maiores repudi mollitia architecto.",
      imageSrc: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      color: "#698bcb",
    },
    {
      name: "John Smith",
      text: "Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus.",
      imageSrc: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
      color: "#698bcb",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const testimonialsToShow = testimonialsData.slice(
    currentTestimonialIndex,
    currentTestimonialIndex + 3
  );

  return (
    <section
      id="Testimonials"
      className="mx-auto my-4 text-neutral-700 dark:text-neutral-300 w-[90%]"
    >
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 className="mb-6 text-3xl font-bold">Testimonials</h3>
      </div>

      <div className="grid gap-6 text-center md:grid-cols-3">
        {testimonialsToShow.map((testimonial, index) => (
          <div key={index}>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div
                className={`h-28 overflow-hidden rounded-t-lg bg-[${testimonial.color}]`}
              />
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src={testimonial.imageSrc} alt={testimonial.name} />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">
                  {testimonial.name}
                </h4>
                <hr />
                <p className="mt-4">{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center">
        <button
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full mr-2"
          onClick={handlePrevClick}
        >
          Previous
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div> */}
    </section>
  );
}
