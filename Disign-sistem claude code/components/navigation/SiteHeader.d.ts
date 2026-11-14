/**
 * Sticky frosted-glass header: logo, nav links (Home/Blog/Sobre) and green "Inscreva-se" CTA.
 * @startingPoint section="Navigation" subtitle="Sticky glass header with CTA" viewport="980x80"
 */
export interface SiteHeaderProps {
  links?: { label: string; href?: string }[];
  /** Label of the active link (rendered in --text). */
  active?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onNavigate?: (link: { label: string; href?: string }) => void;
  onCta?: () => void;
  /** Mobile layout: logo + burger menu (<768px on the site). */
  compact?: boolean;
  sticky?: boolean;
  /** Right margin reserved for the fixed theme toggle. Site uses 88. */
  ctaOffset?: number;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
