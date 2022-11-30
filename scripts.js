function insert(num) {

    let a = document.form.textview;

    a.value += num;
}

function opt(amd) {
    let view = document.form.textview;
    if (view.value !== "") {
        view.value += amd;
    }
}

function zero() {
    let view = document.form.textview;
    if (view.value !== "") {
        view.value += '0';
    }
}

function equal() {
    let button = document.getElementsByClassName('none');
    let a = document.form.textview;
    let exp = a.value;

    if (exp) {
        try {
            a.value = eval(exp);
        } catch (e) {
            alert("Syntax Error!");
            document.form.textview.value = 'Syntax Error!';
            none();
        }
    }
    if (a.value === 0) {
        a.value = "";
    }
    if (a.value === 'Infinity') {
        document.form.textview.value = "Can't divide by Zero!";
        // button.onclick ='none()';
        alert('Can\'t divide by Zero!')
        none();
    }
}

function none() {
    alert('Press the Clear button!');
}

function clean() {
    document.form.textview.value = '';
}

function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}