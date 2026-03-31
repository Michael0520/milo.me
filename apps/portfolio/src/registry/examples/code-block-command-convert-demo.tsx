import { CodeBlockCommand, convertNpmCommand } from "@/registry/components/code-block-command";

export default function CodeBlockCommandConvertDemo() {
  return (
    <div className="w-full max-w-md">
      <CodeBlockCommand {...convertNpmCommand("npx shadcn add @michael0520/code-block-command")} />
    </div>
  );
}
