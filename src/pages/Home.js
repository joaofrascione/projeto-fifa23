import Nacoes from '../components/Nacoes';
import Ligas from '../components/Ligas';
// import Ligas from '../components/Ligas';
import { Row, Col } from 'react-bootstrap';
function Home(){
     return (
     <Row>
        <Col>
            <Nacoes/>
        </Col>
        <Col>
            <Ligas/>
        </Col>
    </Row>)
}
export default Home