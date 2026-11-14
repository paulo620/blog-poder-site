/**
 * Glass blog-post card: 16:9 image, mono date, Sora title, 3-line excerpt, teal "Ler artigo →".
 * @startingPoint section="Content" subtitle="Glass post card with hover lift" viewport="700x460"
 */
export interface PostCardProps {
  title: string;
  description?: string;
  /** Pre-formatted pt-BR date, e.g. "13 de nov. de 2026". */
  date?: string;
  /** 16:9 hero image URL. */
  image?: string;
  imageAlt?: string;
  href?: string;
  moreLabel?: string;
  onClick?: (e: any) => void;
  style?: React.CSSProperties;
}
export declare function PostCard(props: PostCardProps): JSX.Element;
