import React, { useState, useCallback, useEffect} from 'react';
import axios from 'axios';
import { Notification } from 'react-pnotify';
import Item from './Order/components/Item';
import CurrentOrder from './Order/components/CurrentOrder';
import { FcEmptyTrash, FcPlus, FcMinus } from 'react-icons/fc';

const App = () => {

  const [config, setConfig ]= useState([]);
  const configArry = [...config];
    useEffect(async () => {
      const result = await axios(
        'http://localhost:5000/api/configs',
      );
      setConfig(result.data.data);
    },[]);

  const [categories, setCategories ]= useState([]);
  
    useEffect(async () => {
      const result = await axios(
        'http://localhost:5000/api/categories',
      );
      setCategories(result.data.data);
    },[]);
  const [selectedCategory, setSelectedCategory ]= useState('all');

  const [menuItems, setMenuItems ]= useState([]);
  const [filterdMenuItems, setFilterdMenuItems ]= useState([]);
    useEffect(async () => {
      const result = await axios(
        'http://localhost:5000/api/items',
      );
      setMenuItems(result.data.data);
      setFilterdMenuItems(result.data.data);
    },[]);

  const [orderItems, setOrderItems ]= useState([]);

    const changeCategory = (category) =>{
      setSelectedCategory(category)
      if (category == 'all') {
        setSelectedCategory(category);
        setFilterdMenuItems(menuItems);
      } else {
          let filteredMenuItems = (menuItems).filter(obj => obj.category._id === category);
          setFilterdMenuItems(filteredMenuItems);
      }
    }

    const addToOrder = (item) => {    
      if ((orderItems).find(x => x.id === item._id)) {
        const updatedMenuItems = orderItems.map(orderItem => {
          if(orderItem.id === item._id ){
            return Object.assign({}, orderItem, {
              quantity: orderItem.quantity+1,
              totalAmount: (orderItem.quantity+1)*orderItem.unitprice
            })
          }else{
            return orderItem;
          }
          
        })
        setOrderItems(updatedMenuItems);
      } else {
        const items = [
          ...orderItems,
          {'id': item._id,'title': item.title, 'quantity' : 1, 'unitprice':item.price,'totalAmount': item.price, 'cover': item.cover } 
        ];
        setOrderItems(items);
      }
      
    }
    const addItem = (id) =>  {

      const updatedMenuItems = orderItems.map(orderItem => {
        if(orderItem.id === id ){
          return Object.assign({}, orderItem, {
            quantity: orderItem.quantity+1,
            totalAmount: (orderItem.quantity+1)*orderItem.unitprice
          })
        }else{
          return orderItem;
        }
        
      })
      setOrderItems(updatedMenuItems);
    }

    const removeItem = (id) =>  {
      const updatedMenuItems = orderItems.map(orderItem => {
        if(orderItem.id === id ){
          return Object.assign({}, orderItem, {
            quantity: orderItem.quantity-1,
            totalAmount: (orderItem.quantity-1)*orderItem.unitprice
          })
        }else{
          return orderItem;
        }
      })
      setOrderItems(updatedMenuItems);
    }
    const deleteItem = (id) => {
      const updatedMenuItems = (orderItems).filter((item) => item.id !== id);
      setOrderItems(updatedMenuItems);
    }

    const [subTotal, setSubTotal ]= useState(0);

    const calculteSubTotal = orderItem => orderItem.reduce((sum, { totalAmount }) => sum + totalAmount , 0);
    useEffect(() => {
      
      setSubTotal(calculteSubTotal(orderItems))
    }, [orderItems]);

    const placeOrder = async () => {
        
      let items = (orderItems).map(orderItem => ({ id: orderItem.id, quantity: orderItem.quantity }));

        const order = {
          "subTotal" : (subTotal).toFixed(2),
          "tax" : (subTotal*0.05).toFixed(2),
          "total" : (subTotal + subTotal*0.05).toFixed(2),
          "discount" : 0,
          "items" : items,
        };

        await axios.post('http://localhost:5000/api/order', order).then(
          setOrderItems([])
        );        
    };
    const clearOrder = () => {
      setOrderItems([]);
      setSubTotal(0)
     
    }

  return (

      <div>
         <Notification
          type='error'
          title='Error example'
          text='Error message goes here'
          animateIn='bounceInLeft'
          animateOut='bounceOutRight'
          delay={2500}
          shadow={true}
          hide={true}
          nonblock={false}
          desktop={false}
        />
      <div className="main-div">
          <div className="menu-div">
              <div>
                  <div>
                      <h2>{"Name"}</h2>
                      <h6>Location Id#{'lkasfnkasdf'}</h6>
                  </div>
                  <div className="category-section">
                      <button className="category-btn" onClick={() => changeCategory('all')}>All Items</button>
                      {categories.map((category) => (
                          <button className="category-btn" onClick={() => changeCategory(category._id)}>{category.name}</button>
                      ))}
                  </div>
              </div>                        
              <div className="items-list-div">
                  {filterdMenuItems.map((item) => (
                      <div className="item-div-main">
                          <Item 
                                item ={item}
                                title={item.title}
                                price={item.price}
                                cover={item.cover}
                                weight={item.weight}
                                addToOrder = {addToOrder}
                                 />
                      </div>
                  ))}
              </div>
          </div>
          <div className="list-div">
              <div>
                  <span className="current-order-span">Current Order</span>
                  <button className="clear-btn" onClick={() => clearOrder()}>Clear All</button>
                    <CurrentOrder 
                      orderItems={orderItems}
                      removeItem={removeItem}
                      addItem={addItem}
                      deleteItem={deleteItem}
                      />
              </div>
                <div className="final-data-main-div">
                  <div className="final-data">
                      <div>Sub Total</div>
                      <div>${subTotal}</div>
                  </div>
                  <div className="final-data">
                      <div>Sales Tax</div>
                      <div>Tax</div>
                  </div>
                  <div className="final-data final-total-text">
                      <div>Total</div>
                      <div>Total</div>
                  </div>
              </div>
              <div className="pay-btn-div">
                  <button className="pay-btn" onClick={() => placeOrder()}>Pay</button>
              </div>
          </div>
      </div>
  </div>
  
  );
};

export default App;
