import React from 'react'
import './Timetable.css'
import { Cascader, ConfigProvider, Select } from 'antd';

const onChange = (value) => {
    console.log(value);
  };

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

const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
    },
  ];

const Timetable = () => {
  return (
    <ConfigProvider 
        theme={{
            components: {
                Cascader: {
                    controlItemWidth: '340px'
                }
            }
        }}  
    >
      <div className="tkd">
            <div className="container schedule">
                <p>Thời khóa biểu</p>
                <p className="back">Thời khóa biểu</p>
            </div>
            <div className="container dropdown-menus">
                <div className="select-menu">
                <Select
                    className='select-btn'
                    placeholder="Select a person"
                    popupMatchSelectWidth={true}
                    options={options}
                />
                </div>
            </div>
            <hr className="custom-hr"></hr>
            <div className="container gird-schedule" id="morning-schedule">
                <div className="wrapper">
                    <div className="box1"></div>
                    <div className="box2">Tiết</div>
                    <div className="box3">Thứ 2</div>
                    <div className="box4">Thứ 3</div>
                    <div className="box5">Thứ 4</div>
                    <div className="box6">Thứ 5</div>
                    <div className="box7">Thứ 6</div>
                    <div className="box8">Thứ 7</div>
                </div>
                <div className="wrapper wrapper-2 wrapper-morning" id="wrapper-morning">
                    <div className="box1">Sáng</div>
                </div>   
                <div className="wrapper wrapper-2 wrapper-afternoon" id="wrapper-afternoon">
                    <div className="box1">Chiều</div>
                </div> 
            </div>
        </div>

    </ConfigProvider>
  )
}

export default Timetable
