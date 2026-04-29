import { Suspense } from 'react';

const SvgIcon = ({ svgIcon, iconStyles }) => {
  if (!svgIcon) return null;

  const Icon = svgIcon;

  return (
    <Suspense fallback={<div style={{ width: '1em', height: '1em' }} />}>
      <Icon {...iconStyles} />
    </Suspense>
  );
};

export default SvgIcon;
