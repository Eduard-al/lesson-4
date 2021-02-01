var event, ok;
var answers = [];

mas = [works.a00, works.a1, works.a2, works.a3, works.a4];
var answerQuantity

var i = 0
function box() {
    do {//Выводим первый вопрос
        ok = false;
        event = +prompt(mas.join('') + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(answerQuantity, event);
        }




        //console.log(answers);
    } while (!ok);
}
box()




switch (event) {
    case 1:
    case 2:
    case 3:
        alert('ответ неверный')
        mas = [works.b00, works.b1, works.b2, works.b3, works.b4];
        box()
        break;
    case 4:
        alert('правильный ответ!')
        i++;
        mas = [works.b00, works.b1, works.b2, works.b3, works.b4];
        box()
        break;
    default:
        alert('Ошибка');

}

switch (event) {
    case 1:
    case 2:
    case 4:
        alert('ответ неверный')
        mas = [works.c00, works.c1, works.c2, works.c3, works.c4];
        box()
        break;
    case 3:
        alert('правильный ответ!')
        i++;
        mas = [works.c00, works.c1, works.c2, works.c3, works.c4];
        box()
        break;
    default:
        alert('Ошибка');
}

switch (event) {
    case 3:
    case 2:
    case 4:
        alert('ответ неверный')
        mas = [works.d00, works.d1, works.d2, works.d3, works.d4];
        box()
        break;
    case 1:
        alert('правильный ответ!')
        i++;
        mas = [works.d00, works.d1, works.d2, works.d3, works.d4];
        box()
        break;
    default:
        alert('Ошибка');
}

switch (event) {
    case 3:
    case 2:
    case 1:
        alert('ответ неверный')
        mas = [works.e00, works.e1, works.e2, works.e3, works.e4];
        box()
        break;
    case 4:
        alert('правильный ответ!')
        i++;
        mas = [works.e00, works.e1, works.e2, works.e3, works.e4];
        box()
        break;
    default:
        alert('Ошибка');
}
switch (event) {
    case 3:
    case 2:
    case 1:
        alert('ответ неверный')


        break;
    case 4:
        alert('правильный ответ!')
        i++;


        break;
    default:
        alert('Ошибка');
}














/* switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        mas = [works.b00, works.b1, works.b2];
        answerQuantity = works.b0;
 
 
        box()
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                mas = [works.d00, works.d1, works.d2];
                answerQuantity = works.d0;
 
                box()
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                mas = [works.d00, works.d1, works.d2];
                answerQuantity = works.d0;
 
                box()
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        mas = [works.c00, works.c1, works.c2];
        answerQuantity = works.c0;
 
        box()
        switch (event) {
            case 1: // Второе действие
                mas = [works.d00, works.d1, works.d2];
                answerQuantity = works.d0;
 
                box()
                break;
            case 2: // Второе действие
                mas = [works.d00, works.d1, works.d2];
                answerQuantity = works.d0;
 
                box()
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
} */
alert('вы правильно ответили на ' + i + ' вопросов\n')
alert('Спасибо за игру');


//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}