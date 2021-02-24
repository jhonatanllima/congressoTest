import React, { useState } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';


import { Container, ContentLeft, ContentRight } from './styles';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default function PressRoom() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template-hotsite', e.target, 'user_I1pJcwxyNs7nrn15DbhTg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      openModal();
  }

  return (
    <Container>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={customStyles}
         >
           <div>
            <h1>Envio realizado com sucesso!</h1>
            <p>Aguarde o contato da organização!</p>
          </div>
        </Modal>

      <ContentLeft>
        <h1>Cadastre-se, Jornalista!</h1>
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Nome</label>
          <input type="text" name="name" required />

          <div>
            <label className="function">Cargo / Funcão</label>
            <input type="text" name="function"  required/>
            <label>Veículo</label>
            <input type="text" name="vehicle"  required/>
          </div>

          <div>
            <label>Email</label>
            <input type="email" name="email"  required/>
            <label>Telefone / whatsApp</label>
            <input type="tel" name="whatsApp"  required/>
          </div>

          <div>
            <label className="Labelcity">Cidade</label>
            <input type="text" name="city" className="city" required/>
            <label className="labelUf">UF</label>
            <input type="text" name="uf"  className="uf" required/>
          </div>

          <label>Assunto de interesse</label>
          <textarea  name="subject" />
          <label>COmentário ou Dúvida</label>
          <textarea  name="comment" />
          <input type="submit" value="Enviar" className="button" />
        </form>
      </ContentLeft>

      <ContentRight>
        <h1>Sala de imprensa</h1>

        <h3>Equipe Oficial de Comunicação</h3>

        <p>
          A Sala de Imprensa é um canal de comunicação entre a ABQM e os
          jornalistas. Aqui é possível acompanhar nossas divulgações, encontrar
          os contatos da Assessoria de Imprensa, gendar entrevistas e ter acesso
          a recursos multimídia.
        </p>
      </ContentRight>
    </Container>
  );
}
