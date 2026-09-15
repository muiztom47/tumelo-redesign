# Tumelo — concept redesign

A concept redesign of tumelo.com, built as a portfolio piece. Not affiliated
with or endorsed by Tumelo.

## Design plan

**Subject:** shareholder voting infrastructure for institutional finance —
fund managers and pension schemes are the buyer, retail investors are the
end user of the white-labelled dashboard underneath.

**Color**
- `ink` `#152238` — deep navy, the authority color of a legal notice or AGM circular
- `paper` `#EDEAE0` / `paper-raised` `#F6F4EC` — aged ledger paper, not the default cream
- `brass` `#A9822E` — the wax-seal/certificate brass, used only for emphasis and the "for" vote state's counterpart accents
- `against` `#8A3B2E` — a muted oxblood, functional (vote state) rather than decorative
- `rule` `#D8D3C4` — hairline dividers instead of card shadows

**Type**
- Source Serif 4 for headlines — reads like an AGM notice or prospectus, not a SaaS deck
- Public Sans for body and UI — legible at small sizes for tabular vote data

**Layout**
- The hero is a live annotated voting-record table (resolutions, proposer,
  for/against/abstain bar), not a stat block with a gradient. It's the one
  thing Tumelo's product actually produces, so it leads.
- Resolution numbers are real AGM numbering, not decorative 01/02/03 markers
- No rounded cards, no drop shadows — hairline rules and a 2px top border on
  content blocks, closer to a printed circular than a dashboard

## Pages

- `/` — homepage: hero vote record, product overview (ProxySphere / ProxyBeacon), client quote
- `/fund-managers` — buyer-side page: voting-cycle workflow, stats
- `/proxysphere` — product page: features, before/after comparison

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to /dist
```

## Stack

Vite + React 19 + TypeScript + Tailwind CSS 3 + React Router.
