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
import Hinh1 from '../Assets/NewsCategory512.138da1c42ed48a075246.png';
import Hinh2 from '../Assets/b4a716b0-fdf8-11ee-8877-619ed2d60aa8.jpeg';
import New from '../Assets/logo-new.png';
import Old from '../Assets/logo-old.png';
import TD from '../Assets/daef6f00-fdfa-11ee-bf5a-ad4072e9b6db.jpg'
import Food from '../Assets/food.jpg'
import Lich from '../Assets/lich-nghi-he.png'
import Tiem from '../Assets/list-tiem.jpg'
import Tech from '../Assets/tech.jpg'
import News from '../Assets/new.jpeg'




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
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={3} spaceBetween={20} loop={true}>
          <SwiperSlide>
            <Card className='card-slide'
              hoverable
              style={{
                width: 'auto',
              }}
              cover={<img alt="example" src={TruongLQD} />}
            >
              <Meta title="Tập huấn chương trình “Xây dựng và lưu trữ học liệu số E-Learning” tại trường THPT Lê Quý Đôn TP.HCM"/>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className='card-slide'
              hoverable
              style={{
                width: 'auto',
              }}
              cover={<img alt="example" src={ChuyenDoi} />}
            >
              <Meta title="Lãnh đạo ủy ban nhân dân Thành Phố Hồ Chí Minh tham quan Bách Khoa Tech"/>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className='card-slide'
              hoverable
              style={{
                width: 'auto',
              }}
              cover={<img alt="example" src={Hinh1} />}
            >
              <Meta title="Hơn 1.200 giáo viên, cán bộ quản lý tập huấn ứng dụng AI vào dạy học"/>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className='card-slide'
              hoverable
              style={{
                width: 'auto',
              }}
              cover={<img alt="example" src={Hinh2} />}
            >
              <Meta title="Tập đoàn Khoa học Công nghệ Bách Khoa tham gia chuyển đổi số tại TP HCM"/>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='swiper-new-school'>
        <div className='header-new-content'>
          <div className='title'>Bản tin trường</div>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={3} spaceBetween={20} loop={true}>
          <SwiperSlide>
            <Card className='card-slide-school'
              hoverable
              style={{
                width: 'auto',
              }}
              cover={<img alt="example" src={New} />}
            >
              <Meta title="Logo BKT Edu (no background)" description="????????"/>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card className='card-slide-school'
              hoverable
              style={{
                width: 'auto',
              }}
              cover={<img alt="example" src={Tiem} />}
            >
              <Meta title="Danh sách điểm tiêm vacxin Sởi _ Rubella" description="Chiến dịch tiêm vắc xin sởi vẫn đang tiếp tục diễn ra với mục tiêu bảo vệ sức khỏe cộng đồng và ngăn ngừa sự bùng phát dịch bệnh."/>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card className='card-slide-school'
              hoverable
              style={{
                width: 'auto',
              }}
              cover={<img alt="example" src={Old} />}
            >
              <Meta title="Logo BKT (no background)" description="????????"/>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card className='card-slide-school'
              hoverable
              style={{
                width: 'auto',
              }}
              cover={<img alt="example" src={TD} />}
            >
              <Meta title="Bách Khoa tập huấn chương trình chuyển đổi số trong dạy, học, kiểm tra đánh giá và xây dựng học liệu số e-Learning cho trường THPT chuyên Lê Hồng Phong TPHCM" description="Bách Khoa tập huấn chương trình chuyển đổi số trong dạy, học, kiểm tra đánh giá và xây dựng học liệu số e-Learning cho trường THPT chuyên Lê Hồng Phong TPHCM"/>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card className='card-slide-school'
              hoverable
              style={{
                width: 'auto',
              }}
              cover={<img alt="example" src={Lich} />}
            >
              <Meta title="Lịch nghỉ hè Năm học 2023 - 2024" description="Năm học 2023 - 2024 đã kết thúc và một mùa hè lại đến, các em Học sinh và Giáo viên trường Bách Khoa đã học tập và làm việc rất năng suất trong năm học vừa rồi. Mùa hè năm nay sẽ bắt đầu từ 01/6/2024 đến hết 31/8/2024. Kế hoạch nghỉ mát của trường sẽ được triển khai 3 ngày 2 đêm ở Thành Phố Ngàn Hoa (Đà Lạt)."/>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card className='card-slide-school'
              hoverable
              style={{
                width: 'auto',
              }}
              cover={<img alt="example" src={Tech} />}
            >
              <Meta title="CÔNG NGHỆ AI" description="Công nghệ AI (Artificial Intelligence) hiện đang là công nghệ được quan tâm phát triển và ứng dụng bậc nhất hiện nay, được ứng dụng trong nhiều lĩnh vực như nhận dạng khuôn mặt, xử lý giọng nói, kỹ thuật ước tính đám đông … đến các hệ thống an ninh, bảo mật, hay hệ thống pháp luật, chính phủ."/>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card className='card-slide-school'
              hoverable
              style={{
                width: 'auto',
              }}
              cover={<img alt="example" src={Food} />}
            >
              <Meta title="Chương trình ẩm thực dân tộc" description="Kết hợp với các điệu múa dân tộc của nhiều dân tộc khác nhau

"/>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card className='card-slide-school'
              hoverable
              style={{
                width: 'auto',
              }}
              cover={<img alt="example" src={News} />}
            >
              <Meta title="Tin tức" description="????????"/>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    </div>
  )
}

export default Content
