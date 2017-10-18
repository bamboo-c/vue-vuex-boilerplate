module.exports = {
  rules: {
    "indentation": 2,
    "color-hex-case": "lower", // hex値は小文字指定（大文字を禁止）
    "color-hex-length": "short", // hex値は短い表記（冗長な表記は禁止）
    "color-named": "never", // 名前付きカラー指定を禁止
    "color-no-invalid-hex": true, // 無効な16進数の色指定を禁止
    "function-comma-space-after": "always-single-line", // 単一行のカンマ後には空白が必要
    "function-comma-space-before": "never", // カンマ前の空白を禁止
    "number-leading-zero": "never", // 「0.*」の0は省略し許可しない（.*のようにする）
    "number-no-trailing-zeros": true, // 小数点以下の末尾0を禁止
    "string-no-newline": true, //文字列の改行を禁止
    "string-quotes": "double", // ""指定（''を禁止）
    "length-zero-no-unit": true, // 0の時の右記単位指定を禁止（em, ex, ch, vw, vh, cm, mm, in, pt, pc, px, rem, vmin, vmax）
    "unit-case": "lower", // 単位は小文字指定（大文字を禁止）
    "unit-no-unknown": true, // 不明な単位を禁止
    "value-no-vendor-prefix": true, // ベンダープレフィックスを禁止（autoprefixerの使用前提）
    "value-list-comma-newline-after": "always-multi-line", // 値リストのカンマ後に改行は許可し改行後のカンマは禁止
    "value-list-comma-space-after": "always-single-line", //値リストの単一行のカンマ後には空白が必要
    "value-list-comma-space-before": "never", // 値リストのカンマ前の空白を禁止
    "shorthand-property-no-redundant-values": true, // 省略形のプロパティで重複する値を許可しない
    "property-case": "lower", // プロパティは小文字指定（大文字を禁止）
    "property-no-vendor-prefix": true, // プロパティのベンダープレフィックスを禁止（autoprefixerの使用前提）
    "declaration-bang-space-after": "never", // 宣言後の空白を禁止
    "declaration-bang-space-before": "always", // 宣言前の空白を必須
    "declaration-colon-newline-after": "always-multi-line", // 複数行の時のコロン後には改行が必須
    "declaration-colon-space-after": "always-single-line", // 単一行の時のコロン後に空白が必須
    "declaration-colon-space-before": "never", // コロン前の空白を禁止
    "declaration-block-no-duplicate-properties": [ // 宣言ブロック内で重複するプロパティを禁止
      true,
      {
        "ignore": [
          "consecutive-duplicates" // 連続する場合は許可（レガシーブラウザ対応で記述する場合がある為）
        ]
      }
    ],
    "declaration-block-no-shorthand-property-overrides": true, // ショートハンドで値の上書き禁止
    "declaration-block-semicolon-newline-after": "always-multi-line", // セミコロン後に改行が必須（セレクタ含め一行の場合は容認）
    "declaration-block-semicolon-newline-before": "never-multi-line", // セミコロン前の空白・改行を禁止
    "declaration-block-semicolon-space-after": "always-single-line", // 単一行の時のセミコロン後に空白が必須
    "declaration-block-semicolon-space-before": "never", // セミコロン前の空白を禁止
    "declaration-block-trailing-semicolon": "always", // 末尾のセミコロンを必須
    "block-closing-brace-empty-line-before": "never", // 閉じ括弧前の空行を禁止
    "block-closing-brace-newline-after": "always", // 閉じ括弧後の改行を必須
    "block-closing-brace-newline-before": "always-multi-line", // 複数行の時に閉じ括弧前に改行を必須
    "block-opening-brace-space-after": "always-single-line", // 単一行の時に閉じ括弧後に空白を必須
    "block-opening-brace-space-before": "always", // 単一行で閉じ括弧前に空白を必須
    "selector-attribute-brackets-space-inside": "never", // 属性セレクタ内の括弧の内側の空白を禁止
    "selector-attribute-operator-space-after": "never", // 属性セレクタ内の演算子の後の空白を禁止
    "selector-attribute-operator-space-before": "never", // 属性セレクタ内の演算子の前の空白を禁止
    "selector-attribute-quotes": "always", // 属性値の引用符を必須
    "selector-combinator-space-after": "always", // コンビネータ後に空白を必須
    "selector-combinator-space-before": "always", // コンビネータ前に空白を必須
    "selector-descendant-combinator-no-non-space": true, // 下位コンビネータの空白以外を禁止
    "selector-max-compound-selectors": 3, // セレクタ内の複合セレクタ数を制限
    "selector-max-specificity": "0,4,0", // "id,class,type"でセレクタの特異性を制限
    "selector-max-empty-lines": 1, // セレクタ内の隣接する空行の数を制限
    "selector-pseudo-class-case": "lower", // 擬似セレクタは小文字指定（大文字は禁止）
    "selector-pseudo-class-parentheses-space-inside": "never", // 擬似セレクタ内の括弧の内側の空白を禁止
    "selector-type-case": "lower", // セレクタは小文字（大文字は禁止）
    "selector-list-comma-newline-after": "always", // セレクタリストのカンマの後に改行を必須
    "selector-list-comma-newline-before": "never-multi-line", // セレクタリストのカンマの前の空白を禁止
    "selector-list-comma-space-before": "never", // セレクタリストのカンマの前の空白を禁止
    "media-feature-colon-space-after": "always", // メディアクエリ内のコロンの後の空白を指定
    "media-feature-colon-space-before": "never",  // メディアクエリ内のコロンの前の空白を禁止
    "media-feature-name-case": "lower", // メディアクエリの小文字指定（大文字を禁止）
    "media-feature-parentheses-space-inside": "never", // メディアクエリの括弧内側の空白を禁止
    "media-feature-range-operator-space-after": "always", // メディアクエリ内の範囲演算子の後の空白を指定
    "media-feature-range-operator-space-before": "always", // メディアクエリ内の範囲演算子の前の空白を指定
    "media-query-list-comma-newline-after": "always-multi-line", // メディアクエリの複数行の時はカンマの後に改行を必須
    "media-query-list-comma-newline-before": "never-multi-line", // メディアクエリの複数行の時はカンマの前に空白を必須
    "media-query-list-comma-space-after": "always-single-line", // メディアクエリのカンマの後に改行を必須
    "media-query-list-comma-space-before": "never", // メディアクエリのカンマの前の空白を禁止
    "at-rule-blacklist": ["extend"], // 禁止する@ルールを指定
    "at-rule-name-case": "lower", // @ルールは小文字指定（大文字を禁止）
    "at-rule-name-space-after": "always-single-line", // @ルールで単一行の時は@ルール名の後に空白を必須
    "at-rule-semicolon-newline-after": "always", // @ルールでセミコロンの後に改行を必須
    "comment-whitespace-inside": "always", // コメントの内側に空白を必須
    "max-empty-lines": 2, // 隣接する空行を制限
    "no-extra-semicolons": true, // 余分なセミコロンを禁止
    "no-missing-end-of-source-newline": true // 行末の改行を必須
  }
}
