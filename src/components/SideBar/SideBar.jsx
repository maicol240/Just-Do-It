import "./SideBar.css";
import { FcCalendar } from "react-icons/fc";
import { IoAddCircle, IoAddCircleSharp, IoSunny } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { BiCheck } from "react-icons/bi";
import { PiUserPlusLight } from "react-icons/pi";

export default function SideBar() {
  const navItems = [
    {
      name: "My Day",
      icon: <IoSunny color="yellow" size={"24px"} className="icon" />,
      link: "#home",
    },
    {
      name: "Upcoming",
      icon: <FcCalendar size={"24px"} className="icon" />,
      link: "#important",
    },
    {
      name: "Planned",
      icon: <FaStar color="#FFB300" size={"24px"} className="icon" />,
      link: "#planned",
    },
    {
      name: "Completed",
      icon: <BiCheck color="#10B981" size={"24px"} className="icon" />,
      link: "#completed",
    },
    // Add more navigation items here as needed
  ];

  return (
    <>
      <aside className="sideBar-container">
        {/* header */}
        <div className="sideBar-header">
          <h2 className="title">Just Do It</h2>
        </div>

        {/* navigation Items */}
        <ul className="nav">
          {/*each item  */}
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              {/* link with icon and text */}
              <a href={item.link} className="nav-link">
                {item.icon}
                <p className="item-text">{item.name}</p>
              </a>
            </li>
            // End of each item
          ))}
        </ul>

        {/* Projects */}
        <div className="projects-section">
          <h3 className="projects-title">
            Projects
            <IoAddCircleSharp size={"24px"} className="add-project-icon" />
          </h3>
          <ul className="projects-list">
            {/* Example project items */}
            <li className="project-item">
              <span className="project-color"></span>Project 1
            </li>
            <li className="project-item">Project 2</li>
            <li className="project-item">Project 3</li>
            {/* Add more projects as needed */}
          </ul>
        </div>

        {/* footer */}
        <div className="footer">
          <p>© 2025 Just Do It. All rights reserved.</p>
        </div>
      </aside>
    </>
  );
}
