import {useState} from 'react'
import {Col, Row, Toast} from 'react-bootstrap'

function SubmitToast() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <Row>
                <Col xs={6}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>Thanks for sharing your story!</Toast.Header>
                    </Toast>
                </Col>
            </Row>
        </div>
    )
}

export default SubmitToast