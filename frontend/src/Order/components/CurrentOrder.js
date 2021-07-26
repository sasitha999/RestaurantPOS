import React from 'react';
import {FaTrash, FaMinus , FaPlus} from 'react-icons/fa';


const CurrentOrder = props => {

  return (
    <table className="list-table">
      <tbody>
        {props.orderItems &&  props.orderItems.map((item) => (
            <tr key={item.id}>
                <td><img className="list-image" src={item.cover} /></td>
                <td>{item.title}</td>
                <td>
                    {item.quantity > 1 ? <div onClick={() => props.removeItem(item.id)}><FaMinus /></div>
                    : <div onClick={() => props.deleteItem(item.id)}><FaTrash /></div> }
                </td>
                <td>{item.quantity}</td>
                <td><div onClick={() => props.addItem(item.id)}><FaPlus /></div></td>
                <td style={{textAlign: "right"}}>${item.totalAmount.toFixed(2)}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CurrentOrder;
