import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styles from './Albums.module.css'

import { api } from '../../api'
import { IAlbumProps } from '../../utils/type'

import BackButton from '../../Components/BackButton'

export const Album = () => {
  const { albumId } = useParams()

  return (
    <>
      Albums
    </>
  )
}

export const AlbumId = () => {
  const [ dataJson, setDataJson ] = useState<IAlbumProps[]>([])
  const { albumId } = useParams()


  const response = api.fetch('https://jsonplaceholder.typicode.com/albums/', albumId)

  useEffect(() => {
    response
      .then(data => { return data })
      .then(data => { setDataJson(data) })
      .catch(err => { console.log(err) })
  }, [])

  console.log(dataJson);


  return (
    <>
      <div className={styles.center}>
        <h1>React Gallery</h1>
      </div>
      <div className={styles.center}>
        {dataJson.map((item, index) => (
          <div key={index}>
            <h2>"{item.title}"</h2>
            <span><small><i>Id: {item.id}</i></small></span>
          </div>
        ))}
      </div>
      <div className={styles.center}>
        <BackButton />
      </div>
    </>
  )
}