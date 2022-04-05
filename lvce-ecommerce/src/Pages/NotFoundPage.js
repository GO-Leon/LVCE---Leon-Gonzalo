import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
            <><h1>Ups.. algo salio mal</h1><button><Link to={'/'}>Ir al Home</Link></button></>
    )
}

export default NotFoundPage