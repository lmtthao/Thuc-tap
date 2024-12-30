import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Logo from "../Assets/Frame 10.png";
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { AiOutlineDown } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const Navbar = () => {
    const [openMenu,setOpenMenu]=useState(false)
    const menuOptions=[
        {
            text:"Trang chủ",
            url: "/main"
        },
        {
            text:"Thời khóa biểu",
            url: "/tkb"
        },
        {
            text:"Danh sách lớp",
            url: "/blank"
        },
        {
            text:"Thông báo",
            url: "/blank2"
        },
        {
            text:"Thống kê",
            url: "/blank3"
        },
        {
            text:"Hỗ trợ",
            url: "/blank4"
        }
    ];

    const items = [
        {
          label: (
            <a rel="noopener noreferrer" href="/">
                Đăng xuất
            </a>),
          key: '3',
        },
    ];
    
    return <nav>
        <div className='nav-logo-container'>
            <img src={Logo} alt=''></img>
        </div>
        
        <div className='navbar-links-container'>
            {menuOptions.map((item) => (
                <NavLink
                    key={item.url} 
                    to={item.url} 
                    className={({ isActive }) => isActive ? "active-link" : ""}
                    >
                    {item.text}
                </NavLink>
            ))}
            <button className='btn-year'>
                <span className='year-info'>
                    Niên khóa<br />
                <span className='year-bold'>2024 - 2025</span>
                </span>
                <FaAngleDown className='icon-down' />
            </button>

            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
                >
                <button className='btn-name'>
                    <FaUserCircle className='icon-left' />
                    <span className='user-info'>
                        <a onClick={(e) => e.preventDefault()}>
                            <span className='user-name'>Lương Mai Thanh Thảo</span><br />
                            <span className='user-role'>Admin trường</span>
                        </a>
                    </span>
                    <FaAngleDown className='icon-right' />
                </button>
            </Dropdown>

        </div>

        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={()=>setOpenMenu(true)}></HiOutlineBars3>
        </div>

        <Drawer open={openMenu} onClose={()=>setOpenMenu(false)} anchor="right">
            <Box 
            sx={{width:250}}
            role="presentation"
            onClick={()=>setOpenMenu(false)}
            onKeyDown={()=>setOpenMenu(false)}
            >
                <List>
                    {menuOptions.map((item)=>(
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}></ListItemText>
                            </ListItemButton>

                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    </nav>
}

export default Navbar
