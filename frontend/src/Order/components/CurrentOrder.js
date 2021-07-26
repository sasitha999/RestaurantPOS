import React from 'react';
import { Link } from 'react-router-dom';

import { FcEmptyTrash, FcPlus, FcMinus } from 'react-icons/fc';


const CurrentOrder = props => {

  return (
    <table className="list-table">
      {console.log(props.orderItems)}
      {props.orderItems &&  props.orderItems.map((item) => (
          <tr>
              <td><img className="list-image" src={"/images/"+item.image} /></td>
              <td>{item.title}</td>
              <td>
                  {item.quantity > 1 ? <div onClick={() => props.removeItem(item.id)}><FcMinus /></div>
                  : <div onClick={() => props.deleteItem(item.id)}><FcEmptyTrash /></div> }
              </td>
              <td>{item.quantity}</td>
              <td><div onClick={() => props.addItem(item.id)}><FcPlus /></div></td>
              <td style={{textAlign: "right"}}>${item.totalAmount.toFixed(2)}</td>
          </tr>
      ))}
  </table>
  );
};

export default CurrentOrder;
