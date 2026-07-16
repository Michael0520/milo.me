"use client";

import { ArrowDown, Split } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Represents a single step in the flow diagram
 */
interface FlowStep {
  /** Display label for the step */
  label: string;
  /** Optional description/annotation */
  annotation?: string;
  /** Step type affects styling */
  type?: "start" | "process" | "decision" | "end";
}

/**
 * Represents a branch in a decision point
 */
interface FlowBranch {
  /** Condition label (e.g., "Cache Hit", "Yes") */
  condition: string;
  /** Steps in this branch */
  steps: FlowStep[];
}

/**
 * Represents a node in the flow - can be a step or a decision point
 */
type FlowNode =
  | FlowStep
  | {
      type: "decision";
      label: string;
      branches: [FlowBranch, FlowBranch];
    };

interface FlowDiagramProps {
  /** Title of the diagram */
  title?: string;
  /** Array of flow nodes */
  nodes: FlowNode[];
  /** Additional CSS classes */
  className?: string;
}

const nodeColors = {
  start: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400",
  },
  process: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
  },
  decision: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-400",
  },
  end: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
  },
};

function StepNode({ step }: { step: FlowStep }) {
  const type = step.type || "process";
  const colors = nodeColors[type];

  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "flex items-center gap-2 rounded-lg border px-4 py-2",
          colors.bg,
          colors.border,
        )}
      >
        <span className={cn("font-mono text-sm font-medium", colors.text)}>{step.label}</span>
      </div>
      {step.annotation && (
        <span className="text-muted-foreground mt-1 text-xs">{step.annotation}</span>
      )}
    </div>
  );
}

function DecisionNode({
  node,
}: {
  node: Extract<FlowNode, { type: "decision"; branches: unknown }>;
}) {
  const colors = nodeColors.decision;
  const [leftBranch, rightBranch] = node.branches;

  return (
    <div className="flex flex-col items-center">
      {/* Decision diamond */}
      <div
        className={cn(
          "flex items-center gap-2 rounded-lg border px-4 py-2",
          colors.bg,
          colors.border,
        )}
      >
        <Split className="size-4 text-amber-400" />
        <span className={cn("font-mono text-sm font-medium", colors.text)}>{node.label}</span>
      </div>

      {/* Branches */}
      <div className="mt-3 grid w-full grid-cols-2 gap-4">
        {/* Left branch */}
        <div className="flex flex-col items-center">
          <span className="mb-2 rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-400">
            {leftBranch.condition}
          </span>
          <div className="flex flex-col items-center gap-2">
            {leftBranch.steps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center">
                {i > 0 && <ArrowDown className="text-muted-foreground/50 my-1 size-3" />}
                <StepNode step={step} />
              </div>
            ))}
          </div>
        </div>

        {/* Right branch */}
        <div className="flex flex-col items-center">
          <span className="mb-2 rounded-full bg-red-500/10 px-2 py-0.5 text-xs text-red-400">
            {rightBranch.condition}
          </span>
          <div className="flex flex-col items-center gap-2">
            {rightBranch.steps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center">
                {i > 0 && <ArrowDown className="text-muted-foreground/50 my-1 size-3" />}
                <StepNode step={step} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Merge arrow */}
      <div className="mt-3 flex items-center gap-2">
        <div className="bg-muted-foreground/30 h-px w-8" />
        <ArrowDown className="text-muted-foreground/50 size-4" />
        <div className="bg-muted-foreground/30 h-px w-8" />
      </div>
    </div>
  );
}

/**
 * A visual component for displaying flowcharts/data flow diagrams.
 *
 * @example
 * <FlowDiagram
 *   title="Autocomplete Data Flow"
 *   nodes={[
 *     { label: "User Input", type: "start" },
 *     { label: "Debounce", annotation: "300ms" },
 *     {
 *       type: "decision",
 *       label: "Check Cache",
 *       branches: [
 *         { condition: "Hit", steps: [{ label: "Return Cached" }] },
 *         { condition: "Miss", steps: [
 *           { label: "API Request" },
 *           { label: "Update Cache" }
 *         ]}
 *       ]
 *     },
 *     { label: "Update State" },
 *     { label: "Render Results", type: "end" }
 *   ]}
 * />
 */
function FlowDiagram({ title, nodes, className }: FlowDiagramProps) {
  return (
    <div
      className={cn("not-prose border-border/50 bg-card/30 my-6 rounded-lg border p-6", className)}
    >
      {title && (
        <h4 className="text-foreground mb-4 text-center font-sans text-sm font-semibold">
          {title}
        </h4>
      )}

      <div className="flex flex-col items-center gap-2">
        {nodes.map((node, index) => {
          const isDecision =
            typeof node === "object" && "branches" in node && node.type === "decision";

          return (
            <div key={index} className="flex flex-col items-center">
              {/* Arrow between nodes */}
              {index > 0 && !isDecision && (
                <ArrowDown className="text-muted-foreground/50 my-2 size-4" />
              )}

              {isDecision ? (
                <DecisionNode
                  node={node as Extract<FlowNode, { type: "decision"; branches: unknown }>}
                />
              ) : (
                <StepNode step={node as FlowStep} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { FlowDiagram };
export type { FlowBranch, FlowDiagramProps, FlowNode, FlowStep };
