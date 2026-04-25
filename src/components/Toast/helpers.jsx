import { ERROR, SUCCESS, WARNING } from './constants';
import Close from '../Icons/Close';
import Check from '../Icons/Check';
import Info from '../Icons/Info';
import WarningTriangleFilled from '../Icons/WarningTriangleFilled';
import white from '../../colors/white';
import { Icon, LogoContainer, Outer, OuterChild } from './styles';

const getLogoImage = (type, main) => {
  if (type === ERROR) {
    return <Close size={16} color={main} />;
  }

  if (type === SUCCESS) {
    return <Check size={18} color={main} />;
  }

  if (type === WARNING) {
    return <WarningTriangleFilled size={28} color={white} />;
  }

  return <Info size={22} color={main} />;
};

const getLogoContainerSize = (type) => {
  if (type === ERROR) {
    return 1.6;
  }

  if (type === SUCCESS) {
    return 1.76;
  }

  if (type === WARNING) {
    return 2.8;
  }

  return 2.08;
};

export const Logo = ({ type, $main, $side }) => {
  const logoImg = getLogoImage(type, $main);

  return (
    <Outer aria-hidden='true' {...{ $side }}>
      <OuterChild {...{ $main }} />
      {type !== WARNING && <LogoContainer {...{ $main, type }} />}
      <Icon size={getLogoContainerSize(type)}>{logoImg}</Icon>
    </Outer>
  );
};
