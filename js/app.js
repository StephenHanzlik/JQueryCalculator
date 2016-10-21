"use strict";
$(document).ready(function() {

    var calcScreen = $("#screen");
    var operator = $(".operator");
    var operand = $("span");
    var equals = $("#equals");
    var clear = $("#clear");
    var buttons = $(".buttons").children();


    buttons.on('click', function() {

        if (event.target === $('#clear')[0]) {
            calcScreen.empty();
            return;
        } else if (event.target === equals[0]) {
            return;
        }
        calcScreen.append(event.target.textContent);
    });


    equals.on('click', function() {

        try {
            if (calcScreen.text().indexOf('x') > -1) {
                var validOpStr = calcScreen.text().replace('x', '*');
                var answer = eval(validOpStr);
                calcScreen.empty();
                calcScreen.append(answer);
            }
        } catch (x) {
            calcScreen.empty();
            calcScreen.append('Error');
        }

        try {
            if (calcScreen.text().indexOf('÷') > -1) {
                var validOpStr = calcScreen.text().replace('÷', '/');
                var answer = eval(validOpStr);
                calcScreen.empty();
                if (answer === Infinity) {
                    calcScreen.append('Error');
                } else {
                    calcScreen.append(answer);
                }
            }
        } catch (x) {
            calcScreen.empty();
            calcScreen.append('Error')
        }

        try {
            if (calcScreen.text().indexOf('+') > -1) {
                var validOpStr = calcScreen.text();
                var answer = eval(validOpStr);
                calcScreen.empty();
                calcScreen.append(answer);
            }
        } catch (x) {
            calcScreen.empty();
            calcScreen.append('Error');
        }

        try {
            if (calcScreen.text().indexOf('-') > -1) {
                var validOpStr = calcScreen.text();
                var answer = eval(validOpStr);
                calcScreen.empty();
                calcScreen.append(answer);
            }
        } catch (x) {
            calcScreen.empty();
            calcScreen.append('Error');
        }
    });

});
