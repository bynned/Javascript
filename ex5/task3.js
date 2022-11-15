const DATA_SOURCE = 'http://127.0.0.1:3010/students'

$(document).ready(function () {
    $.getJSON(DATA_SOURCE,
            function (data) {
                var student = '';

                $.each(data, function (key, value) {
                    student += '<tr>';
                    student += '<td>' + value.name + '</td>';

                    student += '<td>' + value.info + '</td>';

                    student += '<td>' + value.exercise_points + '</td>';

                    student += '</tr>';
                });

                $('#table').append(student);
            });
});
