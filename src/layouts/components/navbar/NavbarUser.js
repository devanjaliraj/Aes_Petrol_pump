import React from "react";
import { useState, useEffect } from "react";

import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import axios from "axios";
import * as Icon from "react-feather";
import { Route } from "react-router-dom";

const handleNavigation = (e, path) => {
  e.preventDefault();
  // history.push(path);
  window.location.replace(path);
};

const NavbarUser = () => {
  const [profilepic, setProfilepic] = useState([]);
  // console.log(notifications);
  useEffect(() => {
    async function getNotifications() {
      try {
        const data = await axios.get(
          "http://15.206.122.110:4000/api/user/viewoneadmin/629b43e4b481821324ad3006"
        );
        console.log(data.data.data);
        setProfilepic(data.data.data);
      } catch (error) {
        console.log("SomeThing Wrong");
      }
    }
    getNotifications();
  }, []);

  return (
    <ul className="nav navbar-nav navbar-nav-user float-right">
      <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
        <DropdownToggle tag="a" className="nav-link dropdown-user-link">
          <div className="user-nav d-sm-flex d-none">
            <span className="user-name text-bold-600">{profilepic.name}</span>
            <span className="user-status">Available</span>
          </div>
          <span data-tour="user">
            <img
              src={profilepic?.profilepic}
              className="round"
              height="40"
              width="40"
              alt="avatar"
            />
          </span>
        </DropdownToggle>
        {/* {/ <UserDropdown {...this.props} /> /} */}
        <DropdownMenu right>
          <DropdownItem
            tag="a"
            href="#"
            onClick={(e) => handleNavigation(e, "/#/pages/profile")}
          >
            <Icon.User size={14} className="mr-50" />
            <span className="align-middle">Edit Profile</span>
          </DropdownItem>

          <DropdownItem divider />
          <Route
            render={({ history }) => (
              <DropdownItem
                tag="a"
                onClick={(e) => {
                  localStorage.removeItem("auth");
                  window.location.replace("/#/pages/login");
                }}
              >
                <Icon.Power size={14} className="mr-50" />
                <span className="align-middle">Log Out</span>
              </DropdownItem>
            )}
          />
        </DropdownMenu>
      </UncontrolledDropdown>
    </ul>
  );
};
export default NavbarUser;


















// import React from "react";
// import {
//   // NavItem,
//   // NavLink,
//   UncontrolledDropdown,
//   // Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   DropdownToggle,
//   Media,
//   Badge,
// } from "reactstrap";
// import PerfectScrollbar from "react-perfect-scrollbar";
// import axios from "axios";
// import * as Icon from "react-feather";
// // import classnames from "classnames"
// // import ReactCountryFlag from "react-country-flag"
// // import Autocomplete from "../../../components/@vuexy/autoComplete/AutoCompleteComponent"
// // import { useAuth0 } from "../../../authServices/auth0/auth0Service";
// import { history } from "../../../history";
// // import { IntlContext } from "../../../utility/context/Internationalization"
// import { Route } from "react-router-dom";

// const handleNavigation = (e, path) => {
//   e.preventDefault();
//   // history.push(path);
//   window.location.replace(path);
// };

// const UserDropdown = (props) => {
//   // const { logout, isAuthenticated } = useAuth0()\\\\\\\\\\
//   return (
//     <DropdownMenu right>
//       <DropdownItem
//         tag="a"
//         href="#"
//         onClick={(e) => handleNavigation(e, "/#/pages/profile")}
//       >
//         <Icon.User size={14} className="mr-50" />
//         <span className="align-middle">Edit Profile</span>
//       </DropdownItem>

     
//       <DropdownItem divider />
//       <Route
//         render={({ history }) => (
//           <DropdownItem
//             tag="a"
//             //href="/pages/login"
//             onClick={(e) => {
//               // e.preventDefault()
//               // console.log("@@##anjali ");
//               // localStorage.removeItem("userData");
//               localStorage.removeItem("auth");
//               //history.push("/#/pages/login");
//               window.location.replace("/#/pages/login");
//               // if (isAuthenticated) {
//               //   return logout({
//               //     returnTo: window.location.origin + process.env.REACT_APP_PUBLIC_PATH
//               //   })
//               // } else {
//               //   const provider = props.loggedInWith
//               //   if (provider !== null) {
//               //     if (provider === "jwt") {
//               //       return props.logoutWithJWT()
//               //     }
//               //     if (provider === "firebase") {
//               //       return props.logoutWithFirebase()
//               //     }
//               //   } else {
//               //     history.push("/pages/login")
//               //   }
//               // }
//             }}
//           >
//             <Icon.Power size={14} className="mr-50" />
//             <span className="align-middle">Log Out</span>
//           </DropdownItem>
//         )}
//       />
//     </DropdownMenu>
//   );
// };

