declare module "*.png" {
  type IPNG = string;

  const png: IPNG;
  export = png;
}

declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg" {
  interface IReactSVGR {
    default: string;
    ReactComponent: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  }
  const svg: IReactSVGR;
  export = svg;
}

interface IBlogPostData {
  id: string;
  excerpt: string;
  html: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
    description: string;
  };
}
