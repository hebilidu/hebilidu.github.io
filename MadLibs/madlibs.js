console.log("****** Week03 Day02 - Daily challenge: Mad Libs ******");

function libit() {
    let noun = document.getElementById('noun').value;
    let adjective = document.getElementById('adjective').value;
    let person = document.getElementById('person').value;
    let verb = document.getElementById('verb').value;
    let place = document.getElementById('place').value;

    // Look for empty fields
    let abort = false;
    for (item of document.getElementsByTagName('input')) {
        if (item.value.length === 0) {
            item.style.borderColor = "red";
            abort = true;
        } else {
            item.style.borderColor = "black"
        };
    };
    if (abort) { return; };

    // Build sentence
    let sentence = person + "'s " + adjective + " " + noun + " " + verb + "s in the " + place + ".";

    // Add it into story span
    let unit = document.createElement('p');
    unit.innerText = sentence;
    document.getElementById('story').appendChild(unit);
}