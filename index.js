const data_val = {
    valute: [],
}

const valute_block = document.querySelector('.valute_block');
const valute = document.querySelector('.valute');


async function get_valute() {
    await fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(function (response) {
        response.json().then(function (json) {

            let arr = json.Valute;
            data_val.valute = [];
            valute.innerHTML = '';
            for (key in arr) {
                let ob = {
                    CharCode: arr[key].CharCode,
                    Name: arr[key].Name,
                    Nominal: arr[key].Nominal,
                    Value: arr[key].Value
                };
                data_val.valute.push(ob)
            }

            //// Если раскоментировать то можно использовать пагинацию

            // const pagin = document.querySelector('.pagin');

            // let pagin_count;


            // let lim;

            // function class_add(e, className) {
            //     e.classList.add(className)
            // }

            // function class_reemuve(e, className) {
            //     e.classList = className;
            // }

            // pagin_count = Math.ceil(data_val.valute.length / 5);
            // for (let i = 1; i <= pagin_count; i++) {
            //     pagin.innerHTML += `<button class="pagin_btn " id=${i === 1 ? i : (i - 1) * 5}>${i}</button>`;
            //     const pagin_btn = document.querySelectorAll('.pagin_btn');
            //     class_add(pagin_btn[0], 'btn_active');
            //     pagin_btn.forEach(item => item.addEventListener('click', (e) => {

            //         pagin_btn.forEach(item => {
            //             class_reemuve(item, 'pagin_btn')
            //         })
            //         lim = +e.target.id - 1;
            //         valut_render(lim)
            //         class_add(e.target, 'btn_active')
            //         // console.log(e);
            //     }))
            // }

            function valut_render(lim = 0) {
                valute.innerHTML = '';
                data_val.valute.map((item, i) => {
                    let valute_dat = '';
                    valute_dat = `<div class="valute_text ">Цена ${item.Nominal} ${item.Name} (${item.CharCode}) = ${+item.Value.toFixed(2)} руб</div>`;
                    valute.innerHTML += valute_dat;
                    // if (i >= lim && i < lim + 5) {
                    //     valute_dat = `<div class="valute_text ">Цена ${item.Nominal} ${item.Name} (${item.CharCode}) = ${+item.Value.toFixed(2)} руб</div>`;
                    //     valute.innerHTML += valute_dat;
                    // }
                })
            }
            valut_render()
            // console.log(arr)
            // console.log(data_val)


        });
    });
}



get_valute();