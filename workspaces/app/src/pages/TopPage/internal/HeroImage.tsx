import styled from 'styled-components';

import { IMAGE_SRC } from './ImageSrc';

const _Wrapper = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
`;

const _Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const HeroImage: React.FC = () => {
  return (
    <_Wrapper>
      <_Image alt="Cyber TOON" src={IMAGE_SRC} />
    </_Wrapper>
  );
};
