# QA 说明

运行校验：
1. `npx esbuild ../src/script.ts --format=esm --outfile=./script.mjs`
2. `node check.mjs`

当前结果（2026-08-17）：
- 场景总数 54，可达 54，无孤立节点
- 无死路；唯一"剧情结束"是终章 s49_finalLine，属设计
- 3 个交互分支全部有效：s05_firstChoice（走过去/转身离开）、s16_memory（记得/不记得）、s30_redo（改变过去）
