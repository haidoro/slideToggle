# javascriptを使用したslideToggleサンプル

[完成見本]( https://haidoro.github.io/slideToggle/)

## jQueryでのslideToggleサンプル
slideToggleの仕組み作りにはjQueryを使用するのが一番簡単です。  
サンプルではセレクタに要素セレクタを使用していますが、実際にはidを指定しておくと良いでしょう。

slideToggle()はjQueryで用意されたメソッドです。各要素の高さを操作して、slideDown/slideUpの動作を交互に行うものです。  
第1引数はアニメーションする速度を指定するものです。速度は、”slow”、”normal”、”fast”、もしくは完了までの時間をミリ秒単位で指定できます。  
第2引数はイージングの指定ができます。指定できるイージングは、デフォルトのswingと、 一定のペースで進行するlinearのみです。  
また、第3引数にはコールバック関数を指定することが可能です。
