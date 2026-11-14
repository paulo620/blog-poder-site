export interface ThemeToggleProps {
  /** Controlled theme. */
  value?: 'dark' | 'light';
  defaultValue?: 'dark' | 'light';
  onChange?: (theme: 'dark' | 'light') => void;
  /** Pin top-right of viewport (1rem) like the live site. Default false. */
  fixed?: boolean;
  style?: React.CSSProperties;
}
export declare function ThemeToggle(props: ThemeToggleProps): JSX.Element;
