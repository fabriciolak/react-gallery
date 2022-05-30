import { Link } from 'react-router-dom'

import styles from './Album.module.css'

import { IChildrenProps, IAlbumProps } from '../../utils/type'

import { api } from '../../api'
import { useEffect, useState } from 'react'

export const AlbumContainer = ({ children }: IChildrenProps) => {
  return (
    <>
      <div className={styles.center}>
        <div className={styles.grid}>
          {children}
        </div>
      </div>
    </>
  )
}

const response = api.fetch('https://jsonplaceholder.typicode.com/albums')

export const AlbumItem = () => {
  const [ dataJson, setDataJson ] = useState<IAlbumProps[]>([])

  useEffect(() => {
    response.then(data => {
      return data
    }).then(data => {
      setDataJson(data)
    })
  }, [dataJson])

  return (
    <>
      {dataJson.map((item, index) => (
        <Link to={`/albums/`+String(item.id)} style={{textDecoration: 'none'}} key={index}>
          <div className={styles.gridItem}>
            <div className={styles.gridItem__header}>
              <img src="https://via.placeholder.com/317/fafafa" alt="Luffy" />
            </div>
            <div className={styles.gridItem__content}>
              <p className={styles.gridItem__content_p}>"{item.title}"</p>
            </div>
            <div className={styles.gridItem__user_info}>
              <span><small><i>id: {item.id}</i></small></span>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}
