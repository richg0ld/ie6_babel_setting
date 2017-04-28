'use strict';

/** ----------------------------------------------
 * HanbitSoft Service Development Team
 * html_test Javascript
 * Author - jhkim88@hanbitsoft.co.kr 2017-04-28
 ------------------------------------------------- */

{
    var name = '김정현';
    var A = '1, ' + name;
    var arr = [1, 2];
    var sumArr = arr.reduce(function (p, c) {
        return p + c;
    });
    console.log(sumArr); // 3
    var btn = document.getElementById('btn');
    var evtClick = function evtClick() {
        return console.log(A);
    };
    btn.addEventListener('click', evtClick);
    var foo = {
        'catch': function _catch() {
            console.log("catch catch!!");
        }
    };
    foo['catch']();
}