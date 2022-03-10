import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm () {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    // allow text to be typed in the box and held - connect with onChange in the input
    const handleTextChange = (e) =>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Text must be as least 10 characters')
        }else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            {/* todo = add rating select */}
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="write a review" value={text}/>
                <Button type="submit" isDisabled={btnDisabled} version="primary">Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>

  )
}

export default FeedbackForm