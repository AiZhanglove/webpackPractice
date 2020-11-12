import _ from 'lodash';
function component(){
    var element = document.createElement('div');
    // Lodash, now import by this script;
    element.innerHTML = _.jion(['Hello', 'webpack',]);
    return element
}
document.body.appendChild(component());