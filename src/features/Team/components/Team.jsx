import "../styles/Team.css"
import { Card } from 'components';
import Ahel from "../assets/Ahel.jpeg"
import Anish from "../assets/Anish.jpeg"
import Kingshuk from "../assets/Kingshuk.jpg"
import Srijit from "../assets/Srijit.jpg"

export const Team = () => {
  const TEAM=[
    {url:"https://www.linkedin.com/in/anish-de-1b090a193/",logo:Anish,title:"Anish De",description:"SWE - Microsoft | SWE Intern - Media.Net, Microsoft | Candidate Master - CodeForces | ICPC 3X Regionalist"},
    {url:"https://www.linkedin.com/in/ahel-das-chatterjee-5145131a0/",logo:Ahel,title:"Ahel Das Chatterjee",description:"SWE - Navi | SWE Intern - Microsoft '22"},
    {url:"https://www.linkedin.com/in/kingshuk-barua-b1b5231a0/",logo:Kingshuk,title:"Kingshuk Barua",description:"GET - Ericsson R&D | SDE Intern - Business Tech Labs | Ex Technology Consulting Intern - PwC India '22 - Data and Analytics team"},
    {url:"https://www.linkedin.com/in/srijit7098/",logo:Srijit,title:"Srijit Mondal",description:"Full Stack Developer Intern - Insynk Studios | ACM ICPC Regionalist | Guardian - Leetcode (2186) | Global Rank 274 - Google Kickstart"},
  ];
  return (
    <section className='team' id='team'>
      <h1 className='team_title'>About Us</h1>
      <div className='team_row'>
          {
            TEAM.map((team,index)=><Card index={index} key={team.title} {...team} className='team_card' textClassName='team_card_detail' titleClassName="team_card_title" paraClassName="team_card_para"/>)
          }
      </div> 
    </section>
  )
}
