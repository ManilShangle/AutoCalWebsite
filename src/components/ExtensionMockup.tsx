const ExtensionMockup = () => (
  <div className="w-full max-w-[390px] glass-card p-5 space-y-4 shadow-2xl">
    <div className="flex items-center gap-2 mb-2">
      <img src="/images/icon128.png" alt="" className="w-5 h-5 rounded" />
      <span className="font-display font-semibold text-sm text-foreground">AutoCal</span>
      <span className="ml-auto text-xs text-muted-foreground">Ready</span>
    </div>
    <div className="space-y-3">
      {[
        { label: "Title", value: "Team Design Review" },
        { label: "Date", value: "March 20, 2026" },
        { label: "Time", value: "2:00 PM – 3:00 PM" },
        { label: "Location", value: "Conference Room B" },
        { label: "Meeting Link", value: "meet.google.com/abc-defg-hij" },
      ].map((field) => (
        <div key={field.label}>
          <label className="text-xs text-muted-foreground">{field.label}</label>
          <div className="mt-1 px-3 py-2 rounded-md bg-secondary border border-border text-sm text-foreground">
            {field.value}
          </div>
        </div>
      ))}
    </div>
    <button className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm glow-button">
      Add to Google Calendar
    </button>
  </div>
);

export default ExtensionMockup;
