const HeroSection = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR
          FEET DESERVE THE BEST AND WE'RE HERE TO ENTERTAIN YOU
         </p>
      </div>

      <div className="hero-btn">
        <button>
            Shop Now
        </button>

        <button>
            Category
        </button>
    </div>

    <div className="shopping">
        <p>
            Also Available on
        </p>

        <div className="brand-icons">
            <img src="/images/flipkart.png" alt="flipkart logo" />
            <img src="/images/amazon.png" alt="Amazon logo" />

        </div>
    </div>

      <div className="hero-image">
        <img className="hero-image" src="/images/Hero-image.jpg" alt="hero-img" />
      </div>
    </main>
  );
};

export default HeroSection
