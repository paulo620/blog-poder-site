/**
 * Primary CTA (lime-green gradient, dark ink) or ghost (frosted glass) button.
 * @startingPoint section="Core" subtitle="Green CTA + glass ghost buttons" viewport="700x260"
 */
export interface ButtonProps {
  /** primary = green gradient CTA ("Conheça a ibe.IA →"); ghost = glass ("Ler o Blog"). */
  variant?: 'primary' | 'ghost';
  /** md = hero CTA (14px 24px); sm = header CTA (10px 18px). */
  size?: 'md' | 'sm';
  /** Render as <a>. */
  href?: string;
  onClick?: (e: any) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  target?: string;
}
export declare function Button(props: ButtonProps): JSX.Element;
