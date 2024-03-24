import { Suspense } from 'react';
import { styled } from 'styled-components';

import { Flex } from '../../../foundation/components/Flex';
import { Image } from '../../../foundation/components/Image';
import { Link } from '../../../foundation/components/Link';
import { Text } from '../../../foundation/components/Text';
import { useImage } from '../../../foundation/hooks/useImage';
import { Color, Radius, Space, Typography } from '../../../foundation/styles/variables';

const _Wrapper = styled(Link)`
  display: grid;
  gap: ${Space * 1}px;
  background-color: ${Color.MONO_A};
  padding: ${Space * 1.5}px;
  border-radius: ${Radius.SMALL};
  grid-template-columns: auto 1fr;
  flex-shrink: 0;
  border: 1px solid ${Color.MONO_30};
`;

const _ImgWrapper = styled.div`
  width: 96px;
  height: 96px;
  > img {
    border-radius: ${Radius.SMALL};
  }
`;

const _ContentWrapper = styled.div`
  display: grid;
  gap: ${Space * 1}px;
  max-width: 200px;
  width: 100%;
`;

const _AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  > img {
    border-radius: 50%;
  }
`;

type FeatureCardProps = {
  author: {
    description: string;
    id: string;
    image: {
      alt: string;
      id: string;
    };
    name: string;
  };
  bookId: string;
  description: string;
  image: {
    alt: string;
    id: string;
  };
  name: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ author, bookId, description, image, name }) => {
  const imageUrl = useImage({ height: 96, imageId: image.id, width: 96 });
  const authorImageUrl = useImage({ height: 32, imageId: author.image.id, width: 32 });

  return (
    <_Wrapper href={`/books/${bookId}`}>
      {imageUrl != null && (
        <_ImgWrapper>
          <Image
            alt={image.alt}
            decoding="async"
            height={96}
            loading="lazy"
            objectFit="cover"
            src={imageUrl}
            width={96}
          />
        </_ImgWrapper>
      )}

      <_ContentWrapper>
        <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
          {name}
        </Text>
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL14}>
          {description}
        </Text>

        <Flex align="center" gap={Space * 1} justify="flex-end">
          {authorImageUrl != null && (
            <_AvatarWrapper>
              <Image
                alt={author.name}
                decoding="async"
                height={32}
                loading="lazy"
                objectFit="cover"
                src={authorImageUrl}
                width={32}
              />
            </_AvatarWrapper>
          )}
          <Text color={Color.MONO_100} typography={Typography.NORMAL14}>
            {author.name}
          </Text>
        </Flex>
      </_ContentWrapper>
    </_Wrapper>
  );
};

const FeatureCardWithSuspense: React.FC<FeatureCardProps> = (props) => {
  return (
    <Suspense fallback={null}>
      <FeatureCard {...props} />
    </Suspense>
  );
};

export { FeatureCardWithSuspense as FeatureCard };
