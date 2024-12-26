import React, { useState } from 'react';
import './Navbar.css';
import Logo from "../Assets/Frame 10.png";
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { AiOutlineDown } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


const Navbar = () => {
    const [openMenu,setOpenMenu]=useState(false)
    const menuOptions=[
        {
            text:"Trang chủ",
        },
        {
            text:"Thời khóa biểu",
        },
        {
            text:"SLL điện tử",
        },
        {
            text:"Thông báo",
        },
        {
            text:"Thống kê",
        },
        {
            text:"Hỗ trợ",
        }
    ];
    return <nav>
        <div className='nav-logo-container'>
            <img src={Logo} alt=''></img>
        </div>
        
        <div className='navbar-links-container'>
            <a href=''>Trang chủ</a>
            <a href=''>Thời khóa biểu</a>
            <a href=''>SLL điện tử</a>
            <a href=''>Thông báo</a>
            <a href=''>Thống kê</a>
            <a href=''>Hỗ trợ</a>
            <button className='btn-year'>
                <span className='year-info'>
                    Niên khóa<br />
                <span className='year-bold'>2024 - 2025</span>
                </span>
                <FaAngleDown className='icon-down' />
            </button>

            <button className='btn-name'>
                <FaUserCircle className='icon-left' />
                <span className='user-info'>
                    <span className='user-name'>Lương Mai Thanh Thảo</span><br />
                    <span className='user-role'>Admin trường</span>
                </span>
                <FaAngleDown className='icon-right' />
            </button>

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
