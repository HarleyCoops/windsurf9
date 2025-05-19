# Generate React Component

This workflow creates a new React component with TypeScript typing, styling, and tests.

## Parameters
- `name`: The name of the component (PascalCase)
- `description`: Brief description of the component's purpose
- `type`: Type of component (functional/class)
- `withTests`: Whether to generate tests (true/false)
- `withStories`: Whether to generate Storybook stories (true/false)

## Steps

1. Create the component file in `src/components/{name}/{name}.tsx`
2. Create a stylesheet in `src/components/{name}/{name}.css`
3. If `withTests` is true, create a test file in `src/components/{name}/{name}.test.tsx`
4. If `withStories` is true, create a Storybook story in `src/components/{name}/{name}.stories.tsx`
5. Export the component from `src/components/index.ts`
6. Provide usage examples

## Example Usage

```
/generate-component name=Button description="A reusable button component with various styles" type=functional withTests=true withStories=true
```

