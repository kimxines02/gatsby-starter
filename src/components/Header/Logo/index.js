import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as Styled from './styles';
const mainNavItems = [
  {
    title: 'Home',
    slug: '/'
  },
  {
    title: 'About',
    slug: '/'
  },
  {
    title: 'Contact',
    slug: '/'
  }
];

const Logo = () => {
  const { site, placeholderImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const logoTitle = site.siteMetadata.title;
  const logoImage = placeholderImage.childImageSharp.fluid;
  const [open, setOpen] = useState(false);

  return (
    <Styled.Logo to="/">
      <Styled.Image>
        <Img fluid={logoImage} alt={logoTitle} />
      </Styled.Image>
      <Styled.MainNav open={open}>
        {mainNavItems.map((item, index) => (
          <Styled.MainNavItem
            key={`nav-item-${index}`}
            to={item.slug}
            activeClassName=""
            whileTap={{ scale: 0.9 }}
          >
            {item.title}
          </Styled.MainNavItem>
        ))}
      </Styled.MainNav>
      <Styled.ToogleMainNav open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Styled.ToogleMainNav>
      
    </Styled.Logo>
  );
};

export default Logo;
