declare module "react-slick" {
  import * as React from "react";

  interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    speed?: number;
    autoplaySpeed?: number;
    cssEase?: string;
    //   [key: string]: any;
  }

  export default class Slider extends React.Component<Settings> {}
}
