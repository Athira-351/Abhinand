import { useEffect, useState } from 'react'


export default function useFetchJSON(url) {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)


useEffect(() => {
let mounted = true
fetch(url)
.then(r => r.json())
.then(json => { if (mounted) { setData(json); setLoading(false) } })
.catch(e => { if (mounted) { setError(e); setLoading(false) } })
return () => { mounted = false }
}, [url])


return { data, loading, error }
}