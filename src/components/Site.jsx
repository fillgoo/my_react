import React from 'react'

const siteText=[
  {
    text:["Make","site compliant with","YFG"],
    title:"2차 포트폴리오",
    code:"/",
    view:"/",
    info:["site coding","production period : 2day","use stack : HTML/CSS3, 자바스크립트 제이쿼리"]
  },
  {
    text:["Make","site compliant with","css"],
    title:"팀 포트폴리오",
    code:"/",
    view:"/",
    info:["site coding","production period : 5day","use stack : HTML/CSS3, 자바스크립트 제이쿼리"]
  },
  {
    text:["Make","site compliant with","css"],
    title:"2차 포트폴리오",
    code:"/",
    view:"/",
    info:["site coding","production period : 10day","use stack : HTML/CSS3, 자바스크립트 제이쿼리"]
  },
  {
    text:["Make","site compliant with","css"],
    title:"리디자인",
    code:"/",
    view:"/",
    info:["site coding","production period : 15day","use stack : HTML/CSS3, 자바스크립트 제이쿼리"]
  },
]

const Site = () => {
  return (
    <section id="site">
      <div className="site_inner">
        <h2 className='site_title'>
          Site coding <em>나의 결과물</em>
        </h2>
        <div className="site_wrap">

          {siteText.map( (site,key) => (
            <article className={`site_item s${key+1}`} key={key}>
            <span className='num'>{key+1}</span>
            <div className="text">
              <div>{site.text[0]}</div>
              <div>{site.text[1]}</div>
              <div>{site.text[2]}</div>
            </div>
            <h3 className='title'>{site.title}</h3>
            <div className='btn'>
              <a href={site.code}>code</a>
              <a href={site.view}>view</a>
            </div>
            <div className='info'>
              <span>{site.info[0]}</span>
              <span>{site.info[1]}</span>
              <span>{site.info[2]}</span>
            </div>
          </article>
          ) )};       
         
        </div>
      </div>
    </section>
  )
}

export default Site