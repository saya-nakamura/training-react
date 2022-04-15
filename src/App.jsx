/* eslint react-hooks/exhaustive-deps: off*/
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  // stateを使用する場合、Reactで用意されているuseStateを使用する
  // 動的な変数と、変数の値を設定するsetterを定義する
  // useStateの引数は初期値となる
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShoeFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  // useEffectの第二引数に空の配列を渡すと、初期表示時にしか通らない関数になる
  // useEffectの第二引数に変数を指定すると、その変数が変わった時にしか再レンダリングされなくなる
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // ||はtrueだったら左辺しか返さない
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    // 複数のタグをreturnする時は親タグを用意して囲わないといけない
    // <div>や<React.Fragment>が使えるが、<>が一番スマート
    // {}の中身はjavaScriptと認識される
    // {}の中の{}はjavaScriptのオブジェクトと認識される
    // &&は左辺がtrueだったら右辺を返す falseだったら返さない
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShoeFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>('ω')ﾆｭｯ</p>}
    </>
  );
};

// 他のファイルからでも関数が使えるようにする
export default App;
