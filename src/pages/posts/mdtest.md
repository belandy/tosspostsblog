---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'ブログ記事表示テスト'
pubDate: 2023-08-18
description: 'マークダウン(またはmdx)の記法が正常に表示されるかどうかのテスト'
author: 'Belandy'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'Astroのロゴ。'
tags: ["astro", "ブログ"]
---
# [見出し]
***
# 見出し1
a
## 見出し2
aa
### 見出し3
aaa
#### 見出し4
aaaa
##### 見出し5
aaaaa
###### 見出し6
見出し7以降は存在しない(デフォルト)

# [文字]
***
- **太字**
- *syatai*(アルファベットのみ)
- ***HUTOSYATAI***(アルファベットのみ)
# [リスト]
***
- 1
  - 1-1
  - 1-2
    - 1-2-1
    - 1-2-2
      - 1-2-2-1
      - 1-2-2-2
        - 1-2-2-2-1
        - 1-2-2-2-2
          - 1-2-2-2-2-1
          - 1-2-2-2-2-2
          - これ以上絶対に使うことない
            - 1-2-2-2-2-2-1
            - 1-2-2-2-2-2-2
              - 1-2-2-2-2-2-2-1
              - 1-2-2-2-2-2-2-2
                - 1-2-2-2-2-2-2-2-1
                - 1-2-2-2-2-2-2-2-2
                  - 1-2-2-2-2-2-2-2-2-1
                  - 1-2-2-2-2-2-2-2-2-2
                    - a
                      - aa
                        - aaa
                          - aaaa
                            - aaaaa
                              - aaaaaa
- 2
- 3

1. 1
2. 2
3. 3

- [x] 1
- [ ] 2
- [ ] (デフォルトだと点が邪魔)

# [埋め込み]
[リンク](https://astro.build)

画像(URL)(`![テキスト](url)`)

![Astro](https://docs.astro.build/assets/logomark-light.png)

画像(URL)(`<img src="url"...>`)

<img src="https://docs.astro.build/assets/logomark-dark.png" width="125" alt="Astro">

画像(ローカル)

![Astro](../../assets/firstTossPosts.jpg)

gif(ローカル)

(デフォルトでは未対応, Imageプラグインならイケる)

youtube(埋め込み)

<iframe width="560" height="315" src="https://www.youtube.com/embed/l5aZJBLAu1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# [コード]

``` Rust
fn main() {
  let num = 1;
  println!("{num}"); // 1
}
```
