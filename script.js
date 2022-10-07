var screen = document.querySelector('#screen');
    var btn = document.querySelectorAll('.btn');

    /*============ For getting the value of btn, Here we use for loop ============*/
    for (item of btn) {
        item.addEventListener('click', (e) => {
            btntext = e.target.innerText;

            if (btntext == '×') {
                btntext = '*';
            }

            if (btntext == '÷') {
                btntext = '/';
            }
            screen.value += btntext;
        });
    }

    function perc(){
        screen.value /= 100; 
    }

    function sin() {
        screen.value = Math.sin(screen.value);
    }

    function cos() {
        screen.value = Math.cos(screen.value);
    }

    function tan() {
        screen.value = Math.tan(screen.value);
    }

    function pow2() {
        screen.value = Math.pow(screen.value, 2);
    }

    function pow3() {
        screen.value = Math.pow(screen.value, 3);
    }

    function sqrt() {
        screen.value = Math.sqrt(screen.value);
    }
    
    function cbrt() {
        screen.value = Math.cbrt(screen.value);
    }

    function log() {
        screen.value = Math.log(screen.value);
    }

    function reci() {
        screen.value = 1/screen.value;
    }

    function s() {
        screen.value = Math.sqrt(screen.value, 2);
    }

    function pi() {
        screen.value = 3.14159265359;
    }

    function e() {
        screen.value = 2.71828182846;
    }

    function epow() {
        screen.value = 2.71828182846**screen.value;
    }

    function tenpow() {
        screen.value = 10**screen.value;
    }

    function twopow() {
        screen.value = 2**screen.value;
    }

    function jceil() {
        screen.value = Math.ceil(screen.value)
    }
    function jfloor() {
        screen.value = Math.floor(screen.value)
    }

    function p_m() {
        if (screen.value>0){
            screen.value = 0 - screen.value;
        }
        else{
            screen.value = -1 * (screen.value);
        }
    }
    
    function natlog() {
        screen.value = Math.log(screen.value)
    }

    function comlog() {
        screen.value = Math.log10(screen.value)
    }
    function fact() {
        var i, num, f;
        f = 1
        num = screen.value;
        for (i = 1; i <= num; i++) {
            f = f * i;
        }

        i = i - 1;

        screen.value = f;
    }

    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }