import React from 'react'
import "./styles.scss"
import LongBanner from '../module/long_banner/Longbanner'
import {Helmet} from 'react-helmet'
import axios from 'axios'

// const Contact = () => {
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      subject:'',
      message: '',
      sent:false
    }
    this.submitEmail = this.submitEmail.bind(this)
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }
  onSubjectChange(event) {
    this.setState({subject: event.target.value})
  }
  onPhoneChange(event){
    this.setState({phone: event.target.value})
  }
  onMsgChange(event) {
    this.setState({message: event.target.value})
  }
  submitEmail(e){
    e.preventDefault();
    
    let data = {
      name:this.state.name,
      email:this.state.email,
      phone:this.state.phone,
      subject:this.state.subject,
      message:this.state.message
    }

    axios.post("/api/emailer/send-mail",data )
    .then(res=>{
      window.alert('message sent')
     this.setState(
      {
        name: '',
        email: '',
        phone: '',
        subject:'',
        message: '',
        sent:false
      }
     )
    }).catch(()=>{
      console.log('message not sent');
      window.alert("error error error")

    })

    
    // axios({
    //   method: "POST", 
    //   url:"/api/emailer/send-mail", 
    //   data:  this.state
    // }).then((response)=>{
    //   if (response.data.status === 'success'){
    //     alert("Message Sent."); 
    //       this.resetForm()
    //   }else if(response.data.status === 'fail'){
    //     alert("Message failed to send.")
    //   }
    // })
  }


  render(){
  return (
    <div className='contact-wrapper'>
      <Helmet>
        <title>Apex-Contact</title>
        <meta name="description" content="With a single phone call, virtually all your maintenance needs can be handled with a professional approach and personalized service."/>
        <meta name="keywords"  content=""/>
      </Helmet>
      <LongBanner type='type4' backgroundImageUrl="/img/bottomLogo.svg" displayButton={false}/>
      <div className="contact-cntt-cnt">
        <div className='contct-cnnt-hdr'>
          <h2>Customer Services</h2>
          <span>We'll get back to you within 1 business day from your inquiry.<br />
          In order for us to provide you with the bes fitted service, please describe your<br />
          inquiry as detailed as you can in the details area.
          </span>
        </div>
        <form id='contact-form' onSubmit={this.submitEmail.bind(this)} method="POST">
          <div className='contct-inpt-cnt'>
            <input type='text' className="contct-inpt" placeholder="Name"
            required value={this.state.name} onChange={this.onNameChange.bind(this)}/>
          </div>
          <div className='contct-inpt-cnt'>
            <input type='text' className="contct-inpt" placeholder="Email"
            required value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
          </div>
          <div className='contct-inpt-cnt'>
            <input type='text' className="contct-inpt" placeholder="Phone"
            required value={this.state.phone} onChange={this.onPhoneChange.bind(this)}/>
          </div>
          <div className='contct-inpt-cnt'>
            <input type='text' className="contct-inpt" placeholder="Subject"
            required value={this.state.subject} onChange={this.onSubjectChange.bind(this)}/>
          </div>
          <div className='contct-txtar-cnt'>
            <textarea type='text' className='contct-txtar' placeholder="Details..."
            required value={this.state.message} onChange={this.onMsgChange.bind(this)}></textarea>
          </div>
          <div className="contct-sbmit-btn-cnt">
            <button className='contct-sbmit-btn' type='submit'>Send</button>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

export default Contact