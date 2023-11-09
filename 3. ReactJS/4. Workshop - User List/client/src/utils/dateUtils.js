const changeDateFormat = (isoDate) => {
    const newDate = new Date(isoDate);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(newDate);

    return formattedDate;
}

export default changeDateFormat;