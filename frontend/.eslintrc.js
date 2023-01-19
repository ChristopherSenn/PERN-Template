const OFF = 0, WARN = 1, ERROR = 2;

module.exports = {
    "env": {
        "browser": true,
        "es2021":  true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser":        "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType":  "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-unused-expressions": OFF,
        "react/prop-types":      WARN,
        "react/no-deprecated":   WARN,
        "indent":                [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "key-spacing": [
            "error",
            {
                "align": "value"
            }
        ],
        "eol-last": [
            "error",
            "always"
        ]
    }
};
