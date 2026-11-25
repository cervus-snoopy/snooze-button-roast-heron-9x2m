import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line roast of an alarm clock that rings at 6 AM on a Saturday.
// Gate: entry.txt must be UTF-8 text of 1-200 characters, not only whitespace.
const ENTRY =
  "At 6 AM on a Saturday, you're not an alarm clock — you're a fire drill for a house that isn't burning.";

if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, ENTRY + "\n", "utf8");
chmodSync(outFile, 0o644);
