import { getMonth } from "./month.js";

export function showDays(month, year) {

    document.querySelectorAll('section')
        .forEach(s => s.style.display = 'none');

    const months = {
        'Jan': 1,
        'Feb': 2,
        'Mar': 3,
        'Apr': 4,
        'May': 5,
        'Jun': 6,
        'Jul': 7,
        'Aug': 8,
        'Sept': 9,
        'Oct': 10,
        'Nov': 11,
        'Dec': 12,
    }

    const section = document.getElementById(`month-${year}-${months[month]}`);
    section.style.display = 'block'

    section.addEventListener('click', (e) => {
        const clicked = e.target;

        if(clicked.tagName === `CAPTION`) {
            getMonth(year);
        }
    });

}