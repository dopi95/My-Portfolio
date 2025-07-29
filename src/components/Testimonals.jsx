import React, { useEffect, useState } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Liya Mekonnen",
    position: "Marketing Manager",
    image: "https://i.pravatar.cc/100?img=1",
    text: "This team exceeded my expectations. I’m beyond impressed with the final product!",
    rating: 5
  },
  {
    id: 2,
    name: "Samuel Getachew",
    position: "Tech Lead",
    image: "https://i.pravatar.cc/100?img=2",
    text: "Very professional and always responsive. Highly recommended!",
    rating: 4
  },
  {
    id: 3,
    name: "Mulugeta Abebe",
    position: "Real Estate Consultant",
    image: "https://i.pravatar.cc/100?img=3",
    text: "I love how clean and responsive the design is. Great job!",
    rating: 5
  }
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [index]);

  const goToSlide = (i) => setIndex(i);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const { image, name, text, rating, position } = testimonials[index];

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">Client <span className="blue-txt">Testimonals</span></h2>

      <div className="testimonial-wrapper">
        <button className="arrow left-arrow" onClick={prevSlide}>
          <FaArrowLeft />
        </button>

        <div className="testimonial-card">
          <img src={image} alt={name} className="testimonial-img" />

          <div className="testimonial-stars flex flex-row justify-center items-center">
  {Array(rating).fill().map((_, i) => (
    <FaStar key={i} className="text-yellow-400" />
  ))}
</div>


          <p className="testimonial-text">“{text}”</p>

          <p className="testimonial-name">- {name}</p>
          <p className="testimonial-position">{position}</p>
        </div>

        <button className="arrow right-arrow" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
