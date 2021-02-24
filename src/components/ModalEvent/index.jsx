import React, { useState } from 'react';

import { Container, ModalContent, HeaderModal, Content, Footer } from './styles';

import logoDerby from '../../themes/assets/logoDerby.png';
import logoNacional from '../../themes/assets/logoNacional.png';
import logoFullWhite from '../../themes/assets/logoFullWhite.svg';
import logoPotroFuturo from '../../themes/assets/logoPotroFuturo.png';

export default function ModalEvent(){
  const [modalIsOpen, setModalIsOpen] = useState(true);

  // function openModal() {
  //   setModalIsOpen(true);
  // }

  function closeModal(){
    setModalIsOpen(false);
  }

  return(
    <Container>

        <ModalContent
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Provas Oficiais"
        >

          <HeaderModal>
            <span></span>

            <button onClick={closeModal}>
              <svg
                className="svgClose"
                height="50%"
                viewBox="0 0 311 311.09867"
                width="50%"
                xmlns="http://www.w3.org/2000/svg">
                <path d="m16.042969 311.097656c-4.09375 0-8.191407-1.554687-11.304688-4.691406-6.25-6.25-6.25-16.386719 0-22.636719l279.058594-279.058593c6.253906-6.253907 16.386719-6.253907 22.636719 0 6.25 6.25 6.25 16.382812 0 22.632812l-279.0625 279.0625c-3.136719 3.136719-7.230469 4.691406-11.328125 4.691406zm0 0"/><path d="m295.125 311.097656c-4.09375 0-8.191406-1.554687-11.304688-4.691406l-279.082031-279.082031c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.632813 0l279.0625 279.082031c6.25 6.25 6.25 16.386719 0 22.636719-3.136719 3.136719-7.230469 4.691406-11.308594 4.691406zm0 0"/>
              </svg>
            </button>

          </HeaderModal>

          <Content>
            <img src={logoFullWhite} alt=""  className="logoQuartodeMilha"/>
            <h1>Provas Oficiais 2020</h1>
            <div>
              <img src={logoNacional} alt="Logo Nacional"/>
              <img src={logoPotroFuturo} alt="Logo Potro do futuro"/>
              <img src={logoDerby} alt="Logo Derby"/>
            </div>

          </Content>

          <Footer>
            <a
             href="https://abqm.com.br/provasoficiais/"
             target="_blank"
             rel="noopener noreferrer"
             >
              ACESSE AQUI O HOTSITE
            </a>
          </Footer>
        </ModalContent>
    </Container>
  );
}
