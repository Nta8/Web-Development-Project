import { useState } from "react";

const slides = [
  {
    title: "BLACK CLOVER",
    date: "อธิบาย | ดาสะ",
    image: "https://i.pinimg.com/736x/ed/fd/99/edfd993fd0853ae4a99f9e7fce9865e6.jpg",
  },
  {
    title: "ONE PIECE",
    date: "October 15, 2022 | IMAX 3D",
    image: "https://i.pinimg.com/736x/c0/42/60/c042600aa6c0e6468cb88c7d073d8d6a.jpg",
  },
  {
    title: "MY HERO ACADEMIA",
    date: "November 10, 2022 | IMAX 3D",
    image: "https://i.pinimg.com/736x/15/a5/c5/15a5c547e265a3c7039d1a70eb36edc6.jpg",
  },
  {
    title: "DEMON SLAYER",
    date: "December 5, 2022 | IMAX 3D",
    image: "https://i.pinimg.com/736x/b3/67/47/b367477aaffc1f8039ed582faae46c9d.jpg",
  },
  {
    title: "NARUTO",
    date: "January 20, 2023 | IMAX 3D",
    image: "https://i.pinimg.com/736x/c3/45/ac/c345ac45db81a56b7a13a8ca3ff0f6f7.jpg",
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index: number) => {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    setCurrentIndex(index);
  };

  const handleBook = () => {
    alert("จองแฟนเช่าเรียบร้อย! ขอบคุณที่ใช้บริการ Cinema Club 😊");
  };

  return (
    <div className="slider">
      <div
        className="slide-image"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
      />
      <div className="slide-content">
        <h1>{slides[currentIndex].title}</h1>
        <p>{slides[currentIndex].date}</p>
        <button className="btn-book" onClick={handleBook}>
          Hire
        </button>
      </div>
      <div className="social-icons">
        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
      </div>
      <div className="slider-nav">
        <button className="arrow-btn" onClick={() => showSlide(currentIndex - 1)}>
          &#8592;
        </button>
        <div className="slide-numbers">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={idx === currentIndex ? "active" : ""}
              onClick={() => showSlide(idx)}
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
          ))}
        </div>
        <button className="arrow-btn" onClick={() => showSlide(currentIndex + 1)}>
          &#8594;
        </button>
      </div>
    </div>
  );
}