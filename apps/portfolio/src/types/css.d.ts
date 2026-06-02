// Next.js 16.1.x does not ship an ambient declaration for CSS side-effect
// imports (e.g. `import "@/styles/globals.css"` or `import "dialkit/styles.css"`),
// so `next build`'s type checker reports "Cannot find module or type
// declarations for side-effect import". They work fine at runtime; Next 16.2.x
// added this declaration implicitly.
//
// Keep this file as long as `next` is pinned to 16.1.x (held for the 16.2.x
// dev-server memory leak). The project uses only global/side-effect CSS imports
// (no CSS Modules), so a blanket `*.css` declaration is safe here.
declare module "*.css";
