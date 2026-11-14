/**
 * Centered glass footer: logo, tagline, link row (with YouTube/Instagram icons), copyright.
 * @startingPoint section="Navigation" subtitle="Centered glass footer" viewport="980x300"
 */
export interface SiteFooterProps {
  links?: { label: string; href?: string; icon?: 'youtube' | 'instagram' }[];
  tagline?: string;
  year?: number;
  onNavigate?: (link: { label: string; href?: string }) => void;
  style?: React.CSSProperties;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
