$(document).ready(function () {
    $("form").submit(function (event) {
      var formData = {
        userId: $("#userId").val(),
        title: $("#title").val(),
        completed: $("#completed").val(),
      };
  
      fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  
      event.preventDefault();
    });
  });