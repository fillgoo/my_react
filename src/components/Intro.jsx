import React from 'react'
import about from '../assets/imges/imgs.png';
import about2 from '../assets/imges/imgs2.png';
import {introText} from "../contants";


const Intro = () => {
  return (
    <section id='intro'>
        <div className="intro_inner">
            <h1 className='intro_title'>
                {introText.title}
            </h1>
            <div className="intro_lines" aria-hidden='true'>
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
                    <img src={about} alt="내사진" />
                    {/* <img src={about2} alt="개" /> */}
                </div>
            </div>
            <div className="intro_lines bottom" aria-hidden='true'>
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