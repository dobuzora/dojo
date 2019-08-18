html & css を攻略する
===

## [HTML&CSS入門 Webデザインをイチから学ぼう](https://saruwakakun.com/html-css/basic)

色々メモってるけど、たぶんリンク先の最後のまとめ見れば一発。

### [STEP.1](https://saruwakakun.com/html-css/basic/web-make)
- サーバとのやりとりでWebページは表示
- Webページはブラウザで見る
- Webサイトを作って公開までの流れ
    1. ページの内容をHTML文章で書く
    2. ページのデザインをCSSで書く
    3. サーバを用意する
    4. ドメインを取得する
    5. サーバにWebページ情報をアップロード
    6. Webページを拡散する
- Webサイト作るのに何学べばいいか？
    - HTMLの書き方
    - CSSの書き方
    - (動きなどを加えたくなったらJavaScript)

### [STEP.2](https://saruwakakun.com/html-css/basic/tools)
- エディターの話。
- IntellJを使おうかな...

### [STEP.3](https://saruwakakun.com/html-css/basic/html)
- HTMLタグの話
    - だいたいOK
- classとidについて
- idやclassを書く = **タグに管理名をつける**
    - id は 1つのHTML文章ないで同じid名を使うことができない
    - class は 何回でも同じclass名を使うことができる
- divとspanはまとまりを作るために使う
- divとspanの違いは?
    - spanではまとまりの前後に改行が入りません
    - divではまとまりの前後に改行が入る
- **インライン要素**(span)と**ブロック要素**(div)
- spanは文章の一部の文字を変えたり、線を引いたりする時に便利

### [STEP.4] (https://saruwakakun.com/html-css/basic/css)
- CSSの書き方は3パターンあるよ
- 基本
```
セレクタ {
    プロパティ : 値;
}
```
- id名で指定 `#id名{~}`
- class名で指定 `.class名{~}`
- 適用先を複数指定 `セレクタ,セレクタ,セレクタ{~}`
- 子孫セレクタ(絞り込み指定) `セレクタ セレクタ セレクタ {~}`
- あとは簡単な例の紹介だった

### [STEP.5](https://saruwakakun.com/html-css/basic/width-height)
- widthとheightに関して
- display:inlineだと、widthとheightを指定することができない
- 高さを%で指定するのは厄介

### [STEP.6](https://saruwakakun.com/html-css/basic/max-min-width)
- レスポンシブデザインを作るためには,**min-widthとmax-widthは避けて通れない**。
- min-width は widthのとることのできる最小値
- max-width は widthのとることのできる最大値

### [STEP.7](https://saruwakakun.com/html-css/basic/margin-padding)
- 余白はウェブページを見やすく、そして美しく見せるためにとても大事なポイント
- padding : 要素の**内側**の余白
- margin : 要素の**外側**の余白
- ボックスモデル
- marginとpaddingを%で指定することもできる
- %は左右の余白を指定する時に使い、上下の余白を決める時にはほとんど使わない。
- **marginの相殺**
    - margin指定が複数並ぶと1つしか適応されない
    - paddingでは相殺は起こらない

### [STEP.8](https://saruwakakun.com/html-css/basic/display)
- display プロパティをマスターしよう
- displayはプロパティの1つで、ざっくりいうと**要素の表示形式を決める**
```
p {display : block},span {display : inline}
```
- displayに対する値として、まずはこの4つを覚える
    1. block
    2. inline
    3. inline-block
    4. none
- noneはあくまで非表示になるだけ。
    - 読み込み速度が速くなるわけではない
    - レスポンシブデザインを作る時に便利
        - 画面の小さいスマホで見たときにだけdisplay:noneで非常にする 等

### [STEP.9](https://saruwakakun.com/html-css/basic/font-family-how-to)
- CSSではフォントをfont-familyというプロパティにより決める
- 複数のフォントを書く理由、OSによって入っているフォントが異なるため、前に書かれてフォントが優先される
    - 英語フォントを前に書くと綺麗(英語は英語フォント、日本語は日本語フォントになる)
- おすすめだよ
```
body {
font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic'
}
```

### [STEP.10](https://saruwakakun.com/html-css/basic/text-setting)
- 文字装飾の基本をまとめてみた
- 実際にCSSを書き始める時に見ると便利そう

### [STEP.11](https://saruwakakun.com/html-css/basic/a-link)
- a タグについて
- 色々カスタマイズできるみたい

### [STEP.12](https://saruwakakun.com/html-css/basic/font-awesome)
- Font Awesomeの使い方について
- あんまりメモることはなく、これは実際に試してみるべき

### [STEP.13](https://saruwakakun.com/html-css/basic/ul-ol-li)
- HTML で箇条書き
- ul(Unordered List) ol(Ordered List) だった！！

