import _ from 'lodash';
import printMe from './print.js';


function component(){
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack',]);


    var btn = document.createElement('button');
    // Lodash, now import by this script;

    btn.innerHTML = "点击并测试print console!"
    btn.onclick = printMe;
    element.appendChild(btn);



    return element
}
document.body.appendChild(component());