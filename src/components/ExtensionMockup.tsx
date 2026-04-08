const ExtensionMockup = () => (
  <div className="popup-frame w-full max-w-[340px] bg-background">
    {/* Title bar */}
    <div className="popup-titlebar">
      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center gap-1.5">
          <img src="/images/icon128.png" alt="" className="w-3.5 h-3.5 rounded" />
          <span className="sans text-xs text-muted-foreground font-medium">AutoCal</span>
        </div>
      </div>
    </div>

    {/* Body */}
    <div className="p-5 space-y-3.5">
      {/* Status */}
      <div className="flex items-center gap-2 mb-1">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <span className="mono-label text-muted-foreground text-[10px]">Event detected</span>
      </div>

      {/* Fields */}
      {[
        { label: "Title", value: "Team Design Review", primary: true },
        { label: "Date", value: "Thursday, March 20" },
        { label: "Time", value: "2:00 – 3:00 PM EST" },
        { label: "Location", value: "Conference Room B" },
        { label: "Link", value: "meet.google.com/abc-defg", link: true },
      ].map((f) => (
        <div key={f.label}>
          <span className="mono-label text-[9px] text-muted-foreground block mb-1">{f.label}</span>
          <div className={`px-3 py-2 rounded-md text-sm border sans ${
            f.primary
              ? "bg-primary/8 border-primary/20 text-foreground font-medium"
              : f.link
              ? "bg-card border-border text-primary text-xs"
              : "bg-card border-border text-foreground"
          }`}>
            {f.value}
          </div>
        </div>
      ))}

      {/* Button */}
      <button className="btn-primary w-full justify-center mt-1 h-10 text-sm rounded-lg">
        Add to Google Calendar
      </button>
    </div>
  </div>
);

export default ExtensionMockup;