### [STEP.14](https://saruwakakun.com/html-css/basic/relative-absolute-fixed)
- position をものすごーくざっくりいうと「要素の位置を決める」ためのプロパティ
- positionの値
    - static : 初期値はこれ。
    - relative : 現在の位置を基準に**相対的**な位置を決める
    - absolute : 親要素を基準に**絶対的**な位置を決める
    - fixed : 画面の決まった位置に固定する
- positionで基準を決めたあと,`top`,`botton`,`left`,`right`の具体的な数字で調整する
- static
    - 初期値 : CSSで何も指定していなければこれになっている
    - 要素は通常の位置 : 上下左右に動かすことができない
    - 要素の位置を調整できない : `top`,`lett`などが効かない
    - z-indexを指定できない : 要素の重なり順を変えられない
- relative
    - 現在の表示位置から相対的に要素の位置を動かした
- absolute
    - 要素がどんな形であろうと、間の他の要素や余白が入っていようと、その位置に配置してくれるということ意味する
- fixed
    - これは画面の決まった位置に要素を固定させたい時に使う

### [STEP.15](https://saruwakakun.com/html-css/basic/z-index)
- 重なりを指定するCSSプロパティ `z-index`
```
セレクタ {
    z-index:数字;
}
```
- 数字が大きい方が上
- 考え方はゲーム作ってた時と同じ
- position:staticの要素には使えない!結構ハマるポイントらしい

### [STEP.16](https://saruwakakun.com/html-css/basic/cursor)
- CSSでマウスカーソルを変えられるよ！
- 思った以上に結構カーソルって変わってるんだなと思った
    - ロード中とか,押せませんとか

### [STEP.17](https://saruwakakun.com/html-css/basic/overflow)
- orverflow
    - 要素のボックスからはみ出た部分をどう扱うか
    - 4つの値
        - visible;初期値、はみ出たままの状態で表示される場合あり
        - hidden:はみ出た部分が隠れる
        - scroll:はみ出た部分が隠れてスクロールできる状態に
        - auto:ブラウザによって表示が変わる
- 使わないスクロールバーを非表示にできるよ
    - overflow-xとoverflow-y

### [STEP.18](https://saruwakakun.com/html-css/basic/white-space)
- CSSのwhite-spaceの使い方に関して
    - 意外と使うらしいのでのでマスターしておきたい
- HTMLコード内の**半角スペース、タブ、改行をブラウザでどのように表示させるか**を決める。
- 値に関しては以下の5つのどれかを指定する
    - normal(初期値)
    - nowrap
    - pre-line
    - pre
    - pre-warp
- すぐには使わなさそうだから、必要になったら見よう

### [STEP.19](https://saruwakakun.com/html-css/basic/h1-h2-h3)
- 見出しタグについて
- h1 ~ h6 タグの使い分け
    - 見出しの使い方にはルールがあり、これを守ると読み手が理解しやすく、検索エンジンにも評価されやすい記事を書くことができる
- h1 ~ h6 を使う順番を守る
- h1タグの使用は1度だけ
- 実際のところ、Markdownでやってるのと同じかルールだった

### [STEP.20](https://saruwakakun.com/html-css/basic/div-span)
- **div**タブと**span**タグの**意味**と**違い**、**使い分け**をまとめる。
- どちらも基本的にどこかのデザインを変えたい時に使う
- 2つのタグの違いは？
    - div -> `display: block`となっている
    - span -> `display: inline`となっている

### [STEP.21](https://saruwakakun.com/html-css/basic/table)
- table
    - table 表全体を挟む
    - tr : Table Row の略
    - th : Table Header の略
    - td : Table Data の略
- 表の余白をpaddingでとるとみやすい
- あとは色々表のレイアウトの変え方について
    - 困った時はみにくると良さそう

### [STEP.22](https://saruwakakun.com/html-css/basic/chrome-dev-tool)
- Google クロームのデベロッパーツール(要素の検証機能)について
    - まあ、知ってた
    - でも、デベロッパーツールの使い方を知ったのわ割と最近だからもっと早く知りたかったという気持ちが強いので素晴らしい記事です

### [STEP.23](https://saruwakakun.com/html-css/basic/google-fonts)
- Google Fontsについて
    - 完全無料のWebフォント
- Webフォントとは
    - サーバからフォントデータを読み込んで、ブログやWebサイトに表示させる仕組みのこと
- 通常のフォントだと、閲覧する端末にインストールされているフォントしか表示させることができない
- Webフォントなら、どの端末でも共通のフォントを表示させることができる
- ページの読み込み速度は遅くなる(ちょびっと)
- 日本語もあるよ
- 導入方法について、これは実際にやるときに見ればいいでしょう
- Google Fonts をうまく使えばユニークでおしゃれなWebサイトに見せることができる。

