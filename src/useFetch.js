import { useState, useEffect } from "react"
const useFetch = (url) => {

  // states
  const [data, setData]= useState(null)
  const[isLoading, setIsLoading] = useState(true)
  const [err, setErr] = useState(null)

  // hooks
  useEffect(() => {
    const abortConst = new AbortController();
    fetch(url, {signal: abortConst.signal})
    .then( res => {
      if(!res.ok){
        throw Error("Something went wrong")
      }
      return res.json()
    })
    .then(data => {
      setData(data)
      setIsLoading(false)
      setErr(null)
    })
    .catch(err => {
      if (!err.name === "AbortError")
      {
        setIsLoading(false)
      setErr(err.message)  
      }
    })
    return () => abortConst.abort();
  },[url])
  return {data, isLoading, err}
}

export default useFetch