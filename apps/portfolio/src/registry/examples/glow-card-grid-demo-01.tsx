import { GlowCard } from "@/registry/components/glow-card-grid/glow-card";
import { GlowCardGrid } from "@/registry/components/glow-card-grid/glow-card-grid";

export default function GlowCardGridDemo01() {
  return (
    <div className="w-full p-4">
      <GlowCardGrid>
        {CARDS.map((card) => (
          <GlowCard key={card.name} name={card.name} handle={card.handle} avatar={card.avatar} />
        ))}
      </GlowCardGrid>
    </div>
  );
}

const CARDS = [
  {
    name: "shadcn",
    handle: "@shadcn",
    avatar: "https://unavatar.io/x/shadcn",
  },
  {
    name: "OrcDev",
    handle: "@orcdev",
    avatar: "https://unavatar.io/x/orcdev",
  },
  {
    name: "David Haz",
    handle: "@davidhdev",
    avatar: "https://unavatar.io/x/davidhdev",
  },
  {
    name: "Shu",
    handle: "@shuding",
    avatar: "https://unavatar.io/x/shuding",
  },
  {
    name: "Emil Kowalski",
    handle: "@emilkowalski",
    avatar: "https://unavatar.io/x/emilkowalski",
  },
  {
    name: "Michael Lo",
    handle: "@Michael0520",
    avatar: "https://avatars.githubusercontent.com/u/51830201",
  },
];
