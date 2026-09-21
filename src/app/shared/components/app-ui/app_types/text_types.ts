import { IconName } from '../icon/icon';
import { textVariants } from '../text/text';

export type TextVariant = keyof typeof textVariants;

export interface TextProps {
  variant?: TextVariant;
  class?: string;
  text: string;
}
export interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
}

export interface BtnProps {
  textProps: TextProps;
  btn: {
    type: 'button' | 'submit' | 'reset';
    disabled: boolean;
    loading: boolean;
  };
}
