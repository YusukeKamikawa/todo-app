function test() {
    alert("テストメッセージです");
}


function addTodoTask() {

    // 1. <div id="todo-list">これを探して取得する
    // で、<div id="todo-list"></div>の塊がconst todoListに代入される
    const todoList = document.querySelector('#todo-list');

    // 2. <input type=checkbox>が作りたい
    // ので、まずinputタグを生成する
    // <input>
    let input = document.createElement('input');
    // <input type="checkbox">
    input.type = "checkbox";

    // 3. <label>スープを作る</label>
    // ので、まずlabelタグを生成する
    // <label></label>
    let label = document.createElement('label');
    // <label>スープを作る</label>
    label.textContent = "職場先で飲む飲料水の購入";

    // 4. divで囲みたい(１行1TODOにしたいので)
    // <div>
    //  <input type="checkbox">
    //  <label>スープを作る</label>
    // </div>

    // ので、<div></div>を作る
    let div = document.createElement('div');
    // <div>に<input type="checkbox">を追加する
    // <div>
    //   <input type="checkbox">
    // </div>
    div.appendChild(input);

    // <div>に<label>を追加する
    // <div>
    //  <input type="checkbox">
    //  <label>スープを作る</label>
    // </div>
    div.appendChild(label);

    // 5. 作ったdivの塊(divの中にinputとlabelが入った塊)を<div id="todo-list">の最後に追加する
    todoList.appendChild(div);

}

function addTodoTask2() {
    const todoList = document.querySelector('#todo-list');
    let input = document.createElement('input');
    input.type = "checkbox";
    let lavbl = document.createElement('lavel');
    lavel.textContent = "お昼ご飯を食べる";
    let div = document.createElement('div');
    div.appendChild('input');
    div.appendChild('lavel');
    todoList.appendChild('div');
}






function chinpo() {
    while (true) {
        alert('無ちんぽです');
    }
}

// https://developer.mozilla.org/ja/docs/Web/API/Node/textContent
// https://developer.mozilla.org/ja/docs/Web/API/HTMLInputElement