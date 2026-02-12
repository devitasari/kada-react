import { useSelector } from 'react-redux'
import Nav from '../components/Nav'
// import { useContext } from 'react'
// import { CounterContext } from '../context/counterContext'

const About = () => {
    // const { state, dispatch } = useContext(CounterContext)
    const name = useSelector((state) => state.counter.name)
    
    return (
        <div>
            <Nav></Nav>
            <p style={{ textAlign: 'center' }}>Hey {name}, This is ABOUT page</p>
        </div>
    )
}

export default About