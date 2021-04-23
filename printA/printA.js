const A = [
    '0011100',
    '0100010',
    '0100010',
    '0111110',
    '0100010',
    '0100010',
    '0100010',
];

for (i = 0; i < A.length; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (j of A[i]) {
        console.log(i, j);
        let pix = document.createElement('div');
        pix.classList.add('pix');
        if (j === "1") {
            pix.innerHTML = '*';
        };
        row.appendChild(pix);
    }
    document.getElementById('letterA').appendChild(row);

}