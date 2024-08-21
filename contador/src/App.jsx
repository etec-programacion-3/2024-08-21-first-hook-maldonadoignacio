import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Counter from './components/Counter';
import IncrementButton from './components/IncrementButton';

/**
 * Main App component that manages the state and renders the Counter
 * and IncrementButton components.
 */
function App() {
  // State to hold the current count value
  const [count, setCount] = useState(0);

  // Function to increment the count
  const handleIncrement = () => setCount(count + 1);

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Counter count={count} />
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col md="auto">
          <IncrementButton onIncrement={handleIncrement} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;