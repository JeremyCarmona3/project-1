import styles from '../styles/Home.module.css'

import Button from '../comps/buttons/button';
import Card from '../comps/cards/card';
import ExpCard from '../comps/cards/expiringCard';
import HeaderCard from '../comps/cards/headerCard';
import InputCard from '../comps/cards/inputCard';
import DeleteButton from '../comps/buttons/deleteButton';
import CloseButton from '../comps/buttons/closeButton';
import PlusButton from '../comps/buttons/plusButton';

import { useRouter } from 'next/router'

import React, {useState} from 'react';

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

  const [value, setValue] = useState(null)
  const inputValue = (e) => {
    setName(e.target.value);
  };
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
          <PlusButton />
        </div>
        {/* <Button />
        <DeleteButton />
        <CloseButton />
        <PlusButton />
        <Card />
        <ExpCard />
        <HeaderCard />
        <InputCard /> */}
      </div>
    </div>
  )
}
