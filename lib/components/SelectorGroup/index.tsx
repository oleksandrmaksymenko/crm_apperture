import {Fragment, cloneElement, ReactElement} from 'react';
import {StyledSelectorGroupContainer} from './SelectorGroup.styled.tsx';
import {SpacingType} from '../../global.types.ts';
import type {RadioProps} from '../Radio';

export type SelectorGroupProps = {
  gap: SpacingType;
  group: RadioProps[];
  component: ReactElement;
  direction?: 'horizontal' | 'vertical';
};

const SelectorGroup = ({group, component, ...props}: SelectorGroupProps) => {
  return (
    <StyledSelectorGroupContainer {...props}>
      {group.map(group => (
        <Fragment key={group.id}>
          {cloneElement(component, {...group})}
        </Fragment>
      ))}
    </StyledSelectorGroupContainer>
  );
};

export default SelectorGroup;
