import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Banner = () => (
  <Styled.Banner>
    <Container section>
      <Styled.Wrap>
          <Styled.Title>Unicorn Store</Styled.Title>
          <Styled.SubTitle>Lorem ipsum dolor estat</Styled.SubTitle>
      </Styled.Wrap>
    </Container>
  </Styled.Banner>
);

export default Banner;
