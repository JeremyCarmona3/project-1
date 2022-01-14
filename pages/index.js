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
  const router = useRouter()
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

  const [modalVisible, setModalVisible] = useState(false);

  function ShowCard() {
    setModalVisible(true);
  }

  function CloseCard() {
    setModalVisible(false);
  }

  if (modalVisible === false) {
    return (
      <div className={styles.container}>
        <div className={styles.appCont}>
          <div className={styles.flex}>
          <HeaderCard />
          {foods.map(f =>(
              <InputCard foodItem={f.name} onClick={() => router.push('/infopage')} />
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
          <Card onClickClose={CloseCard}/>
        </div>
      </div>
    )
  }

}


