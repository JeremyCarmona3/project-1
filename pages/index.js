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
const foods = [
  { id:0,
    name: "Apple",
    date: "20/12/2022",
  },
  { id:1,
    name: "Orange",
    date: "10/1/2022",
  }
]
export default function Home() {
 


  const [modalVisible, setModalVisible] = useState(false);

  function ShowCard() {
    setModalVisible(true);
  }

  function CloseCard() {
    setModalVisible(false);
  }
  function capture(food){
    foods.push(food)
    setFoodArr(foods)
  } 
  const [foodArr, setFoodArr] = useState([]);


  // 1 state for food array
  // 2 push food to food array
  // update state to food array

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
          <HeaderCard />

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
          <Card onClickPush={capture} onClickClose={CloseCard}/>
         
        </div>
      </div>
    )
  }

}


