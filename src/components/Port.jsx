import React from 'react'
import { portText } from '../contants'

const Port = () => {
  return (
    <section id='port'>
      <div className="port_inner">
        <div className="port_title">
          protfolio <em>작업물</em>
        </div>
        <div className="port_wrap">

          {portText.map((port, key) => (

            <article className={`port_item p${key + 1}`} key={key}>
              <span className='num'>{port.num}</span>
              <a href={port.url} className='img' target='_blank' rel='noreferrer'>
                <img src={port.img} alt="포트폴리오_작품명1" />
              </a>
              <h3 className='title'>{port.title}</h3>
              <p className='desc'>
              {port.desc}
              </p>
              <a href="/" target='_blank' className='site' rel='noreferrer'>사이트보기</a>
            </article>

          ))};



        </div>
      </div>
    </section>
  )
}

export default Port