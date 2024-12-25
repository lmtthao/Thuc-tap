import React from 'react';
import './Footer.css';
import Logo from '../Assets/logo-khong-nen.jpg';
import EmailIcon from '../Assets/email.svg';
import PhoneIcon from '../Assets/phone.svg';
import SendIcon from '../Assets/send.svg';
import QRCode from '../Assets/qr.png';
import YouTubeIcon from "../Assets/yt.svg";
import TikTokIcon from "../Assets/tiktok.svg";
import FacebookIcon from "../Assets/fb.svg";

const Footer = () => {
    return (
    <div className='footer'>
        <div className="footer-section">
            <div className="container text-center text-md-left">
                <div className="row text-md-left">
                    <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-2">
                        <img src={Logo} alt="Company Logo" />
                        <p className="text">
                            Hãy để lại cho tôi thông tin liên hệ, chúng tôi sẽ phản hồi trong thời gian sớm nhất!
                        </p>
                        <div className="contact-text">
                            <input
                            type="email"
                            aria-describedby="emailHelp"
                            placeholder="Nhập email / số điện thoại của bạn"
                            />
                            <button>
                            <img src={SendIcon} alt="Send Icon" />
                            </button>
                        </div>
                    </div>
    
                    {/* Technical Support */}
                    <div className="col-md-2 col-lg-3 col-xl-2 mx-auto mt-3">
                        <h6 className="text-white font-weight-bold">Hỗ trợ kỹ thuật</h6>
                        <p style={{ fontSize: "12px", marginTop: "20px", color: "rgba(255, 224, 206, 1)" }}>
                            <img src={EmailIcon} alt="Email Icon" /> Email
                        </p>
                        <p className="text-white" style={{ fontSize: "14px", marginTop: "-18px" }}>
                            admin@bachkhoa.tech
                        </p>
                        <p style={{ fontSize: "12px", marginTop: "10px", color: "rgba(255, 224, 206, 1)" }}>
                            <img src={PhoneIcon} alt="Phone Icon" /> Điện thoại
                        </p>
                        <p className="text-white" style={{ fontSize: "14px", marginTop: "-18px" }}>
                            090 303 0246
                        </p>
                    </div>
        
                    {/* Partnership Contact */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-white font-weight-bold">Liên hệ hợp tác</h6>
                        <p style={{ fontSize: "12px", marginTop: "20px", color: "rgba(255, 224, 206, 1)" }}>
                            <img src={PhoneIcon} alt="Phone Icon" /> Phân phối
                        </p>
                        <p className="text-white" style={{ fontSize: "14px", marginTop: "-18px" }}>
                            0913 365 079
                        </p>
                        <p style={{ fontSize: "12px", marginTop: "10px", color: "rgba(255, 224, 206, 1)" }}>
                            <img src={PhoneIcon} alt="Phone Icon" /> Xây dựng nội dung
                        </p>
                        <p className="text-white" style={{ fontSize: "14px", marginTop: "-18px" }}>
                            0971 413 192
                        </p>
                    </div>
        
                    {/* App Download */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-white font-weight-bold">Tải app</h6>
                        <p style={{ fontSize: "12px", marginTop: "20px", color: "rgba(255, 224, 206, 1)" }}>
                            Tải app trên
                        </p>
                        <p
                            className="text-white"
                            style={{ fontSize: "14px", marginTop: "-18px", fontWeight: 700 }}
                        >
                            App Store
                        </p>
                        <p style={{ fontSize: "12px", marginTop: "25px", color: "rgba(255, 224, 206, 1)" }}>
                            Tải app trên
                        </p>
                        <p
                            className="text-white"
                            style={{ fontSize: "14px", marginTop: "-18px", fontWeight: 700 }}
                        >
                            Google Play
                        </p>
                    </div>
        
                    {/* QR Code */}
                    <div className="col-md-2 col-lg-1 mx-auto mt-4">
                        <img
                            src={QRCode}
                            className="pr-code"
                            alt="QR Code"
                            style={{ marginTop: "40px", width: "72px", height: "72px" }}
                        />
                    </div>
                </div>
            </div>
    
            <hr />
    
            <div className="row align-items-center">
                <div className="col-md-7 col-lg-8">
                    <p style={{ color: "rgba(244, 189, 158, 1)" }}>
                    Copyright ©2024 – Bản quyền thuộc Công Ty Cổ Phần Tập Đoàn Công Nghệ Bách Khoa
                    </p>
                </div>
                <div className="col-md-5 col-lg-4">
                    <div className="text-center text-md-right">
                        <ul className="list-unstyled list-inline">
                            <li
                            className="list-inline-item text-white"
                            style={{ fontSize: "14px", fontWeight: 600 }}
                            >
                            Theo dõi tại
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <img src={YouTubeIcon} alt="YouTube Icon" />
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <img src={TikTokIcon} alt="TikTok Icon" />
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <img src={FacebookIcon} alt="Facebook Icon" />
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Footer;