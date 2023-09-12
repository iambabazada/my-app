import Link from 'next/link'
import React from 'react'

const Category = ({ category }) => {
    return (
        <div className='bg-red-400 text-center max-w-screen-lg mx-auto rounded py-4 flex justify-center gap-8'>
            {category?.map((item, index) => (
                <Link href={`/category/${item?.id}`} key={index} className='text-white text-3xl'>
                    {item?.name}
                </Link>
            ))}

        </div>
    )
}

export default Category