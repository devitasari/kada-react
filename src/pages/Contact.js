import Nav from '../components/Nav'
import { useSearchParams } from 'react-router-dom'

const Contact = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const type = searchParams.get('search')

  return (
    <div>
      <Nav />

      <p style={{ textAlign: 'center' }}>
        This is CONTACT page
      </p>

      <h3 style={{ textAlign: 'center' }}>
        Type: {type || 'none'}
      </h3>
    </div>
  )
}

export default Contact
