import { ERROR, SUCCESS } from './constants';
import Close from '../Icons/Close';
import { Icon, LogoContainer, Outer, OuterChild } from './styles';

const getLogoImage = (type, main) => {
  if (type === ERROR) {
    return <Close size={20} color={main} />;
  }

  if (type === SUCCESS) {
    return <div>i</div>;
  }

  return <div>i</div>;
};

export const Logo = ({ type, main, side }) => {
  const logoImg = getLogoImage(type, main);

  return (
    <Outer {...{ side }}>
      <OuterChild {...{ main }} />
      <LogoContainer />
      <Icon>{logoImg}</Icon>
    </Outer>
  );
};
