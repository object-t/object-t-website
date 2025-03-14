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