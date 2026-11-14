export interface IconProps {
  /** One of the glyphs used on blog.ibe.ia.br. */
  name: 'moon' | 'sun' | 'youtube' | 'instagram';
  /** Square size in px. Default 16. */
  size?: number;
  width?: number;
  height?: number;
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
