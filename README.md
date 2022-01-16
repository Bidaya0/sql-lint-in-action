# sql-lint-in-action

![GitHub release (latest by date)](https://img.shields.io/github/v/release/bidaya0/sql-lint-in-action?style=flat-square)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/w/bidaya0/sql-lint-in-action/main?style=flat-square)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/joereynolds/sql-lint?style=flat-square)

This action provides the use of sql-lint in github action to check your .sql scripts.
[sql-lint](https://github.com/joereynolds/sql-lint)


## Todo 

- setup format
- setup ignore-errors

## Inputs

## `path`

**Required** The path of sqlfile. Default `"."`.

## `host`

The host of your db. Default `""`.

## `user`

The user of your db. Default `"root"`.

## `password`

The password of your db. Default `""`.

## `port`

The port of your db. Default `3306`.

## `driver`

The driver of your db.Accepted ones are `"mysql"` and `"postgres"`. Default `"mysql"`.

## Example usage

```
uses: Bidaya0/sql-lint-in-action@v0.0.1
with:
  path: '.'
```
