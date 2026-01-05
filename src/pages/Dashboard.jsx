import EmptyStateCard from "../components/EmptyStateCard";
import EmptyDashboardIcon from "../assets/empty-dashboard-icon.svg";

export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="pt-[40px] pl-[24px]">
        <h1 className="font-nunito font-bold text-[24px] text-[#202020]">
          Dashboard
        </h1>
      </div>

      <EmptyStateCard
        icon={EmptyDashboardIcon}
        title="Your Dashboard Awaits"
        description="Your dashboard doesn’t have any data to show at the moment. Activity and reports will appear once you get started."
      />
    </div>
  );
}
