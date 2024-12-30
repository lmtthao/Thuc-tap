import React from 'react'
import './Timetable.css'
import { ConfigProvider, Select } from 'antd';

import { Breadcrumb } from 'antd';

const timetableData = {
    morning: [
      { monday: 'Toán', tuesday: 'Vật Lí', wednesday: 'Toán', thursday: 'GDCD', friday: 'Toán', saturday: 'Toán' },
      { monday: 'Ngữ Văn', tuesday: 'Hóa Học', wednesday: 'Toán', thursday: 'Tin Học', friday: 'GDQP', saturday: 'Ngữ Văn' },
      { monday: 'Ngữ Văn', tuesday: 'Lịch Sử', wednesday: 'Ngữ Văn', thursday: 'Lịch Sử', friday: 'Toán', saturday: 'Tin Học' },
      { monday: 'Vật Lí', tuesday: 'Tiếng Anh', wednesday: 'Sinh học', thursday: 'Tiếng Anh', friday: 'Địa Lí', saturday: 'Toán' },
      { monday: 'Tiếng Anh', tuesday: 'Tiếng Anh', wednesday: 'Công nghệ', thursday: 'Tiếng Anh', friday: 'Công Nghệ', saturday: 'Tiếng Anh' },
    ],
    afternoon: [
      { monday: '', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: '' },
      { monday: 'Anh', tuesday: '', wednesday: 'Vật Lí', thursday: '', friday: '', saturday: '' },
      { monday: 'Anh', tuesday: '', wednesday: 'Hóa', thursday: '', friday: '', saturday: '' },
      { monday: 'Toán', tuesday: '', wednesday: '', thursday: '', friday: 'GDQP', saturday: '' },
      { monday: 'Toán', tuesday: '', wednesday: '', thursday: '', friday: 'GDCD', saturday: '' },
    ],
  };

const periods = Array.from({ length: 10 }, (_, i) => `${i + 1}`);

const optionsChoose = [
    {
      value: 'week',
      label: 'Xem theo tuần',
    },
    {
      value: 'day',
      label: 'Xem theo ngày',
    },
  ];

const optionsClass=[
    {
        value:1,
        label:'1A1'
    },
    {
        value:2,
        label:'1A2'
    },
    {
        value:3,
        label:'1A3'
    },
    {
        value:4,
        label:'1A4'
    },
    {
        value:5,
        label:'1A5'
    },
    {
        value:6,
        label:'1A6'
    },
    {
        value:7,
        label:'1A7'
    },
    {
        value:8,
        label:'1A8'
    },
]

const optionsWeeks=[
    {
        value:1,
        label:'Tuần 1 (dd/mm/yyyy - dd/mm/yyyy)'
    },
    {
        value:2,
        label:'Tuần 2 (dd/mm/yyyy - dd/mm/yyyy)'
    },
    {
        value:3,
        label:'Tuần 3 (dd/mm/yyyy - dd/mm/yyyy)'
    },
    {
        value:4,
        label:'Tuần 4 (dd/mm/yyyy - dd/mm/yyyy)'
    },
    {
        value:5,
        label:'Tuần 5 (dd/mm/yyyy - dd/mm/yyyy)'
    },
    {
        value:6,
        label:'Tuần 6 (dd/mm/yyyy - dd/mm/yyyy)'
    },
    {
        value:7,
        label:'Tuần 7 (dd/mm/yyyy - dd/mm/yyyy)'
    },
    {
        value:8,
        label:'Tuần 8 (dd/mm/yyyy - dd/mm/yyyy)'
    },
]

const renderSchedule = (timeOfDay) => {
    return timetableData[timeOfDay].map((row, index) => (
        <>
            <div className="box2">{periods[index]}</div>
            <div className="box3">{row.monday || ''}</div>
            <div className="box4">{row.tuesday || ''}</div>
            <div className="box5">{row.wednesday || ''}</div>
            <div className="box6">{row.thursday || ''}</div>
            <div className="box7">{row.friday || ''}</div>
            <div className="box8">{row.saturday || ''}</div>
        </>
    ));
};

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
            <Breadcrumb
                separator=">"
                items={[
                {
                    title: 'Trang chủ',
                },
                {
                    title: 'Thời khóa biểu',
                    href: '',
                },
                ]}
            />
            </div>
            <div className="container dropdown-menus">
                <div className="select-menu">
                <Select
                    className='select-btn'
                    placeholder="Chọn lớp"
                    popupMatchSelectWidth={true}
                    options={optionsClass}
                />
                </div>

                <div className="select-menu">
                <Select
                    className='select-btn'
                    placeholder="Chọn"
                    popupMatchSelectWidth={true}
                    options={optionsChoose}
                />
                </div>

                <div className="select-menu">
                <Select
                    className='select-btn'
                    placeholder="Chọn tuần"
                    popupMatchSelectWidth={true}
                    options={optionsWeeks}
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
                    {renderSchedule('morning')}
                </div>   
                <div className="wrapper wrapper-2 wrapper-afternoon" id="wrapper-afternoon">
                    <div className="box1">Chiều</div>
                    {renderSchedule('afternoon')}
                </div> 
                
            </div>
        </div>

    </ConfigProvider>
  )
}

export default Timetable
