import styles from '../styles/Home.module.css'

import Button from '../comps/buttons/button';
import Card from '../comps/cards/card';
import ExpCard from '../comps/cards/expiringCard';
import HeaderCard from '../comps/cards/headerCard';
import InputCard from '../comps/cards/inputCard';
import DeleteButton from '../comps/buttons/deleteButton';
import CloseButton from '../comps/buttons/closeButton';
import PlusButton from '../comps/buttons/plusButton';

import React, { useState } from 'react';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  if (process.browser) {
    var itemElement = document.getElementById('Item Title');
    var dateElement = document.getElementById('Expiry Date');
    if (itemElement != null && dateElement != null) {
      var newFood = itemElement.value;
      var newExpDate = dateElement.value;
  
      console.log(newFood);
      console.log(newExpDate);

      // window.localStorage.setItem('name', newFood);
      // window.localStorage.setItem('date', newExpDate);

      // var addFood = {
      //   name: newFood,
      //   date: newExpDate
      // };
      // foods[0] = prompt("New member name?");
      // localStorage.setItem("Foods", JSON.stringify(addFood));

      // foods.push(storedFood);
    }
    else {
      itemElement = null;
      dateElement = null;
    }
    // var storedFood = JSON.parse(localStorage.getItem("Foods"));

    // console.log(storedFood);

    // const foods = [];

    // foods.push(storedFood);

    // const [modalVisible, setModalVisible] = useState(false);

    function ShowCard() {
      setModalVisible(true);
    }

    function CloseCard() {
      setModalVisible(false);
    }

    function Confirm() {
      setModalVisible(false);
      console.log('Confirmed');
      // foodData();
    }

    if (modalVisible === false) {
      return (
        <div className={styles.container}>
          <div className={styles.appCont}>
            <div className={styles.flex}>
            <HeaderCard />
            {foods.map(f =>(
                <InputCard foodItem={f.name} />
            ))}
            
          </div>
          <div className={styles.flex}>
            <HeaderCard text='Expiration Dates'/>
            {foods.map(f =>(
              <ExpCard headerText={f.name} expiryDate={f.date} />
            ))}
              <PlusButton onClick={ShowCard}/>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className={styles.container}>
          <div className={styles.appCont}>
            <Card 
              onClickClose={CloseCard} 
              // onClickDelete={} 
              onClickConfirm={Confirm}
            />
          </div>
        </div>
      )
    }
  }
  else {
    return null;
  }
}