import React, { useState, useCallback } from 'react';
import { isMobile } from 'react-device-detect';

import { RiArrowRightSFill, RiArrowLeftSFill } from 'react-icons/ri';

import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';

import 'lightgallery.js/dist/css/lightgallery.css';

import data from './data.js';

import { Container } from './styles';

export default function Gallery() {
  const [page, setPage] = useState(1);

  const PhotoItem = ({ image, thumb, group, date, title }) => (
    <div>
      <LightgalleryItem group={group} src={image} thumb={thumb}>
        <img src={image} alt="gallery" />
        <p>{date}</p>
        <h5>{title}</h5>
      </LightgalleryItem>
    </div>
  );

  const handleChangePage = useCallback(
    operator => {

      switch(operator) {
        case 'more':
          if(page >= data[data.length - 1].page){ // pegou o page do último item, com base no index do array.
            //  alert("Você está na última página!");
            setPage(1);
          }else{
            setPage(page + 1);
          }
        break;

        case 'less':
          if(page <= 1){
            //  alert('Você está na primeira página!');
            setPage(1);
          }else{
            setPage(page - 1);
          }
        break;

        default: console.log('gallery');
      }
    },
    [page],
  );

  return (
    <Container>
      <header>
        <h1>galeria de fotos</h1>
      </header>

      <section>
        {isMobile
        ? (
          <LightgalleryProvider>
            {data.map((items) => (
                <PhotoItem
                  key={items.id}
                  image={items.img}
                  group="group2"
                  date={items.date}
                  title={items.title}
                />
            ))}
        </LightgalleryProvider>
        ) : (
          <LightgalleryProvider>
          {data.map(
            items =>
              items.page === page && (
                <PhotoItem
                  key={items.id}
                  image={items.img}
                  group="group2"
                  date={items.date}
                  title={items.title}
                />
              ),
          )}
        </LightgalleryProvider>
        )}
      </section>

      {isMobile ? (
        ''
      ) : (
        <footer>
          <button onClick={() => handleChangePage('less')}>
            <RiArrowLeftSFill className="arrowLeft" />
          </button>

          <button onClick={() => handleChangePage('more')}>
            <RiArrowRightSFill
              className="arrowRight"
            />
          </button>
        </footer>
      )}
    </Container>
  );
}
