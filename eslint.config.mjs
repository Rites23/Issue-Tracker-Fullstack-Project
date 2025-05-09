const eslintConfig = [
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "lib/generated/**"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
