#!/usr/bin/env node

import { execSync } from "child_process";

execSync("npx tsx index.ts", { stdio: "inherit" });
