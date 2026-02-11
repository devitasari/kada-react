import Nav from './Nav'
import { useContext } from 'react'
import { CounterContext } from '../context/counterContext'

const About = () => {
    const { state, dispatch } = useContext(CounterContext)
    
    return (
        <div>
            <Nav></Nav>
            <p style={{ textAlign: 'center' }}>Hey {state.name}, This is ABOUT page</p>
        </div>
    )
}

export default About