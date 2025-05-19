# SWE-1 Model Family Guide

This guide explains how to effectively use the SWE-1 model family in your Windsurf workflows.

## SWE-1 Models Overview

The SWE-1 family consists of three specialized models:

1. **SWE-1**: The flagship model optimized for complex software engineering tasks
2. **SWE-1-lite**: A balanced model for everyday coding tasks (replaces Cascade Base)
3. **SWE-1-mini**: A lightweight model for fast, passive coding assistance

## When to Use Each Model

### SWE-1
- Complex architectural decisions
- System design
- Debugging difficult issues
- Multi-file refactoring
- Creating comprehensive test suites
- Performance optimization

### SWE-1-lite
- Regular coding tasks
- Documentation generation
- Code explanations
- Simple refactoring
- Basic test creation

### SWE-1-mini
- Quick code completions
- Syntax suggestions
- Variable naming
- Simple function implementations
- Docstring generation

## Configuration

You can configure model preferences in your `.windsurf/mcp-config.json` file:

```json
{
  "default_model": "SWE-1-lite",
  "model_preferences": {
    "code_completion": "SWE-1-mini",
    "code_generation": "SWE-1",
    "code_explanation": "SWE-1-lite",
    "planning": "SWE-1"
  }
}
```

## Manual Model Selection

You can manually select a model for a specific task using the model selector in the Cascade interface or by using the following commands:

- `/use-model SWE-1`
- `/use-model SWE-1-lite`
- `/use-model SWE-1-mini`

## Best Practices

1. **Start with SWE-1-lite** for most tasks, then scale up or down as needed
2. **Use SWE-1-mini** for quick completions and simple tasks
3. **Reserve SWE-1** for complex engineering challenges
4. **Create model-specific workflows** for recurring tasks
5. **Set up file-based rules** to automatically select the appropriate model based on file type or context

## Examples

### Complex System Design with SWE-1

```
/use-model SWE-1

Design a scalable authentication system for our application with the following requirements:
- Support for OAuth2 and email/password
- MFA capabilities
- Session management
- Rate limiting
- Audit logging
```

### Code Explanation with SWE-1-lite

```
/use-model SWE-1-lite

Explain how this React hook works:

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
}
```

### Quick Completion with SWE-1-mini

```
/use-model SWE-1-mini

Complete this function:

function formatCurrency(amount, currency = 'USD') {
  // 
}
```

