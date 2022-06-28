import React, { Component } from "react";

import './card.styles.css';

const Card = ({employee: {id, name, email}}) => (
  <div className="card-container">
    <img src={`https://robohash.org/${id}?set=set4&size=180x180`} alt={`employee ${ name }`} />
    <h2>{ name }</h2>
    <p>{ email }</p>
  </div>
)

export default Card;