import HomeContainer from 'container/home'
import Image from 'next/image'
import Link from 'next/link'

export const getTopRateMovie = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&page=1`)
  const data = await res.json()
  console.log(data);
  return data
}

export const getPopularMovie = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=1`)
  const data = await res.json()
  console.log(data);
  return data
}

export const getategories = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`)
  const data = await res.json()
  console.log(data);
  return data
}
export const getCategorieSingle = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${id}`)
  const data = await res.json()
  console.log(data);
  return data
}

export default async function Home({ params }) {
  const topRatedPromise = getTopRateMovie()
  const popularPromise = getPopularMovie()
  const categoriesPromise = getategories()

  const [{ results: ratedPromise }, { results: popullarPromise }, { genres: getCategory }] = await Promise.all([
    topRatedPromise,
    popularPromise,
    categoriesPromise
  ])

  // let selectedCategory

  // if (params?.category.length > 0) {
  //   selectedCategory = getCategory(params?.category[0])
  // }



  return (
    <div className='text-white h-full'>
      <HomeContainer
        topRated={ratedPromise}
        popular={popullarPromise}
        category={getCategory}
      />
    </div>
  )
}
