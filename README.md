# setup-ci-multitool

Installs [ci-multitool](https://github.com/braincorp/ci-multitool) in github actions.

## Example:

```yaml
name: ci-multitool-example
on:
  pull_request:
    branches:
      - main

jobs:
  example:
    runs-on: ubuntu-latest

    steps:
      - uses: braincorp/setup-ci-multitool@main
        with:
          version: 0.0.13
      - run: ci-multitool -h
```