import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Footer = styled.footer`
  ${tw`border-t border-gray-200 py-4`};
`;

export const Links = styled.div`
  ${tw`flex items-center justify-center w-full text-xs`};

  a {
    ${tw`text-black hover:text-gray-700 mx-2`};
  }
`;

export const Link = styled.a`
  ${tw`text-black hover:text-gray-700 mx-2`};
`;
