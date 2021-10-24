import * as React from 'react';

import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={108}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.66.238H23.11v2.301h18.55V.238zm0 4.725H23.11v2.302h18.55V4.963zM23.11 9.69h18.55v2.301H23.11V9.69zM67.28.238h18.55v2.301H67.28V.238zm10.3 11.752V4.202l-.102.05-1.846.922v6.816h1.947z"
          fill="#E1E1E6"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.618.334l6.847 3.412-2.487 1.241-4.555-2.27V.237l.195.097zm18.354 9.148v2.48l-7.025-3.5 2.485-1.24 4.54 2.26zm0-6.763V.24l-.193.095-9.073 4.528h-.002L96.22 6.106l-6.797 3.39v2.482l9.283-4.634 2.485-1.24 6.781-3.385z"
          fill="#DC1637"
        />
        <Path
          d="M1.947 12H0V9.929c.001-2.568.864-5.03 2.4-6.847C3.934 1.265 6.016.243 8.19.24h11.333v2.302H8.19c-1.654.002-3.24.78-4.41 2.163-1.17 1.383-1.83 3.258-1.832 5.214V12z"
          fill="#E1E1E6"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.076.236H44.17V.79l-.001.591V12h1.947V2.945l1.675.873 14.94 8.168v.004h.008l.017.01h1.923V6.055l-.004.002V.24H62.73v8.9l-1.237-.635L46.076.236z"
          fill="#E1E1E6"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h108v12H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
