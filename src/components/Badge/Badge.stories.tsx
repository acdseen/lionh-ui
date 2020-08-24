import React from 'react';
import { Badge, BadgeProps, badgeColor } from './index';
import { Icon } from '../Icon';
import { withKnobs, text, select } from '@storybook/addon-knobs';

type selectType = 'positive' | 'negative' | 'neutral' | 'warning' | 'error';

export default {
  title: 'Badge',
  component: Badge,
  decorators: [withKnobs],
};

export const knobsBtn = () => (
  <Badge
    status={select<BadgeProps['status']>(
      'status',
      Object.keys(badgeColor) as selectType[],
      'neutral'
    )}
    value={text('value', '0')}
  ></Badge>
);

export const all = () => (
  <>
    <Badge status="positive" value="Positive"></Badge>
    <Badge status="negative" value="Negative"></Badge>
    <Badge status="neutral" value="Neutral"></Badge>
    <Badge status="error" value="Error"></Badge>
    <Badge status="warning" value="Warning"></Badge>
  </>
);

export const withIcon = () => (
  <Badge status="warning" value="with icon">
    <Icon icon="check" />
    
  </Badge>
);
