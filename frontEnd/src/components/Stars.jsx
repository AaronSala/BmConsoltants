import "./styles/slider.css";

export const generateStars = (count) => {
  const stars = [];

  for (let i = 0; i < count; i++) {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const size = Math.random() * 6 + 4;

    stars.push(
      <div
        key={i}
        className="star"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${Math.random() * 2 + 1}s`,
        }}
      ></div>
    );
  }

  return stars;
};
