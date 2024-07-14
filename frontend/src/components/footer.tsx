import { faXTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const navigate = useNavigate();

  // State for email input and validation
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple email validation
    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      setSuccessMessage('');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000); // Clear error message after 3 seconds
      return;
    }

    // Reset error message and simulate subscription success
    setErrorMessage('');
    setSuccessMessage(`Subscribed successfully with ${email}`);
    setEmail(''); // Clear input after successful subscription
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000); // Clear success message after 3 seconds
  };

  // Function to validate email format
  const isValidEmail = (email: string): boolean => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const contactForm = () => {
    navigate("/contactforproject");
  };

  return (
    <>
      {/* Footer for medium and large screens */}
      <div className="backdrop-blur-3xl hidden md:block rounded-xl w-screen">
        <footer className="footer w-full p-10 bg-gray-900 bg-opacity-40 text-base-content flex flex-wrap justify-between">
          <nav className="mb-4 md:mb-0">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Web Development</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Editing</a>
          </nav>
          <nav className="mb-4 md:mb-0">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About me</a>
            <div>
              <a className="link link-hover" onClick={contactForm}>Contact for project</a>
            </div>
            <a className="link link-hover">Hire me</a>
          </nav>
          <nav className="mb-4 md:mb-0">
            <h6 className="footer-title">Socials</h6>
            <a href="https://www.instagram.com/r.sidhantsingh" target="_blank" rel="noopener noreferrer" className="link link-hover">Instagram</a>
            <a href="https://www.linkedin.com/in/sidhant-singh-815a75246/" target="_blank" rel="noopener noreferrer" className="link link-hover">LinkedIn</a>
            <a href="https://x.com/Sidhant_k21?t=3yt4rp6OV52jw-an05xmBQ&s=08" target="_blank" rel="noopener noreferrer" className="link link-hover">X</a>
          </nav>
          <form className="w-full md:w-auto" onSubmit={handleSubscribe}>
            <fieldset className="form-control w-full md:w-80">
              <label className="label">
                <span className="label-text">Enter your email address I will reach you out!</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item w-full md:w-auto"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button type="submit" className="btn btn-primary join-item">Subscribe</button>
              </div>
              {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
              {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
            </fieldset>
          </form>
        </footer>
      </div>

      {/* Footer for small screens */}
      <div className="block md:hidden">
        <footer className="footer footer-center text-base-content rounded p-10">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a onClick={contactForm} className="link link-hover">Contact</a>
            <a className="link link-hover">Hire Me</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a href="https://twitter.com/yourprofile" aria-label="Twitter">
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/yourprofile" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://www.instagram.com/yourprofile" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </nav>
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Remote Desk Developer</p>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;
