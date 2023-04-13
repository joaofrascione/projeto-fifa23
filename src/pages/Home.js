import Nacoes from '../components/Nacoes';
import Ligas from '../components/Ligas';
import { Row, Col } from 'react-bootstrap';
function Home(){
     return (
    <div>
     
     <Row>
        <Col>
            <Nacoes/>
        </Col>
        <Col>
            <Ligas/>
        </Col>
      </Row>
    </div>
    )
}
export default Home