export default function Footer() {
  return (
    <footer id="contact" className="border-t border-rule bg-ink text-paper">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <span className="font-serif text-lg font-medium">Tumelo</span>
          <p className="mt-3 max-w-xs text-sm text-paper/70">
            Voting infrastructure for fund managers, institutional investors
            and retail investors. Bristol &amp; New York.
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-paper/50">Bristol</p>
          <p className="text-paper/80">
            Runway East
            <br />
            1 Victoria Street
            <br />
            Bristol, BS1 6AA
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-paper/50">New York</p>
          <p className="text-paper/80">
            Floor 57, One World Trade Centre
            <br />
            285 Fulton Street
            <br />
            New York, NY 10007
          </p>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <span>ISO 27001 accredited. © 2026 Tumelo. All rights reserved.</span>
          <span>Concept redesign — portfolio project, not affiliated with Tumelo.</span>
        </div>
      </div>
    </footer>
  );
}