### [STEP.24](https://saruwakakun.com/html-css/basic/before-after)
- before と after とは？
- 「要素」とはタグとタグで挟まれた1つの塊を表す
- CSSの`::after`と`::before`は、擬似要素と呼ばれるものの1つ
    - 「**HTMLには書かれていない要素もどきをCSSでつくることができる**」
```css
h1::before {
    content: '内容';
    ~
}

.example::after {
    content: '内容';
    ~
}
```
- `::before`を使うと要素の直前に**要素もどき**が挿入される
- `::after`を使うと要素の直後に**要素もどき**が挿入される
- 擬似要素を使うメリット
- afterやbeforeがものすごく便利なのは「HTMLコードを汚すことなく様々な表現ができる」ということ
- afterとbeforeの使い方例
    - ここまでの説明ではピンとこなかったが、例をみるとすごく色々使えそう！！

### [STEP.25](https://saruwakakun.com/html-css/basic/centering)
- HTMLとCSSで**要素を中央配置する方法**のパターン
- 文章はtext-align:centerで中央寄せ
- 画像は親要素にtext-align:centerで横センタリング
- ブロッグの要素はmarginを活用して左右中央寄せ、このとき親要素の幅まで要チェック
- ブロックの要素のinline-blockに変えてから、親にtext-align:centerを使えば簡単に中央寄せできる
- 改行のない分を縦にセンタリングするときは、line-heightを親要素のheightに合わせる
- absolute + top: 50% + left: 50% + transform: translate(-50%,-50%)で親のど真ん中に配置できる
- 中央寄せしたい時はこのページで確認しましょう

### [STEP.26](https://saruwakakun.com/html-css/basic/linear-radial-gradient)
- グラデーションの話
    - やってみないとわからない。

### [STEP.27](https://saruwakakun.com/html-css/basic/breadcrumb)
- **パンくずリスト**について
    - 何？ -> ユーザが今**Webサイト上のどこにいるか**を伝える階層順のリストのこと
- メリットは2つ
    - ユーザが迷いにくくなる
    - SEO効果が期待できる
- カテゴリーを最適化する重要、ただ作ればいいというものでもない
- 作り方・導入方法について
    - ぜひ取り入れたいので、もう一度読みに戻ってきます

### [STEP.28](https://saruwakakun.com/html-css/basic/opacity)
- CSSのopacityプロパティを使って、画像などの様々な要素を浸透させる方法

### [STEP.29](https://saruwakakun.com/html-css/basic/circle)
- 円の書き方

### [STEP.30](https://saruwakakun.com/html-css/basic/box-shadow)
- box-shadow
    - ぼかしのない影
    - 影の色の変更
    - 影をぼかす
    - 影の広がりを調整する
    - カンマ区切りで内側と外側両方に影をかける

### [STEP.31](https://saruwakakun.com/html-css/basic/meta-tag)
- Webサイトに書く**metaタグ**について
    - **Webページの情報を、検索エンジンやブラウザなどに伝えるタグ**
- メタタグは検索エンジンやブラウザに向けて書く
- メタタグはheadタグ内に書く
- 知っておきたいメタタグ一覧と書き方
- 文字コード
```html5
<meta charset="utf-8">
```
- IE向け最適化
```html5
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```
- レスポンシブデザイン用
```html5
<meta name="viewport" content="width=device-width,initial-scale=1">
```
- タイトルタグ
- メタディスクリプション
```html5
<meta name="description" content="ページの内容を表す文章">
```
- 検索避ける
```html5
<meta name="robots" content="noindex,nofollow">
```
- OGPタグ
- メールアドレスや電話番号をリンクに変換しない
```html5
<meta name="format-detection" content="email=no,telephone=no,address=no">
```
- Windows向けのアイコン
```html5
<meta name="msapplication-TileImage" content="画像のURL" />
<meta name="msapplication-TileColor" content="カラーコード（例：#F89174）"/>
```
- あまり使う機会がない/不要なメタタグもあるみたい

### [STEP.32](https://saruwakakun.com/html-css/basic/link-rel)
- HTMLのlinkタグについて
    - そのページと外部のファイルやページを関連づける
    - 基本的にheadタグ内に書く
    - 基本的に訪問者の目には入らない
    - ブラウザや検索エンジンに向けた情報や指示を書くためのタグ
    - aタグとは役割が大きく違う
- relとhref
    - relでファイルとの**関係性**をhrefで、そのファイルがある**場所**を指定する
- 知っておきたいlinkタグ一覧
    - スタイルシートの読み込み
    - Webサイトのアイコンを指定
    - フィードページのURLを示す
    - 別URLのモバイルサイトの存在を知らせる
    - 別URLの外国語ページの存在を知らせる
    - 著者情報としてGoogleアカウントを指定する
    - 前後のページのURL
    - DNSプリフェッチ
    - 正規URL (rel canonical)

### [STEP.33](https://saruwakakun.com/html-css/basic/head)
- おけ!!











