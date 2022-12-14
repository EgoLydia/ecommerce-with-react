import SERVER, { TOKEN } from '../index'
import { useEffect, useState } from 'react'


const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await SERVER.get(url, {
                    headers: {
                        Authorization: "bearer" + TOKEN,
                    }
                })
                setData(res.data.data)
            }
            catch (err) {
                setError(true)
            }
            setLoading(false)
        }
        fetchData()
    }, [url]);

    return { data, loading, error };
}

export default useFetch;

