import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='flex flex-col items-center justify-center w-full'>
      <nav className='flex justify-between w-full pt-3 mb-10 item-center'>
        <img src={logo} alt="logo" className='object-contain w-28'/>

        <button
        type='button'
          onClick={() => window.open('https://github.com/NerminVej/AI_Summarizer')}
        className='black_btn'
        >Github</button>
      </nav>

      <h1 className="head_text">
        Summarize Article with 
        <br className='max-md:hidden' />
        <span className='green_gradient'> OpenAI GPT-4

        </span>
      </h1>

      <h2 className='desc'>
        Introducing QuickSum: Your reading made simple <br /> QuickSum is an article summarizer that converts lengthy articles into clear and concise summaries, enhancing your reading experience
      </h2>
    </header>
  )
}

export default Hero
