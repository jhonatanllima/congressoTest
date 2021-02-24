import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { isMobile } from 'react-device-detect';

import api from '../../services/api';

import Content from './components/Content';

import { Nav, Container, ContentRight } from './styles';

export default function EventContent() {
  const { idLocation } = useLocation();
  const [navContent, setNavContent] = useState([]);
  const [idContent, setIdContent] = useState(idLocation || null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get('contents', {
          params: {
            getCover: true,
            pagesize: 9999,
            page: 1,
            index_id: 780,
          },
        });

        setNavContent(data.rows);
        if (!idLocation) setIdContent(data.rows[0].id);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [idLocation]);

  return (
    <Container>
      <Nav>
        <h2>Provas</h2>
          {isMobile ? (
            <select onChange={e => setIdContent(e.target.value)}>
              {navContent.map(item => (
                <option
                key={item.id}
                value={item.id}
                 >
                  {item.title}
                </option>
              ))}
            </select>
          ) : (
          <ul>
            {navContent.map(item => (
              <button key={item.id} onClick={() => setIdContent(item.id)}>
                <li>{item.title}</li>
              </button>
            ))}
          </ul>
        )}
      </Nav>

      <ContentRight>
        <Content id={idContent} />
      </ContentRight>

    </Container>
  );
}
