# Re:START キッズ＆小学生クラス LP

静的HTML/CSS/JSで構成されたランディングページです。表示するだけなら、ファイルを開くだけでOKです。

## 使い方

1. ファイルを開く
   - `index.html` をブラウザで開くとプレビューできます。

2. 連絡先・導線の設定
   - `script.js` 上部の定数を実データに変更してください。
     - `LINE_URL`：LINE友だち追加URL
     - `TEL_NUMBER`：ジムの電話番号（例: 080-xxxx-xxxx）
     - `FORM_URL`：Googleフォーム等の申込みURL
     - `IG_URL`：InstagramプロフィールURL（例: https://www.instagram.com/restart__children?...）

3. 住所・地図の確認
   - `index.html` のアクセスセクションの住所表記を修正
   - `iframe` のクエリ（q=）が正しいか確認

4. テキスト・価格の更新
   - 価格やスケジュールはサンプルです。実際の内容に合わせて調整してください。

5. 画像の差し替え
   - `assets/images/` に写真を追加し、`index.html` のプレースホルダーを画像タグに差し替えてください。

## 構成

- `index.html`：ページ本体
- `styles.css`：スタイル
- `script.js`：ナビ/CTAリンクなど簡単な動作
- `assets/images/`：画像置き場
 
## カラーテーマの変更

`styles.css` の `:root` でアクセントカラー（オレンジ）を管理しています。

```css
:root {
  --accent: #ff7a00;
  --accent-2: #ffb347;
}
```

## デプロイ（任意）

簡易サーバーでローカル表示する場合:

```bash
python3 -m http.server 8000
```

上記後、ブラウザで http://localhost:8000 を開いてください。

NetlifyやVercelにそのままアップロードして公開できます。
