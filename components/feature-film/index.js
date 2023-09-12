import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'

const FeatureFilm = ({ data }) => {
    return (
        <div className={styles.feature_film}>
            <div className={styles.text}>
                <h1>
                    {data?.title}
                </h1>
                <p>
                    {data?.overview}
                </p>
                <div className={styles.actions}>
                    <button className={styles.btn}>Play</button>
                </div>
            </div>
            <div className={styles.moviePoster}>
                <div className={styles.moviePosterOverlay}></div>
                <Image
                    unoptimized
                    src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                    fill
                    alt='title'
                />
            </div>
        </div>
    )
}

export default FeatureFilm