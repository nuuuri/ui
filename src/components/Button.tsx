import { CSSProperties, MouseEventHandler } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

type ButtonColors = 'default' | 'primary' | 'danger';
type ButtonVariant = 'solid' | 'outlined' | 'dashed' | 'filled';

interface ButtonProps {
  color?: ButtonColors;
  variant?: ButtonVariant;
  disabled?: boolean;
  children?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

const defaultStyle = css`
  padding: 4px 8px;
  border-radius: 4px;
  color: var(--ant-gray-11);
  cursor: pointer;
`;

const buttonColors = {
  default: 'gray',
  primary: 'blue',
  danger: 'red',
};

const Solid = styled.button<{ color: ButtonColors }>`
  ${defaultStyle}

  color: var(--ant-gray-1);

  ${(props) => {
    if (props.color === 'default') {
      return css`
        background: var(--ant-gray-12);
        border: 1px solid var(--ant-gray-12);

        :hover {
          background: var(--ant-gray-8);
        }
        :active {
          background: var(--ant-gray-12);
        }
      `;
    }

    return css`
      background: var(--ant-${buttonColors[props.color]}-6);
      border: 1px solid var(--ant-${buttonColors[props.color]}-6);

      :hover {
        background: var(--ant-${buttonColors[props.color]}-4);
      }
      :active {
        background: var(--ant-${buttonColors[props.color]}-7);
      }
    `;
  }}
`;

const Filled = styled.button<{ color: ButtonColors }>`
  ${defaultStyle}

  ${(props) => {
    if (props.color === 'default') {
      return css`
        background: var(--ant-gray-3);
        border: 1px solid var(--ant-gray-3);

        :hover {
          background: var(--ant-gray-4);
        }
        :active {
          background: var(--ant-gray-5);
        }
      `;
    }

    return css`
      background: var(--ant-${buttonColors[props.color]}-2);
      border: 1px solid var(--ant-${buttonColors[props.color]}-2);

      :hover {
        background: var(--ant-${buttonColors[props.color]}-3);
      }
      :active {
        background: var(--ant-${buttonColors[props.color]}-4);
      }
    `;
  }}
`;

const Outlined = styled.button<{ color: ButtonColors }>`
  ${defaultStyle}

  background: var(--ant-gray-1);

  ${(props) => {
    if (props.color === 'default') {
      return css`
        border: 1px solid var(--ant-gray-5);

        :hover {
          border: 1px solid var(--ant-blue-5);
          color: var(--ant-blue-5);
        }
        :active {
          border: 1px solid var(--ant-blue-7);
          color: var(--ant-blue-7);
        }
      `;
    }

    return css`
      border: 1px solid var(--ant-${buttonColors[props.color]}-5);
      color: var(--ant-${buttonColors[props.color]}-5);

      :hover {
        border: 1px solid var(--ant-${buttonColors[props.color]}-3);
        color: var(--ant-${buttonColors[props.color]}-3);
      }
      :active {
        border: 1px solid var(--ant-${buttonColors[props.color]}-7);
        color: var(--ant-${buttonColors[props.color]}-7);
      }
    `;
  }}
`;

const Dashed = styled(Outlined)`
  &,
  :hover,
  :active {
    border-style: dashed;
  }
`;

export default function Button({
  color = 'default',
  variant = 'outlined',
  disabled = false,
  children,
  onClick,
  style,
}: ButtonProps) {
  const props = {
    color: color,
    disabled: disabled,
    onClick: onClick,
    style: style,
  };

  return {
    solid: <Solid {...props}>{children}</Solid>,
    outlined: <Outlined {...props}>{children}</Outlined>,
    dashed: <Dashed {...props}>{children}</Dashed>,
    filled: <Filled {...props}>{children}</Filled>,
  }[variant];
}
