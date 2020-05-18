cartBtn.onclick = function () {
    main.innerHTML = '';
    if(cartArr.length > 0) {
        main.prepend(tableMaker(cartArr));
    }
}

function tableMaker (arr) {    
    if(arr.length > 0) {
        let totalSum = 0;

        let table = document.createElement('table');
        table.className = 'table table-dark';
        table.id = 'cartTable';

        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let index = 0;

        for(let key in arr[0]) {
            let th = document.createElement('th');
            th.innerText = key;
            tr.append(th);
            index++;
        }

        let tbody = document.createElement('tbody');

        arr.forEach( function(obj){
            totalSum += obj.price;
            let tr = document.createElement('tr');
            for(let key in obj) {
                let td = document.createElement('td');
                if(typeof obj[key] === 'number') {
                    td.innerText = obj[key] + '$';
                } else {
                    td.innerText = obj[key];
                }
                tr.append(td);
            }
            tbody.append(tr);
        });

        let total = document.createElement('tr');
        total.innerHTML = '<td>Total:</td>' + '<td></td><td></td>' + `<td>${totalSum.toFixed(2)}$</td>`;

        tbody.append(total);

        thead.append(tr);
        table.append(thead, tbody);
        
        return table;
    }

}

