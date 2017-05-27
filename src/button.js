const Button = {
    button: '<button id="myButton">Press me</button>',
    attachEl: (msg) => {
        document.getElementById('myButton').addEventListener('click',
            () => {
                console.log(msg);
            })
    }
};

export default Button;