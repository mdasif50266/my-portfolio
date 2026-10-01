"use client";

const rows = [
  { label: "Open tickets", value: "12", note: "Sample" },
  { label: "Orders today", value: "7", note: "Sample" },
  { label: "Awaiting review", value: "3", note: "Sample" },
];

export function DashboardDemo() {
  return (
    <div className="p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.18em] text-accent">Admin prototype</p>
      <h2 className="mt-2 text-2xl font-semibold">Operations overview</h2>
      <p className="mt-2 text-sm text-muted">
        Figures below are placeholder sample data for layout, not business results.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {rows.map((row) => (
          <div key={row.label} className="rounded-lg border border-border p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-muted">{row.note}</p>
            <p className="mt-2 text-2xl font-semibold">{row.value}</p>
            <p className="text-sm text-muted">{row.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.03] text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Record</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Owner</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Invoice #1042", "Draft", "Finance"],
              ["Lead Northside", "New", "Sales"],
              ["Booking 15:00", "Confirmed", "Front desk"],
            ].map((row) => (
              <tr key={row[0]} className="border-t border-border">
                {row.map((cell) => (
                  <td key={cell} className="px-4 py-3">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
