import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full">
      <nav className="flex justify-between w-full pt-3 mb-10 item-center">
        <img src={logo} alt="logo" className="object-contain w-28" />
      
      
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br />
        <span className="orange_gradient">OpenAI GTP-4</span>
      </h1>
    </header>
  );
};

export default Hero;
