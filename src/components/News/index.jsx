import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useLocation } from 'react-router-dom';

import api from '../../services/api';
import { formatDate } from '../../functions';

import InternalMoreNews from '../InternalMoreNews';

import { Container, TopContent, TextContent } from './styles';

export default function News({ id }) {
  const { idLocation } = useLocation();
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`contents/${id || idLocation}`, {
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
    if (id || idLocation) fetchData();
  }, [id, idLocation]);

  return (
      <Container>
        {content && (
          <TopContent>

            <span>{formatDate(content.date)}</span>

            <h1>{content.title}</h1>

            <h2>{content.resume}</h2>

          </TopContent>
        )}

        <TextContent>
          <p>{ReactHtmlParser(content.text)}</p>
        </TextContent>

        <h1 className="title">Notícias</h1>

        <InternalMoreNews />

      </Container>
  );
}
