import {Layout} from 'components/common';
import LogoHeader from 'components/common/LogoHeader';
import Icon from 'components/Icon/Icon';
import {ChallengeSection} from 'components/Main/ChallengeSection';
import {InfoSection} from 'components/Main/InfoSection';
import {useIsAuthPush, useIsAuthSelector} from 'hooks/auth/useIsAuth';
import {css} from 'styled-components/macro';

function Main() {
  useIsAuthPush();
  const {userId} = useIsAuthSelector();
  return (
    <Layout>
      <Layout.Header>
        <LogoHeader
          logo={<Icon name="logo" css={IconStyle} />}
          headerRightItems={<Icon name="my" css={IconStyle} />}
        />
      </Layout.Header>
      <Layout.ScrollMain>
        <InfoSection />
        <ChallengeSection userId={userId!} />
      </Layout.ScrollMain>
    </Layout>
  );
}

const IconStyle = css`
  cursor: pointer;
`;

export default Main;