// class NavbarUser extends React.PureComponent {
//   state = {
//     navbarSearch: false,
//     langDropdown: false,
//     shoppingCart: [
//       {
//         id: 1,
//         name: "Apple - Apple Watch Series 1 42mm Space Gray Aluminum Case Black Sport Band - Space Gray Aluminum",
//         desc: "Durable, lightweight aluminum cases in silver, space gray, gold, and rose gold. Sport Band in a variety of colors. All the features of the original Apple Watch, plus a new dual-core processor for faster performance. All models run watchOS 3. Requires an iPhone 5 or later.",
//         price: "$299",
//         img: require("../../../assets/img/pages/eCommerce/4.png"),
//         width: 75,
//       },
//       {
//         id: 2,
//         name: "Apple - Macbook® (Latest Model) - 12' Display - Intel Core M5 - 8GB Memory - 512GB Flash Storage Space Gray",
//         desc: "MacBook delivers a full-size experience in the lightest and most compact Mac notebook ever. With a full-size keyboard, force-sensing trackpad, 12-inch Retina display,1 sixth-generation Intel Core M processor, multifunctional USB-C port, and now up to 10 hours of battery life,2 MacBook features big thinking in an impossibly compact form.",
//         price: "$1599.99",
//         img: require("../../../assets/img/pages/eCommerce/dell-inspirion.jpg"),
//         width: 100,
//         imgClass: "mt-1 pl-50",
//       },
//       {
//         id: 3,
//         name: "Sony - PlayStation 4 Pro Console",
//         desc: "PS4 Pro Dynamic 4K Gaming & 4K Entertainment* PS4 Pro gets you closer to your game. Heighten your experiences. Enrich your adventures. Let the super-charged PS4 Pro lead the way.** GREATNESS AWAITS",
//         price: "$399.99",
//         img: require("../../../assets/img/pages/eCommerce/7.png"),
//         width: 88,
//       },
//       {
//         id: 4,
//         name: "Beats by Dr. Dre - Geek Squad Certified Refurbished Beats Studio Wireless On-Ear Headphones - Red",
//         desc: "Rock out to your favorite songs with these Beats by Dr. Dre Beats Studio Wireless GS-MH8K2AM/A headphones that feature a Beats Acoustic Engine and DSP software for enhanced clarity. ANC (Adaptive Noise Cancellation) allows you to focus on your tunes.",
//         price: "$379.99",
//         img: require("../../../assets/img/pages/eCommerce/10.png"),
//         width: 75,
//       },
//       {
//         id: 5,
//         name: "Sony - 75' Class (74.5' diag) - LED - 2160p - Smart - 3D - 4K Ultra HD TV with High Dynamic Range - Black",
//         desc: "This Sony 4K HDR TV boasts 4K technology for vibrant hues. Its X940D series features a bold 75-inch screen and slim design. Wires remain hidden, and the unit is easily wall mounted. This television has a 4K Processor X1 and 4K X-Reality PRO for crisp video. This Sony 4K HDR TV is easy to control via voice commands.",
//         price: "$4499.99",
//         img: require("../../../assets/img/pages/eCommerce/sony-75class-tv.jpg"),
//         width: 100,
//         imgClass: "mt-1 pl-50",
//       },
//       {
//         id: 6,
//         name: "Nikon - D810 DSLR Camera with AF-S NIKKOR 24-120mm f/4G ED VR Zoom Lens - Black",
//         desc: "Shoot arresting photos and 1080p high-definition videos with this Nikon D810 DSLR camera, which features a 36.3-megapixel CMOS sensor and a powerful EXPEED 4 processor for clear, detailed images. The AF-S NIKKOR 24-120mm lens offers shooting versatility. Memory card sold separately.",
//         price: "$4099.99",
//         img: require("../../../assets/img/pages/eCommerce/canon-camera.jpg"),
//         width: 70,
//         imgClass: "mt-1 pl-50",
//       },
//     ],
//     suggestions: [],
//   };

//   // componentDidMount() {
//   //   axios.get("http://3.108.185.7/nodejs/api/admin/allnotification").then(({ data }) => {
//   //     this.setState({ suggestions: data.searchResult });
//   //   });
//   // }

  

//   handleNavbarSearch = () => {
//     this.setState({
//       navbarSearch: !this.state.navbarSearch,
//     });
//   };

//   removeItem = (id) => {
//     let cart = this.state.shoppingCart;

//     let updatedCart = cart.filter((i) => i.id !== id);

//     this.setState({
//       shoppingCart: updatedCart,
//     });
//   };

//   handleLangDropdown = () =>
//     this.setState({ langDropdown: !this.state.langDropdown });

//   render() {
   
//     return (
//       <ul className="nav navbar-nav navbar-nav-user float-right">
        
