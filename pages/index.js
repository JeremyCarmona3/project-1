import styles from '../styles/Home.module.css'

import Button from '../comps/buttons/button';
import Card from '../comps/cards/card';
import ExpCard from '../comps/cards/expiringCard';
import HeaderCard from '../comps/cards/headerCard';
import InputCard from '../comps/cards/inputCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <Button />
      <Card />
      <ExpCard />
      <HeaderCard />
      <InputCard />
    </div>
  )
}
