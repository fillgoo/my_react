import React from 'react'

import about from "../assets/img/about.png";
import about2 from "../assets/img/about2.png";

const introText = {
    title:"port developer",
    desc:["talent is","found at the end of the","effort"]
} 

const Intro = () => {
  return (
      <section id='intro'>
        <div className="intro_inner">
            <h1 className='intro_title'>
                {introText.title}
            </h1>
            <div className="intro_lines" aria-hidden="true">
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
            </div>
            <div className="intro_text">
                <div className="text">
                    <div>{introText.desc[0]}</div>
                    <div>{introText.desc[1]}</div>
                    <div>{introText.desc[2]}</div>
                </div>
                <div className="img">
                    <img src={about} alt="이미지 넣기" />
                </div>
            </div>
            <div className="intro_lines bottom" aria-hidden="true">
            <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
            </div>
        </div>
      </section>
  )
}

export default Intro