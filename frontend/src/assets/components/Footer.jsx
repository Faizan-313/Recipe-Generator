import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; 2025 <strong> Peer Faizan</strong>. All rights reserved.</p>
                <ul className="socials">
                    <li>
                        <a href="https://www.linkedin.com/in/faizan-syed-4370152b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <img src="src/assets/images/linkedin.png" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Faizan-313/Recipe-Generator">
                            <img id="github-image" src="src/assets/images/github.png" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
