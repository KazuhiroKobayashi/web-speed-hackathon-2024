import { NavigateNext } from '@mui/icons-material';
import { Suspense } from 'react';
import styled from 'styled-components';

import { Box } from '../../../foundation/components/Box';
import { Flex } from '../../../foundation/components/Flex';
import { Image } from '../../../foundation/components/Image';
import { Link } from '../../../foundation/components/Link';
import { Separator } from '../../../foundation/components/Separator';
import { Spacer } from '../../../foundation/components/Spacer';
import { Text } from '../../../foundation/components/Text';
import { useImage } from '../../../foundation/hooks/useImage';
import { Color, Radius, Space, Typography } from '../../../foundation/styles/variables';

const _Wrapper = styled.li`
  width: 100%;
`;

const _Link = styled(Link)`
  width: 100%;
`;

const _ImgWrapper = styled.div`
  width: 96px;
  height: 96px;
  > img {
    border-radius: ${Radius.SMALL};
  }
`;

const _AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  > img {
    border-radius: 50%;
  }
`;

type RankingCardProps = {
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

const RankingCard: React.FC<RankingCardProps> = ({ author, bookId, description, image, name }) => {
  const imageUrl = useImage({ height: 96, imageId: image.id, width: 96 });
  const authorImageUrl = useImage({ height: 32, imageId: author.image.id, width: 32 });

  return (
    <_Wrapper>
      <_Link href={`/books/${bookId}`}>
        <Spacer height={Space * 1.5} />
        <Flex align="flex-start" gap={Space * 2.5} justify="flex-start">
          {imageUrl != null && (
            <_ImgWrapper>
              <Image alt={name} height={96} objectFit="cover" src={imageUrl} width={96} />
            </_ImgWrapper>
          )}
          <Box width="100%">
            <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
              <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
                {name}
              </Text>
              <Text as="p" color={Color.MONO_80} typography={Typography.NORMAL12}>
                {description}
              </Text>
            </Flex>

            <Spacer height={Space * 1} />

            <Flex align="center" gap={Space * 1} justify="flex-end">
              {authorImageUrl != null && (
                <_AvatarWrapper>
                  <Image
                    alt={`${author.name}のアイコン`}
                    height={32}
                    objectFit="cover"
                    src={authorImageUrl}
                    width={32}
                  />
                </_AvatarWrapper>
              )}
              <Text color={Color.MONO_80} typography={Typography.NORMAL12}>
                {author.name}
              </Text>
            </Flex>

            <Spacer height={Space * 1} />

            <Flex align="center" justify="flex-end">
              <Text color={Color.Secondary} typography={Typography.NORMAL14} weight="bold">
                この漫画を読む
              </Text>
              <NavigateNext style={{ color: Color.Secondary, height: 32, width: 32 }} />
            </Flex>
          </Box>
        </Flex>
        <Spacer height={Space * 1.5} />
        <Separator />
      </_Link>
    </_Wrapper>
  );
};

const RankingCardWithSuspense: React.FC<RankingCardProps> = (props) => {
  return (
    <Suspense fallback={null}>
      <RankingCard {...props} />
    </Suspense>
  );
};

export { RankingCardWithSuspense as RankingCard };
