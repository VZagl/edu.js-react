import React from 'react';
import { Container, Row, Col, Carousel, Form, Button } from 'react-bootstrap';

const BootstrapTest = () => {
	return (
		<Container className='mt-5 mb-5'>
			<Row>
				<Col>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>
						<Button variant="primary" type="submit">
        Submit
						</Button>
					</Form>
				</Col>
				<Col>
					<Carousel>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://st2.depositphotos.com/3545341/7451/i/450/depositphotos_74516317-stock-photo-ukrainian-girl-with-flag.jpg"
								alt="First slide"
							/>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://fikiwiki.com/uploads/posts/2022-02/1644984017_1-fikiwiki-com-p-kartinki-zhivotnikh-na-avu-1.jpg"
								alt="Second slide"
							/>

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbg7Apb1C8FQZiv3c6fwmemS4vb8q2bJonA&usqp=CAU"
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>
			{/* <Row>
				<Col>1 of 3</Col>
				<Col>2 of 3</Col>
				<Col>3 of 3</Col>
			</Row> */}
		</Container>
	);
};

export default BootstrapTest;
