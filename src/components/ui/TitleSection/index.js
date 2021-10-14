import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const TitleSection = ({ center, subtitle }) => (
  <Styled.TitleSection>
    <Styled.Title center={center}>{subtitle}</Styled.Title>
  </Styled.TitleSection>
);

TitleSection.propTypes = {
  center: PropTypes.bool,
  subtitle: PropTypes.string
};

export default TitleSection;
