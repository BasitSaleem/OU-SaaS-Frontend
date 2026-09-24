import clsx from "clsx";
import { MESH_BLOBS } from "@/constant/heroData";

const HeroMeshBackground: React.FC = () => (
  <div className="absolute inset-0 z-0 overflow-hidden saturate-[1.1]">
    {MESH_BLOBS.map((blob, i) => (
      <div key={i} className={clsx("absolute rounded-full will-change-transform", blob.className)} />
    ))}
  </div>
);

export default HeroMeshBackground;
