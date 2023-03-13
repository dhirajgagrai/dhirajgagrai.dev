---
title: "ESLint TypeScript rules"
description: "ESLint starter rules for TypeScript"
pubDate: "Oct 06 2022"
---

Filename: .eslintrc.json

```json
"rules": {
    "@typescript-eslint/comma-dangle": [
        "error",
        {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never"
        }
    ],
    "eol-last": [
        "error",
        "always"
    ],
    "function-paren-newline": [
        "error",
        "multiline"
    ],
    "indent": [
        "error",
        2
    ],
    "no-console": 1,
    "no-multiple-empty-lines": [
        "error",
        {
            "max": 1,
            "maxEOF": 0
        }
    ],
    "no-trailing-spaces": [
        "error",
        {
            "skipBlankLines": true
        }
    ],
    "object-curly-newline": [
        "error",
        {
            "multiline": true,
            "consistent": true
        }
    ],
    "object-curly-spacing": [
        "error",
        "always"
    ],
    "space-in-parens": [
        "error",
        "never"
    ]
}
```
