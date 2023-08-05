import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="container">
            <div className="contacts">
                <p><strong>Contact us:</strong></p>
                <p><strong>Phone: </strong>123456789</p>
                <p><strong>Address: </strong>str. Something 123</p>
            </div>
            <div className="terms">
                <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </div>
            <div className="privacy">
                <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
        </div>
    )
}