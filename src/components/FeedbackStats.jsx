import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
    //calulate reading average
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length
//this fixes the deceimal place to one number, if it is 0 then it won't show
    average = average.toFixed(1).replace(/[.,]0$/,'')
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}
FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}
export default FeedbackStats
