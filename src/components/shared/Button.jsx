//children - wrapping the componet around whatever text will be used for the button
//version - primary or secondary classes
//type - if it is a submit button or regular button
//isDisabled - if set to true the button will be disabled
import PropTypes from 'prop-types'

function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>{children}</button>
  )
}

Button.defalutProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button