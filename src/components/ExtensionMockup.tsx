const ExtensionMockup = () => (
  <div className="w-full max-w-[360px] glass-card card-glow-top p-5 space-y-4 shadow-2xl border-primary/15 relative overflow-hidden">
    {/* Subtle inner glow */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none rounded-xl" />

    {/* Header */}
    <div className="flex items-center gap-2.5 relative">
      <img src="/images/icon128.png" alt="" className="w-6 h-6 rounded-lg" />
      <span className="font-display font-bold text-sm text-foreground">AutoCal</span>
      <div className="ml-auto flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" />
        <span className="font-mono-label text-[10px] text-muted-foreground">Ready</span>
      </div>
    </div>

    {/* Fields */}
    <div className="space-y-2.5 relative">
      {[
        { label: "Title", value: "Team Design Review", highlight: false },
        { label: "Date", value: "March 20, 2026", highlight: false },
        { label: "Time", value: "2:00 PM – 3:00 PM", highlight: false },
        { label: "Location", value: "Conference Room B", highlight: false },
        { label: "Meeting Link", value: "meet.google.com/abc-defg-hij", highlight: true },
      ].map((field) => (
        <div key={field.label}>
          <label className="font-mono-label text-[10px] text-muted-foreground block mb-1">
            {field.label}
          </label>
          <div className={`px-3 py-2 rounded-lg border text-sm ${
            field.highlight
              ? "bg-primary/8 border-primary/25 text-primary"
              : "bg-secondary/70 border-border text-foreground"
          }`}>
            {field.value}
          </div>
        </div>
      ))}
    </div>

    {/* CTA */}
    <button className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm glow-button relative">
      Add to Google Calendar
    </button>
  </div>
);

export default ExtensionMockup;
