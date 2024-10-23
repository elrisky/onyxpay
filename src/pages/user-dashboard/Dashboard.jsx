import "../../assets/user-asset/css/user.css"
import Header from "../../components/userComponents/Header"
import network from "../../assets/user-asset/images/icons/network-icon-colored.svg";
import phone from "../../assets/user-asset/images/icons/phone-icon-colored.svg";
import elec from "../../assets/user-asset/images/icons/electricity-icon-colored.svg";
import cable from "../../assets/user-asset/images/icons/cable-sub-icon-colored.svg";
import time from "../../assets/user-asset/images/icons/airtime-icon-colored.svg";
import ShorService from "../../components/userComponents/ShortService";
import QuickService from "../../components/userComponents/QuickService";
import Tab from "../../components/userComponents/Tab";
import Info from "../../components/userComponents/InfoCard";
import GiftIcon from "../../assets/user-asset/images/icons/Gift.gif";
import invite from "../../assets/user-asset/images/icons/Social.gif";
import Social from "../../assets/user-asset/images/icons/invite.gif";
import Nohistory from "../../components/userComponents/Nohistory";
import Menu from "../../components/userComponents/Menu";
import SwiperComp from "../../components/userComponents/Swiper";
import Anounce from "../../components/userComponents/Announcement";

const Dashboard=()=>{
  // Sample data for the grid items
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

  const QuickItems = [
    {
      id: 1,
      link: "/buy-data",
      icon: network,
      title: "Refer & Earn",
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
      title: "Daily Check-in",
      description: "Make quick Electricity bill payments",
      color: "purple",
    },
  ];
  const InfoItems = [
    {
      id: 1,
      title: "Cash up for grabs!",
      description: "invite friends and earn up to 4,200",
      icon: GiftIcon,
    },
    {
      id: 2,
      title: "Perform task!",
      description: "Perform tasks and earn free cashbacks",
      icon: invite,
    },
    {
      id: 3,
      title: "Refer your friends!",
      description: "Earn free cashbacks",
      icon: Social,
    },
  ];
  return (
    <>
      <Header />
      <div className="container" style={{ marginBottom: "100px" }}>
        <Anounce />
        <QuickService QuickItems={QuickItems} />
        <SwiperComp />
        <ShorService items={items} />
        <Info items={InfoItems} />
        <Tab
          title="Recent Transactions"
          link="/dashboard/user/transactions"
          linktxt="View All"
        />
           <Nohistory description="This section displays lists of your most recent transactions. You haven't made any transaction." />
      </div>
      <Menu />
    </>
  );
}
export default Dashboard