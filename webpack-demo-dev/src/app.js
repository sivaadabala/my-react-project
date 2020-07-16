import printMe from './print';

export default function app(){
    const element = document.createElement('div');
    element.innerHTML= printMe();
    return element;
}