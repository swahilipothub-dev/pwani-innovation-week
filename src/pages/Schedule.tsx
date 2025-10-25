import MaintenanceNotice from '@/components/MaintenanceNotice.tsx';

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <MaintenanceNotice />
    </div>
  );
};

export default Schedule;
