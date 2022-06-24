import './mailList.css'

const MailList = () => {
  return (
    <div className="mail">
      <div className="mailTitle">Save time, save money!</div>
      <span className="mailDesc">Signup and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList