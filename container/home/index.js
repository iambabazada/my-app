import Card from 'components/card'
import React from 'react'
import FeatureFilm from 'components/feature-film'
import Category from 'components/category'
import MovieSection from 'components/movieSection'

import mockApi from '../../mock/api.json'
import CategoryItems from '../../mock/genre.json'



const HomeContainer = ({ topRated, popular, category }) => {
    return (
        <div>
            <FeatureFilm data={topRated[7]} />
            <Category category={category.slice(1, 6)} />
            <MovieSection movies={topRated.slice(1, 8)} title="Top Rated Film" />
            <MovieSection movies={popular.slice(1, 8)} title="Popular Film" />

        </div>
    )
}

export default HomeContainer