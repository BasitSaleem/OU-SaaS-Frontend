// Each rail is positioned in the grid area of one product column (rows 1-4: tile row + the three feature rows), from the
// bottom of the tile to the top of the Foundation bar (which starts 32px below that area; 24px on phones).
// Each rail names both its start and end column: without an end line an absolutely positioned grid item stretches to the
// grid's right edge. It is a single element, so the whole line lands on one pixel column. Earlier the line was stitched from a piece under
// the tile, one per row and one above the bar; the pieces rounded to different pixel columns and showed 1px steps.
const RAIL_AREA =
  "pointer-events-none absolute inset-x-0 top-16 -bottom-8 row-start-1 row-end-5 max-[640px]:top-12 max-[640px]:-bottom-6";
const LINE = "absolute top-0 bottom-0 left-1/2 -ml-[0.5px] w-px";

const BusColumnRails: React.FC = () => (
  <>
    <span aria-hidden className={`${RAIL_AREA} col-start-2 col-end-3`}>
      <i className={`${LINE} bg-[var(--rail)]`} />
    </span>
    <span aria-hidden className={`${RAIL_AREA} col-start-3 col-end-4`}>
      <i className={`${LINE} bg-[var(--rail)]`} />
    </span>
    {/* Future products: a dashed rail the coral line fills from the top (--k) as the diagram scrolls in. */}
    <span aria-hidden className={`${RAIL_AREA} col-start-4 col-end-5`}>
      <i className={`${LINE} [background-image:repeating-linear-gradient(to_bottom,#3a3a3a_0_4px,transparent_4px_8px)]`} />
      <i className={`${LINE} origin-top bg-coral [transform:scaleY(var(--k))]`} />
    </span>
  </>
);

export default BusColumnRails;
