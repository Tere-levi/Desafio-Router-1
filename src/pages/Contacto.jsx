import React from 'react';

const Contacto = () => {
    return (
        <div className="container mt-5">
            <h1>Contáctanos</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" className="form-control" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" className="form-control" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea className="form-control" id="message" name="message" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-warning">Enviar</button>
            </form>
        </div>
    );
};

export default Contacto;
