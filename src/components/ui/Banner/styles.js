import styled from 'styled-components';
import tw from 'tailwind.macro';
import bgHome from "./pattern.svg"

export const Banner = styled.section`
  ${tw`bg-home flex justify-center items-center w-full h-screen bg-gray-800 bg-no-repeat bg-cover border-b border-indigo-100 `};
  background-image: url(${bgHome});
  background-position: 50% 100%;
`;

export const Wrap = styled.section`
  ${tw`w-full mx-4 text-center text-white`};
`;

export const Title = styled.h1`
  ${tw`font-bold uppercase text-6xl mb-4`};
`;

export const SubTitle = styled.h2`
  ${tw`text-sm`};
`;

export const SearchWrap = styled.section`
  ${tw`my-4 mx-auto w-6/12 relative text-white items-center`};
`;

export const Input = styled.input`
  ${tw`w-full bg-transparent border-2 border-yellow-500 h-10 px-5 py-6 pr-10 text-xs focus:outline-none`};
`;

export const Button = styled.button`
  ${tw`absolute bg-yellow-500 text-black text-sm px-3 py-1 right-0 top-0 mt-3 mr-3`};
`;

export const Content = styled.p`
  ${tw`mb-8`};
`;
