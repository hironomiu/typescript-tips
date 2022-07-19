# TypeScript Tips

TypeScript を扱う中で気になったものや Tips を`src/modules/module[A-ZZZ]`でメモ

## Run

メモしたコードの実行結果の出力(`src/main.ts`から`src/modules/`配下を呼び出し)

```
npm run serve
```

## Install Memo

```
npm init -y
npm install -D typescript @types/node ts-node
npx tsc --init
mkdir src
```

## Package.json

`scripts`

```
"serve": "ts-node src/main.ts"
```
