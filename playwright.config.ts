import { defineConfig } from "@playwright/test";
export default defineConfig({testDir:"./tests",timeout:30_000,use:{baseURL:"http://localhost:3210",trace:"retain-on-failure"},webServer:{command:"npm run dev -- -p 3210",url:"http://localhost:3210",reuseExistingServer:false,timeout:60_000}});
