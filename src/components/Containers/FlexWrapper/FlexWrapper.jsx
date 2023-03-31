import PropTypes from 'prop-types';

export const FlexWrapper = ({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  flexWrap,
}) => {
  const wrapperStyles = {
    display: 'flex',
    justifyContent: justifyContent,
    alignItems: alignItems,
    flexDirection: flexDirection,
    flexWrap: flexWrap,
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
