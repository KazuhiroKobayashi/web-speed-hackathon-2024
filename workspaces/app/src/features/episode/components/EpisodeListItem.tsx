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

type EpisodeListItemProps = {
  bookId: string;
  chapter: number;
  description: string;
  episodeId: string;
  imageId: string;
  name: string;
};

export const EpisodeListItem: React.FC<EpisodeListItemProps> = ({
  bookId,
  chapter,
  description,
  episodeId,
  imageId,
  name,
}) => {
  const imageUrl = useImage({ height: 96, imageId: imageId, width: 96 });

  return (
    <_Wrapper>
      <_Link href={`/books/${bookId}/episodes/${episodeId}`}>
        <Spacer height={Space * 1.5} />
        <Flex align="flex-start" gap={Space * 2.5} justify="flex-start">
          {imageUrl != null && (
            <_ImgWrapper>
              <Image
                alt={name}
                decoding="async"
                height={96}
                loading="lazy"
                objectFit="cover"
                src={imageUrl}
                width={96}
              />
            </_ImgWrapper>
          )}
          <Box width="100%">
            <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
              <Flex align="center" justify="flex-start">
                <Text color={Color.MONO_100} flexShrink={0} typography={Typography.NORMAL16} weight="bold">
                  第{chapter}話
                </Text>
                <Spacer width={Space * 2} />
                <Text color={Color.MONO_80} typography={Typography.NORMAL14} weight="bold">
                  {`- ${name} -`}
                </Text>
              </Flex>
              <Text as="p" color={Color.MONO_80} typography={Typography.NORMAL12}>
                {description}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Spacer height={Space * 1.5} />
        <Separator />
      </_Link>
    </_Wrapper>
  );
};
