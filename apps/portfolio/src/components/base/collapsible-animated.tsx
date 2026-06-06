"use client";

import { createContext, useContext, useState } from "react";

import type { ChevronDownIconProps } from "@/components/animated-icons/chevron-down-icon";
import { ChevronDownIcon } from "@/components/animated-icons/chevron-down-icon";
import { Collapsible as CollapsibleRoot } from "@/components/base/ui/collapsible";
import type { ChevronsUpDownIconProps } from "@/registry/components/chevrons-up-down-icon";
import { ChevronsUpDownIcon } from "@/registry/components/chevrons-up-down-icon";

type CollapsibleContextType = {
  open: boolean;
};

const CollapsibleContext = createContext<CollapsibleContextType | null>(null);

const useCollapsible = () => {
  const context = useContext(CollapsibleContext);

  if (!context) {
    throw new Error("Collapsible components must be used within a CollapsibleWithContext");
  }

  return context;
};

function CollapsibleWithContext({
  defaultOpen,
  open: controlledOpen,
  onOpenChange,
  ...props
}: React.ComponentProps<typeof CollapsibleRoot>) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen ?? false);
  const open = controlledOpen ?? uncontrolledOpen;

  return (
    <CollapsibleContext.Provider value={{ open }}>
      <CollapsibleRoot
        open={open}
        onOpenChange={(open, eventDetails) => {
          if (controlledOpen === undefined) {
            setUncontrolledOpen(open);
          }
          onOpenChange?.(open, eventDetails);
        }}
        {...props}
      />
    </CollapsibleContext.Provider>
  );
}

function CollapsibleChevronsIcon(props: Omit<ChevronsUpDownIconProps, "isOpen">) {
  const { open } = useCollapsible();
  return <ChevronsUpDownIcon isOpen={open} {...props} />;
}

function CollapsibleChevronDownIcon(props: Omit<ChevronDownIconProps, "isOpen">) {
  const { open } = useCollapsible();
  return <ChevronDownIcon isOpen={open} {...props} />;
}

export {
  CollapsibleWithContext as Collapsible,
  CollapsibleChevronDownIcon,
  CollapsibleChevronsIcon,
  useCollapsible,
};
