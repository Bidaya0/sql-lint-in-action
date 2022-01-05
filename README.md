# sql-lint-in-action

![GitHub release (latest by date)](https://img.shields.io/github/v/release/bidaya0/sql-lint-in-action?style=flat-square)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/w/bidaya0/sql-lint-in-action/main?style=flat-square)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/joereynolds/sql-lint?style=flat-square)

This action provides the use of sql-lint in github action to check your .sql scripts.
[sql-lint](https://github.com/joereynolds/sql-lint)


## Todo 
- setup config.json
- setup driver
- setup format
- setup ignore-errors

## Inputs

## `path`

**Required** The path of sqlfile. Default `"."`.


## Example usage

```
uses: Bidaya0/sql-lint-in-action@v0.0.1
with:
  path: '.'
```
