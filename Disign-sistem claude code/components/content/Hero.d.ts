/**
 * Centered home hero: mono purple eyebrow, huge Sora 800 title with vertical fade, lead paragraph, CTA row.
 * @startingPoint section="Content" subtitle="Centered hero with fading title" viewport="980x420"
 */
export interface HeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  /** Second phrase kept together on one line (inline-block). */
  titleEm?: React.ReactNode;
  /** Lead paragraph; use <strong> for highlighted topics (renders --text). */
  children?: React.ReactNode;
  /** CTA buttons — ghost first, primary second. */
  actions?: React.ReactNode;
  align?: 'center' | 'left';
  style?: React.CSSProperties;
}
export declare function Hero(props: HeroProps): JSX.Element;
