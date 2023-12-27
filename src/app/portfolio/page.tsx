const Portfolio = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      {/* Hero Section */}
      <div className="text-center">
        {/* Background Image or Video */}
        {/* Customize the path based on your project structure */}
        <img
          src="/path/to/your/background-image.jpg"
          alt="Background"
          className="w-full h-auto mb-8 rounded-lg shadow-lg"
        />

        {/* Headline */}
        <h1 className="text-4xl font-bold mb-4">Coding, Gaming, Hooping</h1>

        {/* Subheading or Tagline */}
        <p className="text-lg mb-8">A Developer's Journey</p>

        {/* CTA Button */}
        <a href="/portfolio" className="btn">
          Explore My Work
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
