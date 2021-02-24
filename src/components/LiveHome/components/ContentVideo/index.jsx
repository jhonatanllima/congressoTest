import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import api from '../../../../services/api';

import { Container, DescriptionVideo, LiveVideo, Nav, Icon } from './styles';

export default function ArenaOrganact() {
  const [navContent, setNavContent] = useState([]);
  const [id, setId] = useState(null);
  const [content, setContent] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`contents/`, {
          params: {
            getCover: true,
            pagesize: 9999,
            page: 1,
            index_id: 728,
          },
        });

        setNavContent(data.rows);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const { data } = await api.get(`contents/${id || navContent[0].id}`, {
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
    fetchVideo();
  }, [id, navContent]);

  return (
    <Container>
      <h5>Acompanhe as provas</h5>
      <h1>AO VIVO</h1>

      <div>
        <Nav>
          <ul>
            {navContent.map(item => (
              <button onClick={() => setId(item.id)} key={item.id}>
                <Icon className="IconButton"/>
                <NavLink to={item.id}>{item.title}</NavLink>
              </button>
            ))}
          </ul>
        </Nav>

        <LiveVideo>
          <div>{ReactHtmlParser(content.resume)}</div>
        </LiveVideo>

        <DescriptionVideo>
          <h2> {content.title} </h2>
          <p>{ReactHtmlParser(content.text)}</p>
        </DescriptionVideo>
      </div>

    </Container>
  );
}
