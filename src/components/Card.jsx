import React from "react";


const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card h-100">
          <img src={props.imgsrc} class="card-img-top" alt="cardimg" />
          <div className="card-body">
            <h6 className="card-title font-weight-bold">{props.title}</h6>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
