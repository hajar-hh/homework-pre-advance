import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SideBar from './components/SideBar';
import Header from './components/Header';
import TaskCard from './components/card';
import tasks from './tasks';
import './App.css';

function App() {
  return (
    <div className="app-container d-flex">
      <SideBar />
      <div className="main-content-container flex-grow-1 d-flex flex-column">
        <Header />
        <Container className="mt-5">
          <Row>
            {tasks.map((task) => (
              <Col key={task.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <TaskCard
                  title={task.title}
                  description={task.description}
                  date={task.date}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;