import { ERROR, SUCCESS } from './constants';
import Close from '../Icons/Close';
import Check from '../Icons/Check';
import Info from '../Icons/Info';
import { Icon, LogoContainer, Outer, OuterChild } from './styles';

const getLogoImage = (type, main) => {
  if (type === ERROR) {
    return <Close size={16} color={main} />;
  }

  if (type === SUCCESS) {
    return <Check size={18} color={main} />;
  }

  return <Info size={22} color={main} />;
};

const getLogoContainerSize = (type) => {
  if (type === ERROR) {
    return 1;
  }

  if (type === SUCCESS) {
    return 1.1;
  }

  return 1.3;
};

export const Logo = ({ type, main, side }) => {
  const logoImg = getLogoImage(type, main);

  return (
    <Outer {...{ side }}>
      <OuterChild {...{ main }} />
      <LogoContainer />
      <Icon size={getLogoContainerSize(type)}>{logoImg}</Icon>
    </Outer>
  );
};
