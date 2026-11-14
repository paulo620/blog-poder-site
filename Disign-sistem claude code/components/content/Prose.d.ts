/**
 * Glass article container that styles raw post HTML (h2–h4, lists with purple markers, teal links, green-bar blockquote, mono code).
 * @startingPoint section="Content" subtitle="Article body / long-form prose" viewport="760x520"
 */
export interface ProseProps {
  /** Article markup: p, h2, h3, ul/ol, blockquote, pre/code, img, hr. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Prose(props: ProseProps): JSX.Element;
