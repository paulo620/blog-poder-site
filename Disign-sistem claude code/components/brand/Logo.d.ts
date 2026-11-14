export interface LogoProps {
  /** Lockup size: sm (28px symbol), md (40px), lg (56px). Default sm. */
  size?: 'sm' | 'md' | 'lg';
  /** Show the "ibe.IA" wordmark next to the symbol. Default true. */
  showText?: boolean;
  /** Wrap in a link. */
  href?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
export interface LogoSymbolProps { size?: number; color?: string; style?: React.CSSProperties; }
export declare function LogoSymbol(props: LogoSymbolProps): JSX.Element;
