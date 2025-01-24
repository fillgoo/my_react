import React from 'react'

const skillText=[
  {
    title:"꿈을 설계하고 디자인하다.",
    desc:"나는 공간을 만드는것을 좋아한다. 어렸을 때 부터 나만의 공간을 만드는 것을 좋아했고, 나만의 다락방을 좋아했다. 그 누구라도 내가 만든 공간 속에서 영감을 받거나, 마음이 움직였다면 좋겠다. 나만의 공간을 마음껏 디자인하고 만들어가는 것을 매우 좋아하기 때문에 코딩에 매우 많은 관심이 있으며, 하나하나 만들어가는 과정이 매우 행복하다.",
    desc2:"나는 공간을 만드는것을 좋아한다. 어렸을 때 부터 나만의 공간을 만드는 것을 좋아했고, 나만의 다락방을 좋아했다. 그 누구라도 내가 만든 공간 속에서 영감을 받거나, 마음이 움직였다면 좋겠다. 나만의 공간을 마음껏 디자인하고 만들어가는 것을 매우 좋아하기 때문에 코딩에 매우 많은 관심이 있으며, 하나하나 만들어가는 과정이 매우 행복하다."
  },
  {
    title:"열심히 할 수록 기회는 따른다.",
    desc:"운이 좋은 사람은 없다. 단지 운을 만들어가는 것이다. 운을 만든다는 것은 내가 좋아하는 일을 열심히 하다보면 일에 몰두하게 되고 결과가 나올 때의 성취감을 느낄 수 있다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다."
  },
  {
    title:"나에게 정직하다.",
    desc:"정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신에게 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나는 일을 해야 하며 정직해지며 삶을 더 즐길 수 있다.  "
  },
]

const Skill = () => {
  return (
    <section id='skill'>
      <div className="skill_inner">
        <h2 className='skill_title'>
          Challenge <em>나의 도전</em>
        </h2>
        <div className="skill_desc">
          {skillText.map((skill,key)=>(
            <div key={key}>
            <span>{key+1}.</span>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
            <p>{skill.desc}<br></br>{skill.desc2}</p>
          </div>
          ))}
          
        </div>
      </div>
    </section>
  )
}

export default Skill