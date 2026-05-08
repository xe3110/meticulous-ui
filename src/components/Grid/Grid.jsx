import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledGrid = styled.div`
  display: grid;

  ${({ $columns }) =>
    $columns !== undefined &&
    css`
      grid-template-columns: ${typeof $columns === 'number'
        ? `repeat(${$columns}, 1fr)`
        : $columns};
    `}

  ${({ $rows }) =>
    $rows !== undefined &&
    css`
      grid-template-rows: ${typeof $rows === 'number' ? `repeat(${$rows}, 1fr)` : $rows};
    `}

  ${({ $areas }) =>
    $areas &&
    css`
      grid-template-areas: ${$areas.map((row) => `"${row}"`).join(' ')};
    `}

  ${({ $gap }) =>
    $gap !== undefined &&
    css`
      gap: ${$gap};
    `}
  ${({ $columnGap }) =>
    $columnGap !== undefined &&
    css`
      column-gap: ${$columnGap};
    `}
  ${({ $rowGap }) =>
    $rowGap !== undefined &&
    css`
      row-gap: ${$rowGap};
    `}

  ${({ $autoFlow }) =>
    $autoFlow &&
    css`
      grid-auto-flow: ${$autoFlow};
    `}
  ${({ $autoColumns }) =>
    $autoColumns &&
    css`
      grid-auto-columns: ${$autoColumns};
    `}
  ${({ $autoRows }) =>
    $autoRows &&
    css`
      grid-auto-rows: ${$autoRows};
    `}

  ${({ $minChildWidth }) =>
    $minChildWidth &&
    css`
      grid-template-columns: repeat(auto-fit, minmax(${$minChildWidth}, 1fr));
    `}

  ${({ $alignItems }) =>
    $alignItems &&
    css`
      align-items: ${$alignItems};
    `}
  ${({ $justifyItems }) =>
    $justifyItems &&
    css`
      justify-items: ${$justifyItems};
    `}
  ${({ $alignContent }) =>
    $alignContent &&
    css`
      align-content: ${$alignContent};
    `}
  ${({ $justifyContent }) =>
    $justifyContent &&
    css`
      justify-content: ${$justifyContent};
    `}

  ${({ $inline }) =>
    $inline &&
    css`
      display: inline-grid;
    `}
`;

const StyledGridItem = styled.div`
  ${({ $column }) =>
    $column &&
    css`
      grid-column: ${$column};
    `}
  ${({ $columnStart }) =>
    $columnStart !== undefined &&
    css`
      grid-column-start: ${$columnStart};
    `}
  ${({ $columnEnd }) =>
    $columnEnd !== undefined &&
    css`
      grid-column-end: ${$columnEnd};
    `}
  ${({ $columnSpan }) =>
    $columnSpan !== undefined &&
    css`
      grid-column: span ${$columnSpan} / span ${$columnSpan};
    `}

  ${({ $row }) =>
    $row &&
    css`
      grid-row: ${$row};
    `}
  ${({ $rowStart }) =>
    $rowStart !== undefined &&
    css`
      grid-row-start: ${$rowStart};
    `}
  ${({ $rowEnd }) =>
    $rowEnd !== undefined &&
    css`
      grid-row-end: ${$rowEnd};
    `}
  ${({ $rowSpan }) =>
    $rowSpan !== undefined &&
    css`
      grid-row: span ${$rowSpan} / span ${$rowSpan};
    `}

  ${({ $area }) =>
    $area &&
    css`
      grid-area: ${$area};
    `}

  ${({ $alignSelf }) =>
    $alignSelf &&
    css`
      align-self: ${$alignSelf};
    `}
  ${({ $justifySelf }) =>
    $justifySelf &&
    css`
      justify-self: ${$justifySelf};
    `}
  ${({ $placeSelf }) =>
    $placeSelf &&
    css`
      place-self: ${$placeSelf};
    `}
`;

export const GridItem = ({
  as,
  column,
  columnStart,
  columnEnd,
  columnSpan,
  row,
  rowStart,
  rowEnd,
  rowSpan,
  area,
  alignSelf,
  justifySelf,
  placeSelf,
  children,
  className,
  style,
  ...rest
}) => (
  <StyledGridItem
    as={as}
    $column={column}
    $columnStart={columnStart}
    $columnEnd={columnEnd}
    $columnSpan={columnSpan}
    $row={row}
    $rowStart={rowStart}
    $rowEnd={rowEnd}
    $rowSpan={rowSpan}
    $area={area}
    $alignSelf={alignSelf}
    $justifySelf={justifySelf}
    $placeSelf={placeSelf}
    className={className}
    style={style}
    {...rest}
  >
    {children}
  </StyledGridItem>
);

GridItem.propTypes = {
  as: PropTypes.elementType,
  column: PropTypes.string,
  columnStart: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  columnEnd: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  columnSpan: PropTypes.number,
  row: PropTypes.string,
  rowStart: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rowEnd: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rowSpan: PropTypes.number,
  area: PropTypes.string,
  alignSelf: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'stretch', 'baseline']),
  justifySelf: PropTypes.oneOf(['auto', 'start', 'end', 'center', 'stretch']),
  placeSelf: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

const Grid = ({
  as,
  columns,
  rows,
  areas,
  gap,
  columnGap,
  rowGap,
  autoFlow,
  autoColumns,
  autoRows,
  minChildWidth,
  alignItems,
  justifyItems,
  alignContent,
  justifyContent,
  inline,
  children,
  className,
  style,
  role,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...rest
}) => (
  <StyledGrid
    as={as}
    $columns={columns}
    $rows={rows}
    $areas={areas}
    $gap={gap}
    $columnGap={columnGap}
    $rowGap={rowGap}
    $autoFlow={autoFlow}
    $autoColumns={autoColumns}
    $autoRows={autoRows}
    $minChildWidth={minChildWidth}
    $alignItems={alignItems}
    $justifyItems={justifyItems}
    $alignContent={alignContent}
    $justifyContent={justifyContent}
    $inline={inline}
    className={className}
    style={style}
    role={role}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledBy}
    {...rest}
  >
    {children}
  </StyledGrid>
);

Grid.propTypes = {
  /** Semantic HTML element to render as */
  as: PropTypes.elementType,
  /** Number of equal columns or a CSS grid-template-columns value */
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Number of equal rows or a CSS grid-template-rows value */
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Grid template areas — each string is one row, e.g. ['header header', 'sidebar main'] */
  areas: PropTypes.arrayOf(PropTypes.string),
  /** Gap between all cells (CSS value, e.g. '1rem') */
  gap: PropTypes.string,
  /** Column gap (overrides gap for columns) */
  columnGap: PropTypes.string,
  /** Row gap (overrides gap for rows) */
  rowGap: PropTypes.string,
  /** grid-auto-flow value */
  autoFlow: PropTypes.oneOf(['row', 'column', 'dense', 'row dense', 'column dense']),
  /** grid-auto-columns value */
  autoColumns: PropTypes.string,
  /** grid-auto-rows value */
  autoRows: PropTypes.string,
  /** Responsive auto-fit columns — sets minimum child width and fills available space */
  minChildWidth: PropTypes.string,
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'baseline']),
  justifyItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
  alignContent: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'stretch',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  justifyContent: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'stretch',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  /** Renders as inline-grid instead of grid */
  inline: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  role: PropTypes.string,
  'aria-label': PropTypes.string,
  'aria-labelledby': PropTypes.string,
};

export default Grid;
