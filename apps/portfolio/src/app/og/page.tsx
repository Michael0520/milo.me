import { Overview } from "@/features/portfolio/components/overview";
import { ProfileHeader } from "@/features/portfolio/components/profile-header";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="max-w-screen overflow-x-clip">
      <div className="mx-auto flex h-screen flex-col justify-center md:max-w-3xl">
        <div
          className={cn(
            "screen-line-bottom grow border-x border-line after:-bottom-px",
            "diagonal-stripes",
          )}
        >
          <div className="flex h-4" />
        </div>

        <ProfileHeader />
        <Separator />

        <Overview />

        <div
          className={cn(
            "screen-line-top grow border-x border-line before:-top-px",
            "diagonal-stripes",
          )}
        />
      </div>
    </div>
  );
}

function Separator({ className }: { className?: string }) {
  return <div className={cn("stripe-divider flex w-full border-x border-line", className)} />;
}
