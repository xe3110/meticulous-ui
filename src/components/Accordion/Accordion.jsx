import { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import grey from '../../colors/grey';
import black from '../../colors/black';
import ChevronDown from '../Icons/ChevronDown';

const expandIn = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Item = styled.div`
  border: 1.5px solid
    ${({ $isOpen, $activeBackground, $itemBorderColor }) =>
      $isOpen && $activeBackground ? 'transparent' : $itemBorderColor || grey.m200};
  border-radius: 12px;
  overflow: hidden;
  background: ${({ $isOpen, $activeBackground, $itemBackground }) =>
    $isOpen && $activeBackground ? $activeBackground : $itemBackground};
  transition:
    background 0.22s ease,
    border-color 0.22s ease;
`;

const Header = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  &:focus-visible {
    outline: 2px solid ${black.m700};
    outline-offset: -2px;
    border-radius: 12px;
  }
`;

const IconBox = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border: 1.5px solid
    ${({ $iconBackground, $borderColor }) =>
      $iconBackground ? 'transparent' : $borderColor || grey.m200};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $iconColor }) => $iconColor};
  background: ${({ $iconBackground }) => $iconBackground || 'none'};
`;

const Title = styled.span`
  flex: 1;
  font-size: 15px;
  font-weight: 600;
  color: ${({ $titleColor }) => $titleColor || black.m700};
  line-height: 1.4;
`;

const ChevronWrap = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  color: ${({ $chevronColor }) => $chevronColor || grey.m600};
  transform: rotate(${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')});
  transition: transform 0.22s ease;
`;

const Body = styled.div`
  padding: 0 20px 18px calc(20px + 40px + 16px);
  font-size: 14px;
  line-height: 1.65;
  color: ${({ $bodyColor }) => $bodyColor || grey.m700};
  animation: ${expandIn} 0.22s ease both;

  a {
    color: ${({ $bodyColor }) => $bodyColor || black.m700};
    text-decoration: underline;
  }
`;

const DEFAULT_ICON_COLOR = black.m700;

const Accordion = ({
  items = [],
  allowMultiple = false,
  activeBackground,
  iconColor,
  iconBackground,
  itemBackground = '#fff',
  itemBorderColor,
  titleColor,
  bodyColor,
}) => {
  const [openSet, setOpenSet] = useState(new Set());

  const toggle = (id) => {
    setOpenSet((prev) => {
      const next = allowMultiple ? new Set(prev) : new Set();
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <Container>
      {items.map((item) => {
        const isOpen = openSet.has(item.id);
        return (
          <Item
            key={item.id}
            $isOpen={isOpen}
            $activeBackground={activeBackground}
            $itemBackground={itemBackground}
            $itemBorderColor={itemBorderColor}
          >
            <Header
              type='button'
              aria-expanded={isOpen}
              aria-controls={`accordion-body-${item.id}`}
              id={`accordion-header-${item.id}`}
              onClick={() => toggle(item.id)}
            >
              {item.icon && (
                <IconBox
                  aria-hidden='true'
                  $iconColor={item.iconColor ?? iconColor ?? DEFAULT_ICON_COLOR}
                  $iconBackground={item.iconBackground ?? iconBackground}
                  $borderColor={itemBorderColor}
                >
                  {item.icon}
                </IconBox>
              )}
              <Title $titleColor={titleColor}>{item.title}</Title>
              <ChevronWrap aria-hidden='true' $isOpen={isOpen} $chevronColor={titleColor}>
                <ChevronDown size={18} />
              </ChevronWrap>
            </Header>
            {isOpen && (
              <Body
                id={`accordion-body-${item.id}`}
                role='region'
                aria-labelledby={`accordion-header-${item.id}`}
                $bodyColor={bodyColor}
              >
                {item.content}
              </Body>
            )}
          </Item>
        );
      })}
    </Container>
  );
};

Accordion.propTypes = {
  /** Array of accordion items */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** Unique identifier for the item */
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      /** Question / heading text */
      title: PropTypes.node.isRequired,
      /** Answer / expanded content (string or JSX) */
      content: PropTypes.node.isRequired,
      /** Optional icon node rendered in the icon box */
      icon: PropTypes.node,
      /** Color applied to the icon — defaults to black.m700 */
      iconColor: PropTypes.string,
      /** Background color of the icon box for this item — overrides accordion-level iconBackground */
      iconBackground: PropTypes.string,
    })
  ),
  /** When true, multiple items can be open simultaneously */
  allowMultiple: PropTypes.bool,
  /** Background color applied to the expanded item — use a token from the colors palette e.g. blue.m50 */
  activeBackground: PropTypes.string,
  /** Default icon color for all items — overridden per-item via item.iconColor. Defaults to black.m700 */
  iconColor: PropTypes.string,
  /** Default icon box background for all items — overridden per-item via item.iconBackground */
  iconBackground: PropTypes.string,
  /** Background color for resting (closed) items. Defaults to '#fff' — use a palette token e.g. blueGray.m800 for dark mode */
  itemBackground: PropTypes.string,
  /** Border color for all items — use a palette token e.g. blueGray.m600 for dark mode */
  itemBorderColor: PropTypes.string,
  /** Title and chevron text color — use a light palette token e.g. blueGray.m100 for dark mode */
  titleColor: PropTypes.string,
  /** Body content text color — use a muted light token e.g. blueGray.m300 for dark mode */
  bodyColor: PropTypes.string,
};

export default Accordion;
