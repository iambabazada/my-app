'use client'
import React from 'react'
import MovieDetail from '../../../container/movieDetail'

import { notFound } from 'next/navigation'

const getMovieDetail = async (movieId) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=3c272e186af3644b9d502208f3ebb06e`)
    return res.json()
}


const page = async ({ params }) => {
    const movie = await getMovieDetail(params.id)
    if (!movie) {
        return notFound()
    }
    return (
        <MovieDetail movie={movie} />

    )


}

export default page