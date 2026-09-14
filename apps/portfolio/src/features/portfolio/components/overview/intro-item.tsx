import { IconTile } from "@/components/ui/icon-tile";
import { cn } from "@/lib/utils";

export function IntroItem({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex items-center gap-4 font-mono text-sm", className)} {...props} />;
}

export function IntroItemIcon(props: React.ComponentProps<typeof IconTile>) {
  return <IconTile {...props} />;
}

export function IntroItemContent({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-balance", className)} {...props} />;
}

export function IntroItemLink({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      className={cn("underline-offset-4 hover:underline", className)}
      target="_blank"
      rel="noopener"
      {...props}
    />
  );
}
