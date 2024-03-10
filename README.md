# setup-ci-multitool

Installs [ci-multitool](https://github.com/alexgartner-bc/ci-multitool) in github actions.

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
      - uses: alexgartner-bc/setup-ci-multitool@main
        with:
          version: 0.8.0
      - run: ci-multitool -h
```