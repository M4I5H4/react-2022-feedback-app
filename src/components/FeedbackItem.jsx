//bringin in item from the feedback list component
import PropTypes from "prop-types"
//changed the card div to a card component
import Card from "./shared/Card"
function FeedbackItem({item}) {
    
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div> 
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem