import { showAllYears } from "./app.js";
import { showDays } from "./days.js";

export function getMonth(selection) {

    document.querySelectorAll('section')
        .forEach(s => s.style.display = 'none');

    const section = document.getElementById(`year-${selection}`);
    section.style.display = 'block';
    const caption = section.querySelector('caption').innerText;

    section.addEventListener('click', showMonth);

    function showMonth(e) {

        const clicked = e.target.innerText;

        if(clicked === caption) {
            showAllYears();
        } else {

            const month = clicked;
            showDays(month, selection);
        }

    }


}

