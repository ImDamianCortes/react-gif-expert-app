import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        async function fetchData() {
            const imgs = await getGifs(category)
            //console.log(imgs)
            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                })
            }, 500)
        }
        fetchData();
    }, [category]);

    return state;
}
