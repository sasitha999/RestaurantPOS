import React from 'react';

const Item = props => {
  return (
    <div onClick={() => props.addToOrder(props.item)}> 
      <div>{props.title}</div>
      <div className="full-div">
          <div className="sub-div">
              <div className="amount-text">{props.weight}</div>
              <div className="price-text">{'$'+ props.price.toFixed(2)}</div>
          </div>
          <div>
              <img className="menu-image" src={props.cover} />
          </div>
      </div>
  </div>
  );
};

export default Item;
