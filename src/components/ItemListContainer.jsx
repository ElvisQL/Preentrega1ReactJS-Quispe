import Container from 'react-bootstrap/Container'

export default function ItemListContainer(props) {
    return <Container className='mainContainer'><h1>{props.greeting}</h1></Container>

}