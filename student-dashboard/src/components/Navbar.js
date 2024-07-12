import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'; 

const NavbarContainer = styled.nav`
  background-color: blue;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }

  .user-info {
    display: flex;
    align-items: center;
    margin-left: auto; /* Pushes user info to the right */
  }

  .profile-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .dropdown {
    position: relative;

    span {
      cursor: pointer;
      padding: 5px;
      border-radius: 3px;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

    .dropdown-content {
      position: absolute;
      top: 100%;
      right: 0; /* Align dropdown to the right */
      background-color: #444;
      min-width: 120px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      display: none;

      button {
        width: 100%;
        padding: 10px;
        text-align: left;
        border: none;
        background-color: transparent;
        color: #fff;
        cursor: pointer;

        &:hover {
          background-color: #555;
        }
      }
    }

    &:hover .dropdown-content {
      display: block;
    }
  }
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <NavbarContainer>
      <img src="https://media.licdn.com/dms/image/D560BAQGuutDQvHy7dg/company-logo_200_200/0/1709632559857/orahi_logo?e=2147483647&v=beta&t=_HyFV5WvlPxY9mMjMMhkykV6dekRobV7ZcfDFz9Xbco" alt="logo" className="logo" />
      <div className="user-info">
        <span>HUNAR SIKKA</span>
        <img src={user.profilePic} alt="profile" className="profile-pic" />
        <div className="dropdown">
          <span>Logout</span>
          <div className="dropdown-content">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;