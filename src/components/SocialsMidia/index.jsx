import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Container } from './styles';

import Share from '../../themes/assets/shareIcon.png';
import Twitter from '../../themes/assets/twitterIcon.png';
import Facebook from '../../themes/assets/facebookIcon.png';
import WhatsApp from '../../themes/assets/whatsAppIcon.png';

export default function MenuItems() {

const currentUrl = window.location.href;

const handleCopyLink = () => toast.success("Link Copiado!");

  return (
    <Container>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
        target="_blank"
        rel="noopener noreferrer">

        <img src={Facebook} alt="" />

      </a>
      <a
        href={`https://api.whatsapp.com/send?text=${currentUrl}`}
        target="_blank"
        rel="noopener noreferrer">

        <img src={WhatsApp} alt="" />
      </a>
      <a
        href={`https://twitter.com/share?&url=${currentUrl}`}
        target="_blank"
        rel="noopener noreferrer">

        <img src={Twitter} alt="" />
      </a>


      <div>
          <CopyToClipboard
            text={currentUrl}
            onCopy={handleCopyLink}
          >
            <img src={Share} alt="Compartilhar link" />
          </CopyToClipboard>

          <ToastContainer
            position="bottom-left"
          />
      </div>


    </Container>
  );
}
