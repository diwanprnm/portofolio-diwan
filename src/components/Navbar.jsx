import { useState } from 'react';
import '../Styles/Navbar.css'
import Button from 'react-bootstrap/Button';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Navbar() {
    const onButtonClick = () => {
        const pdfUrl = "public/CV_Diwan.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CV_DiwanPurnama.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const [statusTampil, setStatusTampil] = useState('')

    function tampilMenu(){
        if(statusTampil==''){
            setStatusTampil('tampil')
        }else{
            setStatusTampil('')
        }
    }
  return (
    <nav>
        <div className="wrapper">
            <div className="logo">
                <a href="">Portofolio</a>
            </div>
            <button onClick={tampilMenu}>
                {
                    statusTampil == '' ? ( <FaBars />) : (<IoMdClose />)
                }
            </button>
            <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href=""><Button size="sm" variant="outline-light" onClick={onButtonClick}>RESUME</Button></a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
