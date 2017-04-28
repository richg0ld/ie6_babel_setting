/** ----------------------------------------------
 * HanbitSoft Service Development Team
 * html_test Javascript
 * Author - jhkim88@hanbitsoft.co.kr 2017-04-28
 ------------------------------------------------- */

{
    const name = '김정현';
    const A = `1, ${name}`;
    const arr = [1, 2];
    const sumArr = arr.reduce((p, c) => p+c);
    console.log(sumArr); // 3
    const btn = document.getElementById('btn');
    const evtClick = () => console.log(A);
    btn.addEventListener('click', evtClick);
    const foo = {
        catch: function () {
            console.log("catch catch!!");
        }
    };
    foo.catch();
}