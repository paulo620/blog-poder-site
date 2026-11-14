export interface SectionHeaderProps {
  /** e.g. "Últimos posts". */
  title: React.ReactNode;
  /** Right-aligned teal link; null to hide. Default "Ver todos →". */
  linkLabel?: string | null;
  href?: string;
  onLinkClick?: (e: any) => void;
  style?: React.CSSProperties;
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
