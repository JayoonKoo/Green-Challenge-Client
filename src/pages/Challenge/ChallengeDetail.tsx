import {IntroduceCard} from 'components/Challenge/common';
import {DetailCard} from 'components/Challenge/DetailCard';
import {Layout} from 'components/common';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import Section from 'components/common/Section';
import {useIsAuthPush} from 'hooks/auth/useIsAuth';
import useChallengeDetail from 'hooks/challenge/useChallengeDetail';
import useIsChallenging from 'hooks/challenge/useIsChallenging';
import {useCallback} from 'react';
import {useHistory, useParams} from 'react-router-dom';

export interface AddState {
  challengeId: string;
}

function ChallengeDetail() {
  useIsAuthPush();
  useIsChallenging();
  const history = useHistory();
  const params = useParams<AddState>();

  const onClick = useCallback(() => {
    history.push({pathname: '/challenge/add', state: params});
  }, [history, params]);

  const {data, loading, error} = useChallengeDetail(
    parseInt(params.challengeId),
  );

  if (loading) {
    return <div>로딩중</div>;
  }
  if (error) {
    return <div>에러</div>;
  }

  return (
    <Layout>
      <Layout.Header>
        <Header isTitle isBig>
          {data && data.challengeName}
        </Header>
      </Layout.Header>
      <Layout.ScrollMain>
        {data && (
          <>
            <DetailCard
              numberOfPersion={data.numberOfChallengers}
              imageSrc="https://via.placeholder.com/312x320.jpg"
              description={data.description}
              tags={data.hasTag}
            />
            <Section title="리워드 토큰">
              <IntroduceCard
                description={`${data.rewardToken}N`}
                imageSrc="https://via.placeholder.com/56x56.jpg"
              />
            </Section>
            <Section title="리워드 나무">
              <IntroduceCard
                description="향나무"
                imageSrc="https://via.placeholder.com/100x120.jpg"
              />
            </Section>
            <Section title="챌린지 소개">
              <IntroduceCard
                isSquare
                description="챌린지를 완료할 때마다 실제로 나무 한 그루를
                심는 것과 같은 효과가 있어요."
                imageSrc="/Icon/intro_1.svg"
              />
              <IntroduceCard
                isMarginTop
                isSquare
                description="지정된 거리 만큼 이동해 게이지를 채우면 나뭇잎 1장을 지급해드려요."
                imageSrc="/Icon/intro_2.svg"
              />
              <IntroduceCard
                isMarginTop
                isSquare
                description="참여자들과 함께 나뭇잎 100장을 모아 어른 나무가 완성되면 챌린지 성공!"
                imageSrc="/Icon/intro_3.svg"
              />
              <IntroduceCard
                isMarginTop
                isSquare
                description="개인별로 기여한 나뭇잎 개수에 따라 네이토큰을 분배해 드려요."
                imageSrc="/Icon/intro_4.svg"
              />
            </Section>
          </>
        )}
        <Button onClick={onClick}>참여하기</Button>
      </Layout.ScrollMain>
    </Layout>
  );
}

export {ChallengeDetail};
