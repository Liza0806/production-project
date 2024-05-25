declare module '*.module.css';
declare module '*.module.scss';

declare module '*.png';
declare module '*.ipg';
declare module '*.jpeg';
declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare const IS_DEV: boolean;
