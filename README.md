## How to build application environment
1. `docker network create myportfolio`を実行（初回のみ）
2. `docker compose build --no-cache`を実行
3. `docker compose up`を実行

## How to login MySQL
1. mysqlコンテナに入る
2. `mysql -u local -p`を実行し、「password」と入力する

## How to migrate Prisma schema to database schema
1. prisma-studioコンテナに入る
2. `npx prisma migrate dev --name add-status-column`を実行

[参考](https://www.prisma.io/docs/orm/prisma-migrate/workflows/data-migration)

## How to seed to database
1. backendコンテナに入る
2. `npm run seed`を実行する（backend/seedersフォルダ配下が実行されます）
[参考](https://www.prisma.io/docs/getting-started/quickstart-prismaPostgres#5-execute-queries-with-prisma-orm)

## Document and so on
### 新タスク管理（CLICK UP）
https://app.clickup.com/9018648407/v/b/li/901804124689

### 旧タスク管理（Googleスプレッドシート）
https://docs.google.com/spreadsheets/d/1Fs8gfkPfVuT8u6VavqJANCH20cJlayUuWMLGQ6ndW88/edit?gid=1386834576#gid=1386834576

サイトを開いたとき最初はトップビューのみ拡大して表示し、数秒後にヘッダーと下のメインコンテンツを引き寄せる感じにしたい

### デザイン作成
https://www.figma.com/design/NpvTNeIwv2e3IRIZQ7fmIr/MyPortfolio_design?node-id=0-1&node-type=canvas&t=BTAroNntjWfpztyN-0