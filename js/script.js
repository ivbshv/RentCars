'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const carDB = {
        cars: [
            "LAMBORGHINI URUS",
            "AUDI R8",
            "BMW X6 M",
            "PORSCHE Boxter S Red",
            "Corvette C7"
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__header'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newCars = addInput.value;
        const favorite = checkbox.checked;

        if (newCars) {

            if (newCars.length > 21) {
                newCars = `${newCars.substring(0, 22)}...`;
            }

            if (favorite) {
                alert("Автомобиль забронирован!");
            }

            carDB.cars.push(newCars);
            sortArr(carDB.cars);
    
            createCarList(carDB.cars, movieList);
        }

        event.target.reset();

    });

    

   

    const sortArr = (arr) => {
        arr.sort();
    };

    function createCarList(cars, parent) {
        parent.innerHTML = "";
        sortArr(cars);
    
        cars.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                carDB.cars.splice(i, 1);

                createCarList(cars, parent);
            });
        });
    }

    
    
    createCarList(carDB.cars, movieList);

});