//         <UncontrolledDropdown
//           tag="li"
//           className="dropdown-notification nav-item"
//         >
//           {/* <DropdownToggle tag="a" className="nav-link nav-link-label">
//             <Icon.Bell size={21} />
//             <Badge pill color="primary" className="badge-up">
//               {" "}
//               5{" "}
//             </Badge>
//           </DropdownToggle> */}
//           <DropdownMenu tag="ul" right className="dropdown-menu-media">
//             <li className="dropdown-menu-header">
//               <div className="dropdown-header mt-0">
//                 <h3 className="text-white">5 New</h3>
//                 <span className="notification-title">App Notifications</span>
//               </div>
//             </li>
//             <PerfectScrollbar
//               className="media-list overflow-hidden position-relative"
//               options={{
//                 wheelPropagation: false,
//               }}
//             >
//               <div className="d-flex justify-content-between">
//                 <Media className="d-flex align-items-start">
//                   <Media left href="#">
//                     <Icon.PlusSquare
//                       className="font-medium-5 primary"
//                       size={21}
//                     />
//                   </Media>
//                   <Media body>
//                     <Media heading className="primary media-heading" tag="h6">
//                       You have new order!
//                     </Media>
//                     <p className="notification-text">
//                       Are your going to meet me tonight?
//                     </p>
//                   </Media>
//                   <small>
//                     <time
//                       className="media-meta"
//                       dateTime="2015-06-11T18:29:20+08:00"
//                     >
//                       9 hours ago
//                     </time>
//                   </small>
//                 </Media>
//               </div>
//               <div className="d-flex justify-content-between">
//                 <Media className="d-flex align-items-start">
//                   <Media left href="#">
//                     <Icon.DownloadCloud
//                       className="font-medium-5 success"
//                       size={21}
//                     />
//                   </Media>
//                   <Media body>
//                     <Media heading className="success media-heading" tag="h6">
//                       99% Server load
//                     </Media>
//                     <p className="notification-text">
//                       You got new order of goods?
//                     </p>
//                   </Media>
//                   <small>
//                     <time
//                       className="media-meta"
//                       dateTime="2015-06-11T18:29:20+08:00"
//                     >
//                       5 hours ago
//                     </time>
//                   </small>
//                 </Media>
//               </div>
//               <div className="d-flex justify-content-between">
//                 <Media className="d-flex align-items-start">
//                   <Media left href="#">
//                     <Icon.AlertTriangle
//                       className="font-medium-5 danger"
//                       size={21}
//                     />
//                   </Media>
//                   <Media body>
//                     <Media heading className="danger media-heading" tag="h6">
//                       Warning Notification
//                     </Media>
//                     <p className="notification-text">
//                       Server has used 99% of CPU
//                     </p>
//                   </Media>
//                   <small>
//                     <time
//                       className="media-meta"
//                       dateTime="2015-06-11T18:29:20+08:00"
//                     >
//                       Today
//                     </time>
//                   </small>
//                 </Media>
//               </div>
//               <div className="d-flex justify-content-between">
//                 <Media className="d-flex align-items-start">
//                   <Media left href="#">
//                     <Icon.CheckCircle
//                       className="font-medium-5 info"
//                       size={21}
//                     />
//                   </Media>
//                   <Media body>
//                     <Media heading className="info media-heading" tag="h6">
//                       Complete the task
//                     </Media>
//                     <p className="notification-text">
//                       One of your task is pending.
//                     </p>
//                   </Media>
//                   <small>
//                     <time
//                       className="media-meta"
//                       dateTime="2015-06-11T18:29:20+08:00"
//                     >
//                       Last week
//                     </time>
//                   </small>
//                 </Media>
//               </div>
//               <div className="d-flex justify-content-between">
//                 <Media className="d-flex align-items-start">
//                   <Media left href="#">
//                     <Icon.File className="font-medium-5 warning" size={21} />
//                   </Media>
//                   <Media body>
//                     <Media heading className="warning media-heading" tag="h6">
//                       Generate monthly report
//                     </Media>
//                     <p className="notification-text">
//                       Reminder to generate monthly report
//                     </p>
//                   </Media>
//                   <small>
//                     <time
//                       className="media-meta"
//                       dateTime="2015-06-11T18:29:20+08:00"
//                     >
//                       Last month
//                     </time>
//                   </small>
//                 </Media>
//               </div>
//             </PerfectScrollbar>
//             <li className="dropdown-menu-footer">
//               <DropdownItem tag="a" className="p-1 text-center">
//                 <span className="align-middle">Read all notifications</span>
//               </DropdownItem>
//             </li>
//           </DropdownMenu>
//         </UncontrolledDropdown>
//         <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
//           <DropdownToggle tag="a" className="nav-link dropdown-user-link">
//             <div className="user-nav d-sm-flex d-none">
//               <span className="user-name text-bold-600">
//                 {this.props.userName}
//               </span>
//               <span className="user-status">Available</span>
//             </div>
//             <span data-tour="user">
//               {/* <img
//                 src={this.props.profilepic}
//                 className="round"
//                 height="40"
//                 width="40"
//                 alt="avatar"
//               /> */}
//               <img
//                   src={this.props.profilepic}
//                   className="round"
//                 height="70"
//                 width="70"
//                 target="_blank"
//                 alt="profilepic"
//                       />
//             </span>
//           </DropdownToggle>
//           <UserDropdown {...this.props} />
//         </UncontrolledDropdown>
//       </ul>
//     );
//   }
// }
// export default NavbarUser;
