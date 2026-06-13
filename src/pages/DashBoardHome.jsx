import { useEffect, useState } from "react";
import api from "../services/api";
import "../css/Dashboard.css";

function DashboardHome() {

  const [stats, setStats] = useState({
    orders: 0,
    customers: 0
  });

  useEffect(() => {
    api.get("/order/count").then(res => {
      setStats(prev => ({ ...prev, orders: res.data }));
    });

    api.get("/vehicle/count").then(res => {
      setStats(prev => ({ ...prev, customers: res.data }));
    });
  }, []);

  return (
    <div className="dashboard-home">

      <h2>👋 Welcome Admin</h2>

      <div className="cards">

        <div className="card01">
          <h3>📦 Total Orders</h3>
          <p>{stats.orders}</p>
        </div>

        <div className="card01">
          <h3>👥 Total Customers</h3>
          <p>{stats.customers}</p>
        </div>

      </div>

    </div>
  );
}

export default DashboardHome;