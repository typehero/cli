#!/usr/bin/env node

import { execSync } from "child_process";

const cwd = process.cwd();
execSync(`npx tsx ${cwd}/index.ts`, { stdio: "inherit" });
