import React from "react";
import { AiFillContacts, AiFillHome } from "react-icons/ai";
import {  BiRestaurant } from "react-icons/bi";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaUser } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";



const links = [
    {
        url: '/',
        text: 'Home',
        icon: <AiFillHome className="nav-icon" />
    },
    {
        url: '/about',
        text: 'Chi Siamo',
        icon: <RiTeamLine className="nav-icon" />
    },

    {
        url: '/contattaci',
        text: 'Contatti',
        icon: <AiFillContacts className="nav-icon" />
    },
    {
        url: '/menu',
        text: 'Menu',
        icon: <BiRestaurant className="nav-icon"/>
    }
]

const LinkComponents = ({ classlink }) => {
    const {closeSidebar} = useGlobalContext();

    return (
        <ul className={classlink}>

            {links.map((link) => {
                return (
                    <Link key={link.url} to={link.url} className="nav-item" onClick={closeSidebar}>

                        <div className="nav-link">
                            {link.icon}
                            <h5 className="nav-text">{link.text}</h5>
                        </div>
                    </Link>
                )
            })}
        </ul>
    )
}

const SocialLink = [
    {
        url: 'https://www.facebook.com/people/Tech-CraftCode/61566532360263/',
        target: '_blank',
        icon: <FaFacebookSquare className="nav-icon" />
    },
    {
        url: 'https://www.linkedin.com/in/luigi-iadicola/',
        target: '_blank',
        icon: <FaLinkedin className="nav-icon" />
    },
    {
        url: 'https://iadicola.netsons.org/',
        target: '_blank',
        icon: <FaUser className="nav-icon" />
    },
    {
        url: 'https://github.com/AndroLuix/',
        target: '_blank',
        icon: <FaGithubSquare className="nav-icon" />
    },

]

const SocialComponent = ({ classSocial }) => {
    return (
        <ul className={classSocial}>
            {
                SocialLink.map((link) => {
                    return (
                        <li key={link.url} className="nav-item">
                            <a href={link.url} rel="noopener noreferrer" target={link.target}>
                                {link.icon} 
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}


export {LinkComponents, SocialComponent};