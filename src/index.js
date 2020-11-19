// import _ from 'lodash';
// import printMe from './print.js';
// import './styles.css';

// function component(){
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['Hello', 'webpack',]);


//     var btn = document.createElement('button');
//     // Lodash, now import by this script;

//     btn.innerHTML = "点击并测试print console!"
//     btn.onclick = printMe;
//     element.appendChild(btn);



//     return element
// }
// // document.body.appendChild(component());
// let element  = component();
// document.body.appendChild(element);

// if (module.hot){
//     module.hot.accept('./print.js',function(){
//         console.log('Accepting the updated printMe module!');
//         // printMe();
//         document.body.removeChild(element);
//         element = component();
//         document.body.appendChild(element);
//     })
// }

// import {cube} from './math.js';
// if(process.env.NODE_ENV !== 'production') {
//     console.log('Looks like we are in development mode!')
// }
// function component(){
//     var element = document.createElement('pre');
//     element.innerHTML = [
//         'hello webpack',
//         '6 cubed is equal to' + cube(6)
//     ].join('\n\n');
//     return element;
// }
// document.body.appendChild(component());

function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element;
    }).catch(error => 'An error occurred while loading the component');
    }
    
     getComponent().then(component => {
       document.body.appendChild(component);
     })