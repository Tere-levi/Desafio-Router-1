import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="text-center mt-5">
            <h1>Bienvenido a Happy Cake SPA</h1>
            <p>
                Esta es una aplicación para hacer pedidos de pasteles deliciosos. ¡Haz tu pedido ahora mismo!
            </p>
            <img src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=350" alt="Pastel" className="img-fluid rounded" />
            
        </Container>
    );
};

export default Home;

