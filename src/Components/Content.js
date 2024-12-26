import React from 'react'
import './Content.css'
import { FaSearch } from 'react-icons/fa';
import { Card, Col, Row } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import TruongLQD from '../Assets/truong-le-quy-don.jpeg';
import ChuyenDoi from '../Assets/chuyen-doi.jpg';




const { Meta } = Card;
const Content = () => {
  return (
    <div className='content'>
    <div className='main-content'>
      <div className='new-content'>

        <div className='header-new-content'>
          <div className='title'>Tin mới</div>
          <div className="find">
            <input type="text" placeholder="Nhập để tìm kiếm" className="search-input" />
            <button className="search-button">
              <FaSearch /> 
            </button>
          </div>
        </div>

        <div className='content-new-content'>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              hoverable
              style={{
                width: 'auto',
              }}
              cover={<img alt="example" src={TruongLQD} />}
            >
              <Meta title="Tập huấn chương trình “Xây dựng và lưu trữ học liệu số E-Learning” tại trường THPT Lê Quý Đôn TP.HCM" description="Trường Trung học Phổ thông Lê Quý Đôn, tọa lạc ở số 110 đường Nguyễn Thị Minh Khai, phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh, là trường trung học đầu tiên và lâu đời nhất của Sài Gòn, được thành lập năm 1874.

" />
            </Card>
          </Col>
          <Col span={8}>
            <Card className='card-mini'
              hoverable
              style={{
                width: 'auto',
              }}
            >
              <Meta title="Hơn 1.200 giáo viên, cán bộ quản lý tập huấn ứng dụng AI vào dạy học" description="Hơn 1.200 giáo viên, cán bộ quản lý của các trường mầm non, tiểu học, THCS trên địa bàn quận 3 (TP HCM) vừa tham gia tập huấn ứng dụng trí tuệ nhân tạo (AI) vào công tác giảng dạy và xây dựng học liệu số." />
            </Card>

            <Card className='card-mini'
              hoverable
              style={{
                width: 'auto',
                marginTop:7,
              }}
            >
              <Meta title="Tập đoàn Khoa học Công nghệ Bách Khoa tham gia chuyển đổi số tại TP HCM" description="(TPO) - Việc ứng dụng công nghệ thông tin trong giáo dục được xác định là nhiệm vụ trọng tâm nhằm đổi mới phương pháp giảng dạy, học tập và quản lý, góp phần nâng cao chất lượng các hoạt động giáo dục" />
            </Card>

          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{
                width: 'auto',
              }}
              cover={<img alt="example" src={ChuyenDoi} />}
            >
              <Meta title="Lãnh đạo ủy ban nhân dân Thành Phố Hồ Chí Minh tham quan Bách Khoa Tech" description="Tech4Life là sự kiện chào mừng ngày Chuyển đổi số Quốc gia 2023. Đây là sự kiện thường niên, quy mô quốc gia và quốc tế, do Sở Thông tin Truyền thông Tp. Hồ Chí Minh và Hiệp hội Phần mềm và Dịch vụ CNTT Việt Nam (VINASA) tổ chức thường niên bắt đầu từ năm 2022.

" />
            </Card>
          </Col>
        </Row>
        </div>

      </div>

      <div className='swiper-new'>
        <div className='header-new-content'>
          <div className='title'>Tin tức chung</div>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>

      <div className='swiper-new-school'>
        <div className='header-new-content'>
          <div className='title'>Bản tin trường</div>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
    </div>
  )
}

export default Content
