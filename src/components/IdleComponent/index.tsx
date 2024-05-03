import { useEffect, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'

const timeout = 10_000
const promptBeforeIdle = 5_000

const IdleComponent = () => {
  const [remaining, setRemaining] = useState<number>(timeout)
  const [open, setOpen] = useState<boolean>(false)

  const onIdle = () => {
    setOpen(false)
  }

  const onActive = () => {
    setOpen(false)
  }

  const onPrompt = () => {
    setOpen(true)
  }

  const { getRemainingTime, activate } = useIdleTimer({
    onIdle,
    onActive,
    onPrompt,
    timeout,
    promptBeforeIdle,
    throttle: 500
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000))
    }, 500)

    return () => {
      clearInterval(interval)
    }
  })

  const handleStillHere = () => {
    activate()
  }

  return (
    <div className='container'>
        <div
          className="modal"
          style={{
            display: open ? 'flex' : 'none'
          }}
        >
          <h3>Are you still here?</h3>
          <p>Logging out in {remaining} seconds</p>
          <button onClick={handleStillHere}>Im still here</button>
        </div>
      </div>
  )
}

export default IdleComponent