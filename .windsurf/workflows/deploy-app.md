# Deploy Application

This workflow automates the deployment process for your application.

## Parameters
- `environment`: Target environment (dev, staging, production)
- `version`: Version to deploy (latest, specific version number)
- `skipTests`: Whether to skip tests (true/false)

## Steps

1. Run pre-deployment checks
2. If `skipTests` is false, run the test suite
3. Build the application for the specified environment
4. Deploy to the target environment using Teams Deploy
5. Run post-deployment verification
6. Generate deployment report

## Example Usage

```
/deploy-app environment=staging version=latest skipTests=false
```

