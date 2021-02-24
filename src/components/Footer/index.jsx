import React from 'react';

import LogoAbqm from '../../themes/assets/LogoAbqm.svg';
import LogoIclouds from '../../themes/assets/LogoIclouds.svg';

import { Container, Iclouds } from './styles';

export default function Footer() {
  return (
    <Container>

      <img src={LogoAbqm} alt="LogoAbqm" />
      <h5>
        Associação Brasileira de Criadores de Cavalo Quarto de Milha | Todos os
        direitos reservados
      </h5>

      <Iclouds>
        <h5>
          Designed and <br /> Developed by
        </h5>

        <a
          href="https://www.iclouds.com.br/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={LogoIclouds} alt="LogoIclouds" />
        </a>
      </Iclouds>

    </Container>
  );
}
