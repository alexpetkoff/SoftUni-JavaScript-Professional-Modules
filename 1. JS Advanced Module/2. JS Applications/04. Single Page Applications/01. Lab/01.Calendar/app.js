import { getMonth } from "./month.js";
window.addEventListener('DOMContentLoaded', showAllYears);

export function showAllYears() {

    const sections = document.querySelectorAll('section');
    sections.forEach(s => s.style.display = 'none');

    const years = document.getElementById('years');
    years.style.display = 'block'

    years.addEventListener('click', showYear);

    function showYear(e) {
        const selected = e.target.innerText;

        if (selected.length == 4) {
            getMonth(selected);
        }

    }
}