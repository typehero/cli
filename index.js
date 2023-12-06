#!/usr/bin/env node

import { execSync } from "child_process";

// get the directory of the current file
const __dirname = new URL(".", import.meta.url).pathname;

const cwd = process.cwd();
console.log({
  cwd,
  __dirname,
});

execSync(`npx tsx ${__dirname}/index.ts`, { stdio: "inherit" });
