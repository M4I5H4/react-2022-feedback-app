//bringin in item from the feedback list component
import PropTypes from "prop-types"
//changed the card div to a card component
import Card from "./shared/Card"
//added icon library npm i react-icons
import{ FaTimes} from 'react-icons/fa'
function FeedbackItem({item, handleDelete}) {

    
  return (
    <Card>
    {/* theses are the 'children' passed into the Card styling componet */}
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close"><FaTimes color="purple"/></button>
        <div className="text-display">{item.text}</div> 
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem