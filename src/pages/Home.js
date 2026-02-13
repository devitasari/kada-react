import Nav from '../components/Nav'
import { useContext, useEffect, useState } from 'react'
// import { CounterContext } from '../context/counterContext'
import { useDispatch, useSelector } from 'react-redux'
import { increment, setStateName } from '../store/reducer/counter'
import { fetchUsers } from '../store/action/user'

const Home = () => {
    // const { state, dispatch } = useContext(CounterContext)
    const dispatch = useDispatch()

    const count = useSelector((state) => state.counter.count)
    const stateName = useSelector((state) => state.counter.name)
    const message = useSelector((state) => state.counter.message)
    const users = useSelector((state) => state.user.users)

    const [ name, setName ] = useState('')

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const handleOnClickToAddCounter = () => {
        // dispatch({ type: "INCREMENT" })
        dispatch(increment())
    }

    const handleOnClickToSetName = () => {
        // dispatch({ type: "SET-NAME", payload: name})
        dispatch(setStateName(name))
    }

    const handleOnChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <Nav></Nav>
            <div>
                <p style={{ textAlign: 'center' }}>Hey {stateName}, This is HOME page</p>
                <div className="form-box" style={{ display: 'flex', justifyContent: 'center' }}>
                    <input className="form-input" placeholder='type your name' value={name} onChange={handleOnChange}></input>
                    <button className="form-button" onClick={handleOnClickToSetName}>Submit</button>
                </div>
                {/* <p>Count: {count}</p>
                <button onClick={handleOnClickToAddCounter}>Add</button> */}
                <h1 style={{ textAlign: 'center' }}>User Data</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse'}}>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.adress}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Home