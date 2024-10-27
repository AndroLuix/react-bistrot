import React from 'react'

const FormContact = () => {
    return (
        <div className="contact-form-container container">
            <form action="" className="contact-form container">
                <div className="form-group">
                    <label htmlFor="forNome">
                        Nome
                    </label>
                    <input type="text" name="name" id="name" className='input' placeholder='Il tuo nome' />
                    <hr />
                </div>

                <div className="form-group">
                    <label htmlFor="forCognome">
                        Nome
                    </label>
                    <input type="text" name="surname" id="surname" className='input' placeholder='Il tuo cognome' />
                    <hr />
                </div>

                <div className="form-group">
                    <label htmlFor="forEmail">
                        Email
                    </label>
                    <input type="email" name="email" id="email" className='input' placeholder='Il tuo indirizzo email' />
                    <hr />
                </div>

                <div className="form-group">
                    <label htmlFor="forTelefono">
                        Telefono
                    </label>
                    <input type="tel" name="tel" id="tel" className='input' placeholder='Il tuo numero telefonico' />
                    <hr />
                </div>

                <div className="form-group">
                    <label htmlFor="forNome">
                        La tua ricetta
                    </label>
                    <input type="text" name="ricetta" id="ricetta" className='input' placeholder='Insrisci ricetta' />
                    <hr />
                </div>
                <button className=" btn btn-primary">Invia</button>
            </form >
        </div>

    )
}

export default FormContact