import { useEffect, useState, CSSProperties } from 'react'
import User from './User'
import { UserInterface } from '../../interface/User.interface'
import { fetchUsers } from '../../utils/api'
import { BeatLoader } from 'react-spinners'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red'
}

const Users = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchUsersHandleError = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await fetchUsers()
        setUsers(data)
        setIsLoading(false)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUsersHandleError()
  }, [])

  return (
    <div className='container ml30'>
      <h1>Users list</h1>
      {isLoading && <BeatLoader
        color="orange"
        loading={isLoading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}
      />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      { !isLoading && !error && users.length > 0 && 
        <ul>
          {users.map((user: UserInterface) => {
            return <User key={user.id} user={user} />
          })}
        </ul>
      }
    </div>
  )
}

export default Users