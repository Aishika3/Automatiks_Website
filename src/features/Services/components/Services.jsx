import "../styles/Services.css"
import {Card} from "components"
import AppDevelopement  from "../assets/app.jpg"
import WebDevelopement  from "../assets/web.jpg"
import Data  from "../assets/data.jpg"
import Automation  from "../assets/automation.jpg"
import WhatsappLogo  from "../assets/wapp.jpeg"
import Graphic from "../assets/graphic.jpeg"

export const Services = () => {
  const SERVICES=[
    {logo:WhatsappLogo, title:"WhatsApp Automation",description:"We create tailor-made WhatsApp automated systems to help scale up your business and maintain you customers through WhatsApp hassle-free."},
    {logo:AppDevelopement,title:"App Development",description:"We create tailor-made, user-friendly mobile apps to help you engage with customers and streamline business processes."},
    {logo:WebDevelopement,title:"Web Development",description:"Our team builds visually stunning and responsive websites to enhance your online presence and drive growth."},
    {logo:Data,title:"Data Analysis",description:"We harness the power of data by providing actionable insights and custom analytics solutions to optimize your business decisions."},
    {logo:Automation,title:"Automation Tools",description:"We develop innovative automation tools to improve efficiency, reduce manual tasks, and increase productivity across your organization."},
    {logo: Graphic,title: "Graphic Designing",description:"Our talented designers craft visually appealing graphics, logos, and branding materials to enhance your business's visual identity and make a lasting impression."},
  ];
  return (
    <section className='services' id='services'>
      <h1 className='services_title'>Our Services</h1>
      <div className='services_row'>
          {
            SERVICES.map(service=><Card key={service.title} {...service} className='services_card'/>)
          }
      </div> 
    </section>
  )
}
