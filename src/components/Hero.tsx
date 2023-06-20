import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full">
      <nav className="flex justify-between w-full pt-3 mb-10 item-center">
        <img src={logo} alt="logo" className="object-contain w-28" />
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GTP-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with QuickSum, an open-source article summarizer
        that transforms lengthy aricles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
