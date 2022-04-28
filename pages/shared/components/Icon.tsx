import * as React from 'react';

interface IconProps {
  type: string,
}

export default function Icon(props: IconProps): JSX.Element {
  return <i>icon of type { props.type } here</i>;
}
