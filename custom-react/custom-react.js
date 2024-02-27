function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.chidren;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);


    for (let prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
        console.log(reactElement.props[prop]);
    }

    mainContainer.append(domElement);

}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    chidren: 'Click me to visit google'
}

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);
