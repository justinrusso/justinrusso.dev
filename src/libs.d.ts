declare module "react-scrollspy-nav" {
  interface ScrollspyNavProps {
    scrollTargetIds: string[];
    offset?: number;
    activeNavClass: string;
    scrollDuration?: string;
    headerBackground?: "true" | "false";
    router?: string;
  }

  declare class ScrollspyNav extends React.Component<ScrollspyNavProps> {}

  export default ScrollspyNav;
}
