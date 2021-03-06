import * as React from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 2.8C9.815 4.8 4.8 9.815 4.8 16S9.815 27.2 16 27.2 27.2 22.185 27.2 16 22.185 4.8 16 4.8zm5.366 4.672a.833.833 0 011.068.094.827.827 0 01.089 1.064c-3.052 4.264-4.732 6.549-5.038 6.855-.82.82-2.15.82-2.97 0a2.103 2.103 0 010-2.97c.523-.523 2.807-2.204 6.851-5.043zM23.7 14.6a1.4 1.4 0 11-.001 2.801A1.4 1.4 0 0123.7 14.6zm-15.4 0a1.4 1.4 0 11-.001 2.801A1.4 1.4 0 018.3 14.6zm3.245-5.034a1.401 1.401 0 01-1.98 1.98 1.401 1.401 0 011.98-1.98zM16 6.9a1.4 1.4 0 11-.001 2.801A1.4 1.4 0 0116 6.9z"
        fill="#47474D"
      />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
