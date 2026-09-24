/** Fixed, page-wide decorative gradient background used by Contact (and other inner pages). */
const PageMesh: React.FC = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-surface">
    <div className="absolute bottom-[-20vh] left-[-15vw] h-[70vw] w-[70vw] max-h-[900px] max-w-[900px] rounded-full bg-[radial-gradient(circle,rgba(121,92,245,.28)_0%,rgba(121,92,245,.14)_35%,transparent_70%)] blur-[60px]" />
    <div className="absolute top-[-15vh] right-[-12vw] h-[65vw] w-[65vw] max-h-[820px] max-w-[820px] rounded-full bg-[radial-gradient(circle,rgba(121,92,245,.22)_0%,rgba(249,92,91,.12)_45%,transparent_70%)] blur-[60px]" />
  </div>
);

export default PageMesh;
