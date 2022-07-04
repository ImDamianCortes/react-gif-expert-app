import { useEffect, useState } from "react"
import { getStickers} from "../helpers/getStickers"

export const useFetchStickers = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        async function fetchData() {
            const imgs = await getStickers(category)
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
