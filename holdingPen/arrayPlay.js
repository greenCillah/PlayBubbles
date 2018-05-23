var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];


var length = arr.length;

for (var i = 0; i < length; i++) {


    if (arr[i] === 'd') {
        arr.splice(i, 1);

    }

    if (arr[i] === undefined) {
        continue;
    }

    document.body.innerHTML = document.body.innerHTML + i + " - " + arr[i] + " <br>";

}

document.body.innerHTML += "---------------------<br>";

arr.forEach(function (element, index) {

    document.body.innerHTML = document.body.innerHTML + index + " = " + element + " " + " <br>";

});
