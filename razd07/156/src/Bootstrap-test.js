import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BootstrapTest = (props) => {
	return (
		<Container className='mt-5 mb-5'>
			<Row>
				<Col>
					{props.left}
				</Col>
				<Col>
					{props.right}
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
