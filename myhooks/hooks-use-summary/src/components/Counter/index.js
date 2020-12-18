import { useState, useEffect } from 'react'

const STATUS = {
  STOP: 'stop',
  START: 'start',
  TIMEOUT: 1000,
  MAXTIME: 9,
}

export default function Example() {
  const [time, setTime] = useState(STATUS.MAXTIME)
  const [status, setStatus] = useState(STATUS.STOP)

  useEffect(() => {
    let timerId = null

    const run = () => {
      if (time <= 1) {
        setTime(STATUS.MAXTIME)
        setStatus(STATUS.STOP)
        return
      }
      setTime(time => time - 1)
      timerId = setTimeout(run, STATUS.TIMEOUT)
    }

    if (status === STATUS.START) {
      timerId = setTimeout(run, STATUS.TIMEOUT)
    } else {
      timerId && clearTimeout(timerId)
    }

    return () => {
      timerId && clearTimeout(timerId)
    }
  }, [status, time])

  const handleClick = e => setStatus(e.target.value)

  return (
    <div>
      <p>倒计时：{time}</p>
      <button type="button" value={STATUS.START} onClick={handleClick}>
        开始
      </button>
      <button type="button" value={STATUS.STOP} onClick={handleClick}>
        暂停
      </button>
    </div>
  )
}
