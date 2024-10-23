import ShorService from "../../components/userComponents/ShortService";
import network from "../../assets/user-asset/images/icons/network-icon-colored.svg";
import phone from "../../assets/user-asset/images/icons/phone-icon-colored.svg";
import elec from "../../assets/user-asset/images/icons/electricity-icon-colored.svg";
import cable from "../../assets/user-asset/images/icons/cable-sub-icon-colored.svg";
import time from "../../assets/user-asset/images/icons/airtime-icon-colored.svg";
import HeaderNavigation from "../../components/userComponents/HeaderNavigation";
import Menu from "../../components/userComponents/Menu";
import ListViewTitle from "../../components/userComponents/ListViewTitle";
import SwiperComp from "../../components/userComponents/Swiper";

const Services = () => {
    const items = [
      {
        id: 1,
        link: "/dashboard/buydata",
        icon: network,
        title: "Buy Data",
        description: "Get the best deals on data plans",
        color: "orange",
      },
      {
        id: 2,
        link: "/buy-airtime",
        icon: phone,
        title: "Buy Airtime",
        description: "Recharge to Stay Connected",
        color: "lemon",
      },
      {
        id: 3,
        link: "/electricity-bill",
        icon: elec,
        title: "Electricity Bill",
        description: "Make quick Electricity bill payments",
        color: "purple",
      },
      {
        id: 4,
        link: "/cable-subscription",
        icon: cable,
        title: "TV Subscription",
        description: "Watch your favorite shows hassle-free",
        color: "light purple",
      },
      {
        id: 5,
        link: "/airtime-to-cash",
        icon: time,
        title: "Airtime 2 Cash",
        description: "Convert Your airtime to Real Money",
        color: "orange",
      },
      {
        id: 6,
        link: "/airtime-to-cash",
        icon: time,
        title: "Betting",
        description: "Convert Your airtime to Real Money",
        color: "orange",
      },
      {
        id: 7,
        link: "/airtime-to-cash",
        icon: time,
        title: "Netflix",
        description: "Convert Your airtime to Real Money",
        color: "orange",
      },
      {
        id: 8,
        link: "/dashboard/user/services",
        icon: time,
        title: "More",
        description: "Convert Your airtime to Real Money",
        color: "orange",
      },
    ];
    return (
      <>
        <HeaderNavigation  title="More Service"/>
        <div className="container" style={{ marginTop: "50px",marginBottom:"200px" }}>
          <div className="">
            <ListViewTitle title="Services"/>
            <ShorService items={items} />
          </div>
          <div className="">
            <ListViewTitle title="Earn"/>
            <ShorService items={items} />
          </div>
          <SwiperComp />
          </div>
        <Menu />
      </>
    );
}
 
export default Services;