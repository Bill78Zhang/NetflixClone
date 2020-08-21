import React from 'react';
import Jumbortron from '../components/jumbortron';
import JumboData from '../fixtures/jumbo.json';
export function JumbortronContainer() {
  console.log(JumboData);
  return (
    <Jumbortron.Container>
      {JumboData.map((item) => (
        <Jumbortron key={item.id} direction={item.direction}>
          <Jumbortron.Panel>
            <Jumbortron.Title>{item.title}</Jumbortron.Title>
            <Jumbortron.SubTitle>{item.subTitle}</Jumbortron.SubTitle>
          </Jumbortron.Panel>
          <Jumbortron.Image src={item.image} alt={item.alt} />
        </Jumbortron>
      ))}
    </Jumbortron.Container>
  );
}
