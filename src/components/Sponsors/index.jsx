import React from 'react';

import logoIntegralMix from '../../themes/assets/logoIntegralMix.png';


import { Container, Sponsor } from './styles';

export default function Footer() {
  return (
    <Container>
      <h1>PATROCINADORES</h1>
      <span />
      <p>
        A ABQM conta com o apoio de grandes empresas parceiras <br /> que
        impulsionam o cavalo Quarto de Milha ao topo dos rankings!
      </p>

      <Sponsor>
        <div>
          <a
            href="https://integralmix.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoIntegralMix} alt="" />
          </a>
        </div>
      </Sponsor>
    </Container>
  );
}
