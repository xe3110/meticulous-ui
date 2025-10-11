import _omitBy from 'lodash-es/omitBy';
import _isFunction from 'lodash-es/isFunction';
import _isEqual from 'react-fast-compare';

const hasEqualProps = (oldProps, newProps) =>
  _isEqual(_omitBy(oldProps, _isFunction), _omitBy(newProps, _isFunction));

export default hasEqualProps;
