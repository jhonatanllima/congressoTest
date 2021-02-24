import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

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
        setContent(data);
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

    </Container>
  );
}
