import React from 'react';
import {CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import {css} from 'styled-components/macro';

interface ChallengeCircleProps {
  treeId: number;
  isParticipating: boolean;
  percentage: number;
  isComplete: boolean;
}

function treeNameById(treeId: number) {
  const treeNames = ['t1', 't2', 't3', 't4', 't5', 't6', 't7'];
  return treeNames[treeId];
}

function ChallengeCircle({
  treeId,
  isParticipating,
  percentage,
  isComplete,
}: ChallengeCircleProps) {
  const treeName = treeNameById(treeId);
  return (
    <Wrapper>
      {isParticipating ? (
        <div style={{width: 86, height: 86}}>
          <CircularProgressbarWithChildren
            counterClockwise
            value={percentage}
            text={`${treeName}`}
            background={true}
            styles={{
              root: {},
              path: {
                stroke: '#7FEADD',
                strokeLinecap: 'round',
                transition: 'stroke-dashoffset 0.5s ease 0s',
                transform: 'rotate(1turn)',
                transformOrigin: 'center center',
              },
              trail: {
                stroke: '#F2F2F2',
                strokeLinecap: 'round',
                transform: 'rotate(0.5turn)',
                transformOrigin: 'center center',
              },
              text: {
                // fill: 'transparent',
                fill: '#000',
                fontSize: '16px',
              },
              background: {
                fill: '#F2F2F2',
              },
            }}>
            {isComplete ? <Icon name="success" css={Success} /> : null}

            {treeId === 2 ? (
              <Icon name="treeSo_3" css={IconStyle} />
            ) : (
              <Icon name="treeH_3" css={IconStyle} />
            )}
          </CircularProgressbarWithChildren>
        </div>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  float: left;
`;

const Success = css`
  cursor: pointer;
  position: absolute;
  margin-left: 3.75rem;
  margin-bottom: 3.6rem;
`;
const IconStyle = css`
  cursor: pointer;
`;

export default ChallengeCircle;
