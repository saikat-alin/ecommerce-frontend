import Widget from "../../../adminComponents/widget/Widget";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard, MdShoppingCart } from "react-icons/md";
import { TbTruckDelivery, TbTruckOff } from "react-icons/tb";
import { Link } from "react-router-dom";

const Tables = () => {
  return (
    <div>
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <div className="cursor-pointer">
          <Link to={"/admin/new-order"}>
            <Widget
              icon={<MdShoppingCart className="h-7 w-7" />}
              title={"80-New Order"}
              subtitle={"New Order"}
            />
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to={"/admin/all-order"}>
            <Widget
              icon={<IoDocuments className="h-6 w-6" />}
              title={"90-Total Order"}
              subtitle={"All Order"}
            />
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to={"/admin/deliver-order"}>
            <Widget
              icon={<TbTruckDelivery className="h-7 w-7" />}
              title={"30-Order Deliver"}
              subtitle={"Deliver Order"}
            />
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to={"/admin/not-delivered-order"}>
            <Widget
              icon={<TbTruckOff className="h-6 w-6" />}
              title={"20-Pending Order"}
              subtitle={"Not Deliver Order"}
            />
          </Link>
        </div>
        <div className="cursor-pointer">
        <Link to={"/admin/available-stock"}>
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            subtitle={"Available Stock"}
            title={"40-Available Stock"}
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tables;
