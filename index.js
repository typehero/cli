#!/usr/bin/env node

import { execSync } from "child_process";

const __dirname = new URL(".", import.meta.url).pathname;

execSync(`npx tsx ${__dirname}/index.ts`, { stdio: "inherit" });
