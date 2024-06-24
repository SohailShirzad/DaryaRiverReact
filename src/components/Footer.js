import '../App.css'
import '../index.css'

export default function Footer(){
    return(
        <footer className='footer-container grid black-background'>
            <a className='footer-a-logo' href='#'><object className='footerSVG' data="./images/footer-logo.svg" alt="logo"></object></a>
            <div id="footer-left-column">
                <nav className='footer-nav'>
                    <ul>
                        <li>Kabul, Afghanistan</li>
                        <li>Tel: <a href='tel:+93784640860'>+93784640860</a></li>
                        <li>Email: <a href='mailto:info@daryariver.com'>info@daryariver.com</a></li>
                    </ul>
                </nav>
               
            </div>
            
            <div id="footer-middle-column">
                <nav className='footer-nav'>
                    <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div id="footer-right-column">
                <nav className='footer-nav'>
                    <ul>
                        <li><a href="#services">Our Services</a></li>
                        {/* <li><a href="#contact">Projects</a></li> */}
                    </ul>
                </nav>
            
            </div>
        </footer>
    )
}