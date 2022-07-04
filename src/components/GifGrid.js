import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data, loading} = useFetchGifs(category);

    return (
        <div>
            <h3 className='text-center mt-5'> {category} </h3>

            { loading && <p>loading...</p>}

            <div className='row'>
                {
                    data.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </div>
    )
}
