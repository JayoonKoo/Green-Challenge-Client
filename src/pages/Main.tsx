import {Layout} from 'components/common';
import LogoHeader from 'components/common/LogoHeader';
import Icon from 'components/Icon/Icon';
import {ChallengeSection} from 'components/Main/ChallengeSection';
import ChallengeCard from 'components/Main/ChallengeSection/ChallengeCard';
import ChallengeCircle from 'components/Main/ChallengeSection/ChallengeCircle';
import {InfoSection} from 'components/Main/InfoSection';
import {css} from 'styled-components/macro';

function Main() {
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
        <ChallengeCircle />
        {/* <ChallengeCard /> */}
        {/* <ChallengeSection /> */}
      </Layout.ScrollMain>
    </Layout>
  );
}

const IconStyle = css`
  cursor: pointer;
`;

export default Main;
