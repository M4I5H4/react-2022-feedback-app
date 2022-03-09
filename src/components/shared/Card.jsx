import PropTypes from "prop-types"
// children is passed in from feedbackitem component

//this is astyle componet
function Card({ children, reverse }) {
//this is a conditional class
  //   return (
  //     <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  //   )

  return (
//this is condidtional styling
    <div
      className='card'
      style={{
        backgroundColor: reverse
          ? 'rgba(0,0,0,0.4)'
          : '#fff',
        color: reverse 
          ? '#fff' 
          : '#000',
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}
export default Card;
