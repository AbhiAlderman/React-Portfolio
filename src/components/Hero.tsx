import heroImage from '../assets/hero-image.jpg';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Hero Image */}
          <div className="mb-8 w-full max-w-md md:max-w-2xl animate-fade-in transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-xl overflow-hidden">
            <img
              src={heroImage}
              alt="Abhi Alderman"
              className="w-full h-auto shadow-2xl border-2 border-border"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-delay-1">
            Abhi Alderman
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in-delay-2">
            Welcome to my portfolio. Take a look at my projects!
          </p>

          {/* CTA Button */}
          <a
            href="#projects"
            className="inline-block custom-button animate-fade-in-delay-3"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};
