# Notes on NX

## Updating NX version

[Automate Updating Dependencies](https://nx.dev/core-features/automate-updating-dependencies)

```bash
nx migrate latest
npm install # After reviewing package.json changes
npx nx migrate --run-migrations
```
