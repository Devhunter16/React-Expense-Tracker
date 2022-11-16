import './Card.css';

/* The parameter "props" just accepts all of the properties we would pass into Card() 
in our App.js file. .children is a reserved name that comes built in with React. It
makes it so we can wrap our custom element around other elements like a <div> tag.

Also, custom elements don't come with the className feature, so we can't just set
a className on them. Here we added some extra code and added className to the props that
can be passes into <Card /> */
function Card(props) {
    const classes = 'card ' + props.className;

    return ( 
    <div className={classes}>{props.children}</div> 
    )
}

export default Card;