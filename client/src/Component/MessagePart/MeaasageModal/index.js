import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MeaasageModal(props) {
  const [statusBtn, setStatusBtn] = useState(true);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const { name, email, phone, description } = inputs;

  const handleChange = ({ target: { name, value } }) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
    if (name && email && phone && description) {
      setStatusBtn(false);
    }
  };

  const handleSubmit = () => {
    props.addNewUser(name, email, phone, description);
    setInputs({
      name: "",
      email: "",
      phone: "",
      description: "",
    });
    props.onHide();
    setStatusBtn(true);
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Sending message us
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Fill all the lines</h4>
          <Form>
            <Row>
              <Col>
                <Form.Control
                  placeholder="First name"
                  onChange={handleChange}
                  name="name"
                  value={name}
                />
              </Col>
            </Row>
            <Form.Group controlId="formGroupEmail">
              <Form.Label></Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                value={email}
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                name="phone"
                onChange={handleChange}
                value={phone}
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleChange}
                value={description}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {statusBtn ? (
            <Button variant="success" disabled>
              Send
            </Button>
          ) : (
            <Button variant="success" onClick={handleSubmit}>
              Send
            </Button>
          )}{" "}
          <Button onClick={props.onHide}>Cansel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
