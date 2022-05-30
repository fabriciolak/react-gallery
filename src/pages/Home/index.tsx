import { useEffect, useState } from 'react';
import styles from './Home.module.css'

import { AlbumContainer, AlbumItem } from '../../Components/AlbumItem'

const Home = () => {
  return (
    <>
      <div className={styles.center}>
        <header>
          <h1>React Gallery</h1>
        </header>
      </div>

      <AlbumContainer>
        <AlbumItem />
      </AlbumContainer>

    </>
  )
}

export default Home;