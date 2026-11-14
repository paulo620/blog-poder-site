export interface AuroraBackgroundProps {
  /** position: fixed behind the page (default true). false = absolute, fills nearest positioned parent. */
  fixed?: boolean;
  /** Blob blur radius in px. Site uses 120 (40 on small screens). */
  blur?: number;
}
export declare function AuroraBackground(props: AuroraBackgroundProps): JSX.Element;
