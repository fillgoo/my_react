import React from 'react'

import {skillText} from '../contants'




const Skill = () => {
  return (
    <section id='skill'>
        <div className="skill_inner">
            <h2 className='skill_title'>
                Challeng <em>나의 도전</em>
            </h2>
            <div className="skill_desc">
                {skillText.map((skill,key)=>(
                    <div key={key}>
                        <span>{key+1}.</span>
                        <h3>{skill.title}</h3>
                        <p>{skill.desc}<br/>{skill.desc2}<br/>{skill.desc3}</p>
                    </div>
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default Skill