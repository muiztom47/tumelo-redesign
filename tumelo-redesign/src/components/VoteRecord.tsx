type Resolution = {
  number: string;
  title: string;
  proposedBy: "Board" | "Shareholder";
  forPct: number;
  againstPct: number;
  abstainPct: number;
};

const resolutions: Resolution[] = [
  { number: "1", title: "Re-elect Chair of the Board", proposedBy: "Board", forPct: 96.2, againstPct: 2.1, abstainPct: 1.7 },
  { number: "2", title: "Approve directors' remuneration report", proposedBy: "Board", forPct: 71.4, againstPct: 24.8, abstainPct: 3.8 },
  { number: "3", title: "Ratify appointment of auditor", proposedBy: "Board", forPct: 98.0, againstPct: 0.9, abstainPct: 1.1 },
  { number: "4", title: "Adopt climate transition plan", proposedBy: "Shareholder", forPct: 38.6, againstPct: 55.1, abstainPct: 6.3 },
  { number: "5", title: "Authorise share buyback programme", proposedBy: "Board", forPct: 89.7, againstPct: 6.4, abstainPct: 3.9 },
];

function VoteBar({ r }: { r: Resolution }) {
  return (
    <div className="flex h-2 w-full overflow-hidden bg-rule">
      <div className="h-full bg-ink" style={{ width: `${r.forPct}%` }} />
      <div className="h-full bg-against" style={{ width: `${r.againstPct}%` }} />
      <div className="h-full bg-brass-light" style={{ width: `${r.abstainPct}%` }} />
    </div>
  );
}

export default function VoteRecord() {
  return (
    <div className="border border-ink/15 bg-paper-raised">
      <div className="flex items-center justify-between border-b border-ink/15 px-5 py-3.5">
        <div>
          <p className="text-xs uppercase tracking-wide text-ink-soft">
            Annual general meeting · resolutions
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-ink-soft">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 bg-ink" /> For
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 bg-against" /> Against
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 bg-brass-light" /> Abstain
          </span>
        </div>
      </div>
      <ul>
        {resolutions.map((r) => (
          <li
            key={r.number}
            className="grid grid-cols-[2rem_1fr] items-center gap-4 border-b border-ink/10 px-5 py-4 last:border-0 md:grid-cols-[2rem_1fr_9rem]"
          >
            <span className="font-serif text-sm text-ink-soft">{r.number}</span>
            <div>
              <p className="text-sm text-ink">{r.title}</p>
              <p className="mt-0.5 text-xs text-ink-soft">
                Proposed by {r.proposedBy.toLowerCase()}
              </p>
              <div className="mt-2 md:hidden">
                <VoteBar r={r} />
              </div>
            </div>
            <div className="hidden md:block">
              <VoteBar r={r} />
              <p className="mt-1.5 text-right text-xs tabular-nums text-ink-soft">
                {r.forPct}% for
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
