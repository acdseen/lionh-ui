import React, { PropsWithChildren, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { color, typography, background } from '../shared/styles';

export const badgeColor = {
  positive: color.positive,
  negative: color.negative,
  neutral: color.dark,
  warning: color.warning,
  error: color.lightest,
};

export const badgeBackground = {
  positive: background.positive,
  negative: background.negative,
  neutral: color.mediumlight,
  warning: background.warning,
  error: color.negative,
};

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  /** 状态色*/
  status?: 'positive' | 'negative' | 'neutral' | 'warning' | 'error';
  /** 显示值 */
  value?: string | number;
  /** 小圆点 */
  'is-dot'?: boolean;
}

const BadgeWrapper = styled.div<BadgeProps>`
  display: inline-block;
  font-weight: ${typography.weight.bold};
  border-radius: 10px;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  padding: 0 6px;
  text-align: center;
  white-space: nowrap;

  svg {
    height: 12px;
    width: 12px;
    margin-right: 4px;
    margin-top: -2px;
  }

  ${(props) =>
    props.status === 'positive' &&
    css`
      color: ${badgeColor.positive};
      background: ${badgeBackground.positive};
    `};

  ${(props) =>
    props.status === 'negative' &&
    css`
      color: ${badgeColor.negative};
      background: ${badgeBackground.negative};
    `};

  ${(props) =>
    props.status === 'warning' &&
    css`
      color: ${badgeColor.warning};
      background: ${badgeBackground.warning};
    `};

  ${(props) =>
    props.status === 'error' &&
    css`
      color: ${badgeColor.error};
      background: ${badgeBackground.error};
    `};

  ${(props) =>
    props.status === 'neutral' &&
    css`
      color: ${badgeColor.neutral};
      background: ${badgeBackground.neutral};
    `};
`;

export function Badge(props: PropsWithChildren<BadgeProps>) {
  const { value, children } = props;
  // return <BadgeWrapper>{value}</BadgeWrapper>
  return React.createElement(BadgeWrapper, { ...props }, [children, value]);
}

Badge.defaultProps = {
  status: 'neutral',
  value: 0,
};
export default Badge;
