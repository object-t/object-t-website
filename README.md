# Object<T>公式ホームページ用のリポジトリ 🎉
<p align="center">
    <img src="https://img.shields.io/badge/TEAM-OBJECT<T>-1f5cbf.svg?&style=for-the-badge">
    <img src="https://img.shields.io/github/commit-activity/t/object-t/object-t-website/main?style=for-the-badge">
</p>


## 概要
本リポジトリでは団体公式ホームページのフロントエンドを管理・保守するためのリポジトリです。


## 環境構築


### 必須環境
```markdown
以下がインストールされている必要があります。
- go
- nodejs
- make
```


### 構築手順
```bash
# リポジトリのクローン
$ git clone https://github.com/object-t/object-t-website.git
$ cd object-t-website

# ディレクトリの初期化
$ make init

# websiteの起動
$ npm run dev

# storybookの起動
$ npm run storybook

# websiteをビルド
$ npm run build
```

### Git関連
コミットやブランチを作成する際は以下のルールを守ってください。
```markdown
## コミットメッセージ
- 以下のPrefixを追加すること。
`"feat", "add", "update", "delete", "revert", "fix", "refactor", "chore", "test", "style"`
> 例: add: Add README.md

## ブランチ名
- 基本はdevelopからブランチを生やしてください。
- 以下のPrefixを使用することを推奨しています。
`"feature", "fix", "hotfix", "chore", "ci", "refactor", "docs", "style", "test", "main", "develop", "release", "revert"`
- 作業する際はissueを立て、以下の例のようにブランチ名にissue番号を入れること。
> 例: feature/3-login-form (issue番号が#3の場合)

## GitHooksについて
- `make init`を実行することで、`.git/hooks`に`.githook/`内のファイルがビルドされます。
### commit-msg.go
- コミットメッセージにバリデーションが追加されます。
### post-checkout.go
- ブランチ変更時にバリデーションが追加されます。
- feature/{issue-id}のようになっている場合、checkoutしたときに以下のようにissue情報が出力されます。
```
$ git switch feature/13-about-githooks 
Switched to a new branch 'feature/13-about-githooks'
[INFO] ISSUE #13の情報
----------
Issue    : 13
Title    : [Add] README.mdに.githooks関連について記載する
State    : open
Created  : naoido
Assignees: naoido
----------
```

## ブランチ保護
main: ❌直接プッシュ不可
      📝他人のレビューが1以上必要

develop: ❌直接プッシュ不可
         ⭕️できるだけ他人にレビューをもらうように
```

### ディレクトリ概要
```bash
.
├── .githooks # git hooksのロジック保管場所
├── .storybook # storybookの設定関連
├── app # Reactプロジェクト
│   └── routes # react-router関連
├── public # Reactで使う静的ファイル
└── stories # storiesで管理するコンポーネント群
    └── assets # storiesで使用するasset類
```