---
title: "ESLint OnSave settings"
description: "ESLint rule in VSCode to fix on save"
pubDate: "Aug 08 2022"
---

Filename: .vscode/settings.json

```json
{
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
    },
}
```
