import { CodeBlockCommand } from "@/registry/components/code-block-command";

export default function CodeBlockCommandDemo() {
  return (
    <div className="w-full max-w-md">
      <CodeBlockCommand
        pnpm="pnpm dlx shadcn add @michael0520/code-block-command"
        yarn="yarn shadcn add @michael0520/code-block-command"
        npm="npx shadcn add @michael0520/code-block-command"
        bun="bunx --bun shadcn add @michael0520/code-block-command"
      />
    </div>
  );
}
