"use client";

import { ArrowDown, Database, Globe, Server } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Represents a single item within an architecture layer.
 * Can be a simple string or an object with name and optional description.
 */
type ArchitectureItem = string | { name: string; description?: string };

/**
 * Represents a layer in the architecture diagram.
 */
interface ArchitectureLayer {
  /** Display name of the layer */
  name: string;
  /** Technology stack used in this layer */
  tech: string;
  /** Components or items within this layer */
  items: ArchitectureItem[];
  /**
   * Icon type for the layer. If not provided, it will be auto-inferred:
   * - "frontend" for names containing "frontend", "client", "ui"
   * - "storage" for names containing "storage", "database", "redis", "db"
   * - "backend" for all other cases
   */
  icon?: "frontend" | "backend" | "storage";
}

/**
 * Props for the ArchitectureDiagram component.
 */
interface ArchitectureDiagramProps {
  /** Array of architecture layers to display, ordered from top to bottom */
  layers: ArchitectureLayer[];
  /** Additional CSS classes to apply to the container */
  className?: string;
}

type IconType = "frontend" | "backend" | "storage";

/** Icon mapping for each layer type */
const layerIcons: Record<IconType, typeof Globe> = {
  frontend: Globe,
  backend: Server,
  storage: Database,
} as const;

/** Color scheme for each layer type */
const layerColors: Record<IconType, { border: string; bg: string; accent: string; badge: string }> =
  {
    frontend: {
      border: "border-blue-500/30",
      bg: "bg-blue-500/5",
      accent: "bg-blue-500",
      badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    backend: {
      border: "border-purple-500/30",
      bg: "bg-purple-500/5",
      accent: "bg-purple-500",
      badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    storage: {
      border: "border-orange-500/30",
      bg: "bg-orange-500/5",
      accent: "bg-orange-500",
      badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    },
  } as const;

/**
 * A visual component for displaying software architecture layers.
 *
 * Renders a vertical stack of architecture layers with icons, technology labels,
 * and item badges. Layers are connected by arrows to show the flow direction.
 *
 * @example
 * <ArchitectureDiagram
 *   layers={[
 *     { name: "Client", tech: "React", items: ["App", "Components", "Hooks"] },
 *     { name: "API", tech: "Express", items: ["Routes", "Controllers"] }
 *   ]}
 * />
 */
function ArchitectureDiagram({ layers, className }: ArchitectureDiagramProps) {
  return (
    <div className={cn("not-prose my-6 flex flex-col gap-3", className)}>
      {layers.map((layer, index) => {
        const iconType = layer.icon || inferIconType(layer.name);
        const colors = layerColors[iconType];
        const Icon = layerIcons[iconType];

        return (
          <div key={layer.name}>
            {/* Layer Card */}
            <div className={cn("rounded-lg border p-4", colors.border, colors.bg)}>
              {/* Header */}
              <div className="mb-3 flex items-center gap-2">
                <div
                  className={cn(
                    "flex size-8 items-center justify-center rounded-md",
                    colors.accent,
                  )}
                >
                  <Icon className="size-4 text-white" />
                </div>
                <div>
                  <h4 className="text-foreground font-sans text-sm font-semibold">{layer.name}</h4>
                  <span className="text-muted-foreground font-mono text-xs">{layer.tech}</span>
                </div>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => {
                  const itemName = typeof item === "string" ? item : item.name;
                  const itemDesc = typeof item === "string" ? undefined : item.description;

                  return (
                    <div
                      key={itemName}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-xs",
                        colors.badge,
                      )}
                      title={itemDesc}
                    >
                      {itemName}
                      {itemDesc && <span className="text-muted-foreground">→ {itemDesc}</span>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Arrow between layers */}
            {index < layers.length - 1 && (
              <div className="flex justify-center py-1">
                <ArrowDown className="text-muted-foreground/50 size-4" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/**
 * Infers the icon type based on the layer name.
 *
 * @internal
 */
function inferIconType(name: string): "frontend" | "backend" | "storage" {
  const lowerName = name.toLowerCase();
  if (lowerName.includes("frontend") || lowerName.includes("client") || lowerName.includes("ui")) {
    return "frontend";
  }
  if (
    lowerName.includes("storage") ||
    lowerName.includes("database") ||
    lowerName.includes("redis") ||
    lowerName.includes("db")
  ) {
    return "storage";
  }
  return "backend";
}

export { ArchitectureDiagram };
export type { ArchitectureDiagramProps, ArchitectureItem, ArchitectureLayer };
