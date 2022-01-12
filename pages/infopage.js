import styles from '../styles/Home.module.css'

import Button from '../comps/buttons/button';
import Card from '../comps/cards/card';
import ExpCard from '../comps/cards/expiringCard';
import HeaderCard from '../comps/cards/headerCard';
import InputCard from '../comps/cards/inputCard';
import DeleteButton from '../comps/buttons/deleteButton';
import CloseButton from '../comps/buttons/closeButton';
import PlusButton from '../comps/buttons/plusButton';

export default function InfoPage() {
  return (
    <div className={styles.container}>
      <div className={styles.appCont}>
        <Card />
      </div>
    </div>
  )
}
