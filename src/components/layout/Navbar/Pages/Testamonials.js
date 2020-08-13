import React from "react";
import Card from "react-bootstrap/Card";
import "./box.css"

const Testamonials = () => {

  const cardDetails = [
    {Image: "https://media-exp1.licdn.com/dms/image/C4D0BAQF81UYyi2QGrg/company-logo_200_200/0?e=2159024400&v=beta&t=YgRjUUnHrbhz83GEYnnDLLJdkLhup_LnhF8zs6V08UM", title: "Godwin", text: "Nathan is a committed student who is always willing to learn more. It has been a  pleasure working with Nathan. He  is a polite, cheerful and pleasant student.  He is co-operative and willing to learn. - Godwin P Dzvapatsva (Head of Curriculum and Learning)" },
    {Image: "https://media-exp1.licdn.com/dms/image/C4D0BAQF81UYyi2QGrg/company-logo_200_200/0?e=2159024400&v=beta&t=YgRjUUnHrbhz83GEYnnDLLJdkLhup_LnhF8zs6V08UM", title: "Tapelo", text: "Nathan Swartz is a Life Choices Academy students for 2020. One thing you should know about Nathan is that he has a always-learning mindset. He always try new things by himself before seeking help. He has great communication skills and always seeks to do the best." },
    {Image: "https://media-exp1.licdn.com/dms/image/C4D0BAQF81UYyi2QGrg/company-logo_200_200/0?e=2159024400&v=beta&t=YgRjUUnHrbhz83GEYnnDLLJdkLhup_LnhF8zs6V08UM", title: "Sergio", text: "nathan is  a  very eager developer who likes learning new things all the time, he works well with a team and individually. this makes nathan an assest to any company" }
  ]

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "16rem" , backgroundColor: "black", color: "white" }} key = {index} className="box"> 
      <Card.Body>
    <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.text}
        </Card.Text>
      </Card.Body>
    </Card>
    )
  }
  return (
    <body>
      <div className=" page">
<div className="background">
      <h3 className="heading">These are my testamonials</h3>
      </div>

          <div className="grid">
    {cardDetails.map(renderCard)}
  </div>
</div>

    </body>
  )
};

export default Testamonials;
