declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}


// declare module '*.jpg';
// declare module '*.jpeg';
// declare module '*.svg' {
//   const content: React.FC<React.SVGProps<SVGSVGElement>>;
//   export default content;
// }
// declare module '*.png';