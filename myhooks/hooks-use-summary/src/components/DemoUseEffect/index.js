import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Example() {
  const [data, setData] = useState({ items: [] })
  const [target, setTarget] = useState('javascript')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [url, setUrl] = useState(
    'https://api.github.com/search/repositories?sort=stars&q=javascript'
  )

  useEffect(() => {
    let didCancel = false
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const res = await axios(url)
        if (!didCancel && res?.data) {
          setData(res.data)
        }
      } catch (e) {
        if (!didCancel) {
          setIsError(true)
        }
      }
      setIsLoading(false)
    }

    fetchData()

    return () => {
      didCancel = true
    }
  }, [url])

  const handleClick = () => {
    const url = `https://api.github.com/search/repositories?sort=stars&q=${target}`
    setUrl(url)
  }

  return (
    <>
      <input
        type="text"
        value={target}
        onChange={event => setTarget(event.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Search
      </button>
      {isError && <div>出错了...</div>}
      {isLoading ? (
        <div>加载中...</div>
      ) : data.items.length > 0 ? (
        <ul>
          {data.items.map(item => (
            <li key={item.id}>
              <a href={item.html_url}>{item.name}</a>
            </li>
          ))}
        </ul>
      ) : (
        <div>没有更多信息了...</div>
      )}
    </>
  )
}
