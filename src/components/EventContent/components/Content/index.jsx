import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

// import {FiExternalLink} from 'react-icons/fi';

import api from '../../../../services/api';

import { Container } from './styles';

export default function Awards({ id }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`contents/${id}`, {
          params: {
            getContents: true,
            language: 'pt',
          },
        });
        setContent(data)
      } catch (error) {
        console.log(error);
      }
    };
    if (id) fetchData();
  }, [id]);

  return (

    <Container>

      <h1>{content.title}</h1>

      {ReactHtmlParser(content.text)}

     {/* {content.link_externo &&
        <a
          href={content.link_externo}
          target={content.link_em_nova_aba}
        >
          {content.title}
          < FiExternalLink  className="iconLink"/>
        </a>
      }  */}

    </Container>
  );
}
