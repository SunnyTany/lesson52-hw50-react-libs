import { ChangeEvent, useState } from 'react'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'

type Focused = 'number' | 'name' | 'expiry' | 'cvc'

interface State {
  number: string
  expiry: string
  cvc: string
  name: string
  focus: Focused | undefined
}

const CreditCard = () => {
  const [state, setState] = useState<State>({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: undefined
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let formattedValue = value
    switch (name) {
      case 'number':
        formattedValue = value.replace(/\D/g, '').substring(0, 16)
        formattedValue = formattedValue.replace(/(.{4})/g, '$1 ').trim()
        break
      case 'expiry':
        formattedValue = value.replace(/\D/g, '').substring(0, 4)
        if (formattedValue.length >= 3) {
          formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}`
        }
        break
      case 'cvc':
        formattedValue = value.replace(/\D/g, '') // Видаляємо всі нецифрові символи
        formattedValue = formattedValue.substring(0, 4) // Обмежуємо довжину до 4 цифр
        break
    }
    setState((prev) => ({ ...prev, [name]: formattedValue }))
  }

  const handleInputFocus = (e: ChangeEvent<HTMLInputElement>) => {
    const focus: Focused = e.target.name as Focused
    setState((prev) => ({ ...prev, focus }))
  }

  return (
    <div className="form-container container">
      <div className="card-container">
        <Cards number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name} focused={state.focus} />
      </div>
      <form>
        <div className="form-group">
          <input
            type="text"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </div>
        <button type="submit" className='card-btn'>Submit</button>
      </form>
    </div>
  )
}

export default CreditCard