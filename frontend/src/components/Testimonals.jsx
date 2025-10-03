import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import mule from "../assets/img/mule.jpg";


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mulugeta D.",
      position: "RealEstate Sales Consultant",
      image: mule,
      text: "Elyas and his team delivered exceptional work for me. Their professional design and seamless functionality have significantly improved my client engagement and property showcase capabilities.",
      rating: 5
    },
  
    {
      id: 3,
      name: "Fasil Menbere",
      position: "MD, Senior Pediatrician and Child Health Expert",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "Elyas delivered an outstanding digital platform for our pediatric clinic. The system streamlined our operations and enhanced patient care delivery significantly.",
      rating: 5
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, currentIndex]);

  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-gray-800 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">Testimonials</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            What people say about my work
          </p>
        </div>

        <div 
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Testimonial Card */}
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg relative">
            <FaQuoteLeft className="text-gray-300 dark:text-gray-500 text-4xl absolute top-6 left-6" />
            <div className="flex flex-col items-center text-center">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-100 dark:border-gray-600"
              />
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i}
                    className={`text-lg ${
                      i < testimonials[currentIndex].rating 
                        ? "text-yellow-400" 
                        : "text-gray-300 dark:text-gray-500"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <h4 className="font-bold text-lg text-gray-800 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-500 dark:text-gray-400">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-600 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
          >
            <FaChevronLeft className="text-gray-700 dark:text-gray-200" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-600 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
          >
            <FaChevronRight className="text-gray-700 dark:text-gray-200" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-blue-500"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;