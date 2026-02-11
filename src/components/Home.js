import Nav from './Nav'
import { useContext, useState } from 'react'
import { CounterContext } from '../context/counterContext'

const Home = () => {
    const { state, dispatch } = useContext(CounterContext)
    const [ name, setName ] = useState('')

    const handleOnClickToAddCounter = () => {
        dispatch({ type: "INCREMENT" })
    }

    const handleOnClickToSetName = () => {
        dispatch({ type: "SET-NAME", payload: name})
    }

    const handleOnChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <Nav></Nav>
            <div>
            <p style={{ textAlign: 'center' }}>Hey {state.name}, This is HOME page</p>
                <div className="form-box" style={{ display: 'flex', justifyContent: 'center' }}>
                    <input className="form-input" placeholder='type your name' value={name} onChange={handleOnChange}></input>
                    <button className="form-button" onClick={handleOnClickToSetName}>Submit</button>
                </div>
                {/* <p>Count: {state.count}</p>
                <button onClick={handleOnClickToAddCounter}>Add</button> */}
            </div>
        </div>

    )
}

export default Home