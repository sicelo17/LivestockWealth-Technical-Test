import './footer.css'
import '../../assets/bootstrap-icons.css'
import {useState} from "react";
import subscribe from "../../services.js";
import axios from "axios"

const Footer = () => {
    const [email, setEmail] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        document.querySelector('#spinner').classList.add('spinner');
        const data = new URLSearchParams();
        data.append('email', email);
      
        try {
          await axios.post('https://subscriber-server-service.onrender.com/', data, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          });
          alert('Thank you for subscribing!');
          setEmail('');
          document.querySelector('#spinner').classList.remove('spinner');
        } catch (e) {
          alert('An error occurred. Please be patient and try again');
          document.querySelector('#spinner').classList.remove('spinner');
        }
      };
      
    return (
        <>
            <div>
                <hr/>
                <div className='footer-content'>
                    <div className='footer-links'>
                        <label id='termsAndConditions'>
                            <input type='checkbox'/> I agree to the website’s terms and conditions
                        </label>
                        <ul>
                            <li>
                                <a>CONTACT</a>
                            </li>
                            <li>
                                <a>TERMS OF SERVICE</a>
                            </li>
                            <li>
                                <a>SHIPPING AND RETURNS</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-newsletter-form'>
                        <form
                            // encType='multipart/form-data'
                            id='subscriptionForm'
                            method='post'
                            onSubmit={handleSubmit}>
                            <input
                                name='email'
                                type='email'
                                id='email'
                                placeholder='Give an email, get the newsletter.'
                                onChange={e => setEmail(e.target.value)}
                            />
                            <button type='submit'>&rarr;</button>
                        </form>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <div className='footer-copyright-text'>
                        <p>
                            &copy; 2021 Shelly. <a>Terms of use</a> and <a>privacy policy</a>.
                        </p>
                    </div>
                    <div className='footer-socials'>
                        <p className='footer-socials-text'>Follow us &nbsp; _____</p>
                        <ul>
                            <li>
                                <a href='https://www.linkedin.com/company/livestock-wealth/'>
                                    <span className='bi bi-linkedin'></span>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.facebook.com/livestockwealthZA/'>
                                    <span className='bi bi-facebook'></span>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/livestock_wealth/'>
                                    <span className='bi bi-instagram'></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/livestockwealth">
                                    <span className='bi bi-twitter'></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='spinner-div'>
                <span id='spinner'></span>
            </div>
        </>
    )
}

export default Footer