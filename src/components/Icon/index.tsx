import React from 'react';
import styled from 'styled-components';
import { icons } from '../shared/icons';

const Svg = styled.svg<IconProps>`
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;

const Path = styled.path<PathProps>`
  fill: ${(props) => props.color};
`;

export interface PathProps {
  ['data-testid']?: string;
}

export interface IconProps extends PathProps {
  /** 图标名*/
  icon: keyof typeof icons;
  /** 是否块级元素*/
  block?: boolean;
  /** 颜色*/
  color?: string;
}

export function Icon(props: IconProps) {
  const { block, icon, color } = props;
  // return (
  //   <Svg
  //     data-testid="icon-svg"
  //     viewBox="0 0 1024 1024"
  //     width="20px"
  //     height="20px"
  //     block={block}
  //     {...props}
  //   >
  //     <Path d={icons[icon]} color={color} data-testid="icon-path"></Path>
  //   </Svg>
  // );
  return React.createElement(
    Svg,
    {
      viewBox: '0 0 1024 1024',
      width: '20px',
      height: '20px',
      block,
      ...props,
      'data-testid': 'icon-svg',
    },
    React.createElement(Path, {
      d: icons[icon],
      color,
      'data-testid': 'icon-path',
    })
  );
}
Icon.defaultProps = {
  block: false,
  color: 'black',
};
export default Icon;
