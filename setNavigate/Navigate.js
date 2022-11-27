function setNavigate(){
    let navigateContainer = document.createElement('div');
    let writeContainer = document.getElementById('write');
    let ul = document.createElement('ul');
    ul.className = 'navigateUl';
    navigateContainer.className = `className navigateContainer`;
    navigateContainer.append(ul);
    document.body.insertBefore(navigateContainer,writeContainer);
    return ul;
}
function setTitle(ul,idName,className){
    let li = document.createElement('li');
    li.className = className;
    li.innerHTML=`<a  href="#${idName}">${idName}</a>`;
    ul.append(li);
}
window.onload = () => {
    let ul = setNavigate();
    let start = document.getElementsByClassName('md-header-anchor')[0].parentElement;

    while (start.nextElementSibling) {
        switch (start.tagName) {
            case 'H2':
                start.id = start.textContent.trim();
                setTitle(ul,start.id,'h2');
                break;
            case 'H3':
                start.id = start.textContent.trim();
                setTitle(ul,start.id,'h3');
                break;
            case 'H4':
                start.id = start.textContent.trim();
                setTitle(ul,start.id,'h4');
                break;
            case 'H1':
                start.id = start.textContent.trim();
                setTitle(ul,start.id,'h1');
                break;
            case 'H5':
                start.id = start.textContent.trim();
                setTitle(ul,start.id,'h5');
                break;
            default:
                break;
        }
        start = start.nextElementSibling;
    }
}
