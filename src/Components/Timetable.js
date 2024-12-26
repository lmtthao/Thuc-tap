import React from 'react'
import './Timetable.css'

const timetableData = {
    morning: [
        { monday: 'Toán', tuesday: 'Vật Lí', wednesday: 'Toán', thursday: 'GDCD', friday: 'Toán', saturday: 'Toán' },
        { monday: 'Ngữ Văn', tuesday: 'Hóa Học', wednesday: 'Toán', thursday: 'Tin Học', friday: 'GDQP', saturday: 'Ngữ Văn' },
        { monday: 'Ngữ Văn', tuesday: 'Lịch Sử', wednesday: 'Ngữ Văn', thursday: 'Lịch Sử', friday: 'Toán', saturday: 'Tin Học' },
        { monday: 'Vật Lí', tuesday: 'Tiếng Anh', wednesday: 'Sinh học', thursday: 'Tiếng Anh', friday: 'Địa Lí', saturday: 'Toán' },
        { monday: 'Tiếng Anh', tuesday: 'Tiếng Anh', wednesday: 'Công nghệ', thursday: 'Tiếng Anh', friday: 'Công Nghệ', saturday: 'Tiếng Anh' }
    ],
    afternoon: [
        { monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '' },
        { monday: 'Anh', tuesday: '', wednesday: 'Vật Lí', thursday: '', friday: '', saturday: '' },
        { monday: 'Anh', tuesday: '', wednesday: 'Hóa', thursday: '', friday: '', saturday: '' },
        { monday: 'Toán', tuesday: '', wednesday: '', thursday: '', friday: 'GDQP', saturday: '' },
        { monday: 'Toán', tuesday: '', wednesday: '', thursday: '', friday: 'GDCD', saturday: '' }
    ]
};


const Timetable = () => {
  return (
    <div>
      <div class="tkd">
            <div class="container schedule">
                <p>Thời khóa biểu</p>
                <p class="back">Thời khóa biểu</p>
            </div>
            <div class="container dropdown-menus">
                <div class="select-menu">
                    <div class="select-btn">
                        <span class="sBtn-text">Chọn học kì</span>
                        <i class="bx bx-chevron-down"></i>
                    </div>
                    <ul class="options">
                        <li class="option">
                            <span class="option-text">Học kì I (2023 - 2024)</span>
                        </li>
                        <li class="option">
                            <span class="option-text">Học kì II (2023 - 2024)</span>
                        </li>
                    </ul>
                </div>
                <div class="select-menu">
                    <div class="select-btn">
                        <span class="sBtn-text">Xem theo tuần</span>
                        <i class="bx bx-chevron-down"></i>
                    </div>
                    <ul class="options">
                        <li class="option">
                            <span class="option-text">Xem theo tuần</span>
                        </li>
                        <li class="option">
                            <span class="option-text">Xem theo ngày</span>
                        </li>
                    </ul>
                </div>
                <div class="select-menu">
                    <div class="select-btn">
                        <span class="sBtn-text">Chọn tuần</span>
                        <i class="bx bx-chevron-down"></i>
                    </div>
                    <ul class="options">
                        <li class="option">
                            <span class="option-text">???</span>
                        </li>
                        <li class="option">
                            <span class="option-text">???</span>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="custom-hr"></hr>
            <div class="container gird-schedule" id="morning-schedule">
                <div class="wrapper">
                    <div class="box1"></div>
                    <div class="box2">Tiết</div>
                    <div class="box3">Thứ 2</div>
                    <div class="box4">Thứ 3</div>
                    <div class="box5">Thứ 4</div>
                    <div class="box6">Thứ 5</div>
                    <div class="box7">Thứ 6</div>
                    <div class="box8">Thứ 7</div>
                </div>
                <div class="wrapper wrapper-2 wrapper-morning" id="wrapper-morning">
                    <div class="box1">Sáng</div>
                </div>   
                <div class="wrapper wrapper-2 wrapper-afternoon" id="wrapper-afternoon">
                    <div class="box1">Chiều</div>
                </div> 
            </div>
        </div>

    </div>
  )
}

export default Timetable
