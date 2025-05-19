# Automated Code Review

This workflow performs an automated code review on specified files or pull requests.

## Parameters
- `target`: File path or PR number to review
- `depth`: Review depth (quick, standard, thorough)
- `focus`: Areas to focus on (security, performance, style, all)

## Steps

1. Analyze the target code or PR
2. Identify potential issues based on the specified focus areas
3. Suggest improvements with code examples
4. Generate a summary report
5. If reviewing a PR, post comments directly to GitHub

## Example Usage

```
/code-review target=src/utils/auth.js depth=thorough focus=security
```

or

```
/code-review target=PR#123 depth=standard focus=all
```

