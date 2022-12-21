function onClickInfo() {
    $.ajax({
        method: "GET",
        url: "https://public.api.nexon.com/openapi/maplestory/v1/cube-use-results",
        data: {
            count: 1000,
            date: "2022-11-25",
            cursor: ""
        },
        headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjE1NjExODkxMTgiLCJhdXRoX2lkIjoiMiIsImV4cCI6MTY4NzA4MTY5OCwiaWF0IjoxNjcxNTI5Njk4LCJuYmYiOjE2NzE1Mjk2OTgsInNlcnZpY2VfaWQiOiI0MzAwMTEzOTciLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4ifQ.XN-57OyBn1IkXqnnEhR3I2uL6WVsq6Csm4KTJOK2rLY"
        },
    })
    .done(function (msg) {
        console.log(msg);
    });
}