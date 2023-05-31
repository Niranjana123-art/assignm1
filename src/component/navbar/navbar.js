import React, {useEffect, useState } from "react";
import styles from "./navbar.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { Drawer } from "@mui/material";

// import axiosInstance from "../../auth/authHandler";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { IoCreate } from "react-icons/io5";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useNavigate } from 'react-router-dom'
import { useAccordionButton } from "react-bootstrap";
function Navbar() {

  const [open, setOpen] = useState(false);
  const navigate=useNavigate();
  const [idval,setId] = useState('');
  const [selectedLink, setSelectedLink] = useState('');



  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
     
      <div className={"navbar"}>
        <div className={"navbar__left"}>
          <div
            className={"navbar__menu_container"}
            onClick={() => {
              setOpen(true);
            }}
          >
            <HiMenuAlt2
              className={"navbar__menu"}
              onClick={() => {
                setOpen(true);
              }}
            />
          </div>
         
        </div>
        <div className={"navbar__links"}>
          <div
            
            className={`navbar__link ${selectedLink === 'home' ? 'selected' : ''}`}
            onClick={() => {
              navigate("/");
              setSelectedLink('home');
             
            }  }
          >
            
            Home
          
          
          </div>
          <div
            className={`navbar__link ${selectedLink === 'bookmark' ? 'selected' : ''}`}
           
            onClick={() => {
             navigate("/bookmark");
             setSelectedLink('bookmark');
            }}
          >
            Bookmark
          </div>
          
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div className={"navbar__links"}>
            
          </div>
        </div>
      </div>
      <div>
      <Drawer
        open={open}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          } 
          else if (reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="left"
      >
        <div className={"nav__drawer"}>
          <div className={"navbar__drawer_header"}>
            <div
              className={"navbar__logo"}
              data-aos="fade-right"
              data-aos-duration="600"
            >
              BookQuotes
            </div>
            <div className="navbar__items_mob"
              data-aos="fade-right"
              data-aos-duration="600"
            >
             
              <div className="navbar__link"
               
                onClick={() => {
                 navigate("/");
                  handleDrawerClose();
                }}
              >
                Home
              </div>
              <div className="navbar__link"
                onClick={() => {
                 navigate("/bookmark");
                  handleDrawerClose();
                }}
              >
                Bookmark
              </div>
            </div>
          </div>
        </div>
      
      </Drawer>
      </div>
    </>
  );
}

export default Navbar
