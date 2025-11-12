// Libraries
import { useEffect, useState } from 'react';
import _get from 'lodash-es/get';
import _noop from 'lodash-es/noop';

// helpers
import { Logo } from './helpers';

// constants
import grey from '../../colors/grey';
import { COLOR_MAP, WARNING, WARNING_COLORS } from './constants';

// styles
import { ToastWrapper, Container, CloseWrapper, Title, Subtitle, Message } from './styles';

const Toast = ({
  type = WARNING,
  visible = true,
  duration = 5,
  onExpire = _noop,
  title,
  subtitle,
}) => {
  const [show, setShow] = useState(visible);
  const [fadeOut, setFadeOut] = useState(false);

  const durationMilli = duration * 1000;

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), durationMilli - 500);
    const removeTimer = setTimeout(() => onExpire(), durationMilli);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [durationMilli, onExpire]);

  const { main, side, bg } = _get(COLOR_MAP, type, WARNING_COLORS);

  if (visible) {
    return (
      <ToastWrapper>
        <Container bg={bg} className={`${fadeOut ? 'fade-out' : 'fade-in'}`}>
          <Logo {...{ type, main, side }} />
          <Message>
            <Title>{title}</Title>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </Message>
          <CloseWrapper size={20} color={grey.m600} />
        </Container>
      </ToastWrapper>
    );
  }
};

export default Toast;
