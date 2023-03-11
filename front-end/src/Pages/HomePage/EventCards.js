import React from "react";
import "./CSS/CategoriesCard.css";
import Rating from "../CoursePage/Rating";

const EventCards = (props) => {
  const events = ["Hackathon", "Job", "Interview"];

  return (
    <div className="Course-Cards">
      <div className="my-card">
        <img src={props.img} alt="img" loading="lazy" />
        <p className="Course-Title">{props.title}</p>
        <p className="Course-Teacher">{props.teacher}</p>
      </div>
    </div>
  );
};

export default EventCards;