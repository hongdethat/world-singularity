import React, { useState } from "react";
import Logoimg  from '../../../../../Image/logo-2.png';
import { Logo_main } from '../../../../../Component';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu
} from "react-pro-sidebar";

import { Link, Route } from 'react-router-dom';
import Function from "../Function/Function";
import useModal from '../../../../Modal/useModal';
import '../Function/Function.css';

import { FaList, FaRegHeart, FaHeart, FaUsersCog } from "react-icons/fa";
import { FiLogOut, FiArrowLeftCircle, FiArrowRightCircle, FiMail, FiExternalLink } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog, BiCommentDetail } from "react-icons/bi";
import { AiOutlineDashboard, AiOutlinePlus, AiOutlineBarChart } from 'react-icons/ai';
import { BsFillFileEarmarkPostFill, BsPen } from 'react-icons/bs';


import "react-pro-sidebar/dist/css/styles.css";
import "./Dashboard.css";

const Dashboard = () => {
  
  const [menuCollapse, setMenuCollapse] = useState(true)

  const menuIconClick = () => {

    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

const {isShowing, toggle} = useModal();
  
  return (
    <>
      <title> Dashboard | WORLD SINGULARITY </title>

      <div className="Dashboard_icon_flexbar">
        <span className="Dashboard_icon_span_height">
          <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader className="Dashboard_icon">
              <div className="closemenu" onClick={menuIconClick}>
                {menuCollapse ? (
                  <FiArrowRightCircle className="Header_admin_img_ixon"/>
                ) : (
                  <FiArrowLeftCircle className="Header_admin_img_ixon5"/>
                )}
              </div>
            </SidebarHeader>

              {menuCollapse ? (
              null
              ) : (
              <SidebarHeader>
                <Link to="/Administrator/News/Post" className="Dashboard_icon_span_spa">
                  <button className="Dashboard_icon_span_btn"><AiOutlinePlus/> B??i ????ng m???i</button>
                </Link>
              </SidebarHeader>
              )}

            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem active={false} icon={<AiOutlineDashboard />}>
                  <Link to="/Administrator/Dashboard">
                    <span className="Dashboard_icon_span">B???ng ??i???u khi???n</span>
                  </Link>
                </MenuItem>
                <SubMenu title="B??i ????ng" active={false} icon={<BsFillFileEarmarkPostFill />}>
                  <MenuItem>Trang ch???</MenuItem>
                    <MenuItem onClick={toggle}>Trang tin t???c</MenuItem>
                     <Function
                      isShowing={isShowing}
                      hide={toggle}
                    />
                  <MenuItem>Trang ng?????i d??ng</MenuItem>
                </SubMenu>
                <MenuItem active={false} icon={<AiOutlineBarChart />}>Th???ng k??</MenuItem>
                <MenuItem active={false} icon={<BiCommentDetail />}>B??nh lu???n</MenuItem>
                <SubMenu title="Qu???n l?? ng?????i d??ng" active={false} icon={<FaUsersCog />}>
                  <MenuItem>T??i kho???n ng?????i d??ng</MenuItem>
                  <MenuItem>
                    <Link to="/Administrator/Account/Management-account-admin">
                      T??i kho???n Admin
                    </Link>
                  </MenuItem>
                </SubMenu>
                <MenuItem active={false} icon={<BsPen />}>????ng k?? m???i</MenuItem>
                <MenuItem active={false} icon={<FiMail />}>Qu???n l?? th??</MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem active={false} icon={<FiExternalLink />}><a href="/" target="_blank" className="Dashboard_icon_span">??i ?????n trang ch???</a></MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </span>
      </div>
    </>
  );
};

export default Dashboard;
