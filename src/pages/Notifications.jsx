import EmptyStateCard from "../components/EmptyStateCard";
import EmptyNotificationIcon from "../assets/empty-notification-icon.svg";

export default function Notifications() {
  return (
    <div className="w-full">
      <div className="pt-[40px] pl-[24px]">
        <h1 className="font-nunito font-bold text-[24px] text-[#202020]">
          Notifications
        </h1>
      </div>

      <EmptyStateCard
        icon={EmptyNotificationIcon}
        title="Nothing to Show Right Now"
        description="You don’t have any notifications yet. Stay tuned for updates and alerts here."
      />
    </div>
  );
}
