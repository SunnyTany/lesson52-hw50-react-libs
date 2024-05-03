import { useEffect, useState } from "react"
import { UserInterface } from "../../interface/User.interface"
import { fetchUser } from "../../utils/api"

const InputFetch = () => {
  const [value, setValue] = useState("")
  const [id, setId] = useState(1)
  const [user, setUser] = useState<UserInterface | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchUserHandleError = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const data = await fetchUser(id)
        setUser(data)
        setIsLoading(false)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUserHandleError()
  }, [value])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    setValue(target.value)
    setId(target.value)
  }

  return (
    <>
      <input type="number" value={value} min="1" max="10" value={value} onChange={onChangeHandler}/>
      {isLoading && <p>Loading ...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!isLoading &&!error && user && <p>{`${id}. ${user.name}`}</p>}
    </>
    
  )
}

export default InputFetch