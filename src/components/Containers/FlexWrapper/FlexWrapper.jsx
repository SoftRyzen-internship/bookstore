import PropTypes from 'prop-types';

export const FlexWrapper = ({
  children,
  justifyContent = 'normal',
  alignItems = 'normal',
  flexDirection = 'row',
  flexWrap = 'nowrap',
  flexGrow = 0,
  flexShrink = 1,
}) => {
  const wrapperStyles = {
    display: 'flex',
    justifyContent: justifyContent,
    alignItems: alignItems,
    flexDirection: flexDirection,
    flexWrap: flexWrap,
    flexGrow: flexGrow,
    flexShrink: flexShrink,
  };

  return <div style={wrapperStyles}>{children}</div>;
};

FlexWrapper.propTypes = {
  children: PropTypes.node,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexDirection: PropTypes.string,
  flexWrap: PropTypes.string,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,
};
