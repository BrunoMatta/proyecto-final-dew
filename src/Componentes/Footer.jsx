function Footer() {
    return (
      <footer className="footer">
        <div className="footer-left">
          <img src="/images/Logo.png" alt="Diamond Skin Logo" className="footer-logo" />
        </div>
  
        <div className="footer-center">
          <p>&copy; Diamond Skin, all rights reserved</p>
        </div>
  
        <div className="footer-right">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook (2).png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin 1.png" alt="LinkedIn" />
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;