import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

const calloutVariants = {
  default: {
    root: "bg-surface text-surface-foreground",
    description: "text-surface-foreground/80",
  },
  info: {
    root: "border-blue-500/40 bg-blue-500/10 text-blue-950 dark:text-blue-50",
    description: "text-blue-950/85 dark:text-blue-50/85",
  },
  warning: {
    root: "border-amber-500/40 bg-amber-500/10 text-amber-950 dark:text-amber-50",
    description: "text-amber-950/85 dark:text-amber-50/85",
  },
} as const;

export function Callout({
  title,
  icon,
  variant = "default",
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof Alert>, "variant"> & {
  icon?: React.ReactNode;
  variant?: keyof typeof calloutVariants;
}) {
  const styles = calloutVariants[variant];

  return (
    <Alert className={cn("not-prose rounded-xl", styles.root, className)} {...props}>
      {icon}
      {title && <AlertTitle className="[&_a]:underline-offset-4">{title}</AlertTitle>}
      <AlertDescription
        className={cn("[&_a]:underline-offset-4 [&_strong]:font-medium", styles.description)}
      >
        {children}
      </AlertDescription>
    </Alert>
  );
}
