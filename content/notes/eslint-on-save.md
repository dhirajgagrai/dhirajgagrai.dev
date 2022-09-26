+++
title = "ESLint OnSave rule"
date = 2022-08-08
+++

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
