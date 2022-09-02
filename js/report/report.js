
fetch('http://127.0.0.1:5000/report/')
.then(response => response.json())
.then(report => {
    let rows = report.map(element => createReportTemplate(element));
    console.log(report)
    let table = $("#report tbody");
    table.append(rows);
});


function createReportTemplate(size) {
let template = $("#report-template")[0].innerHTML;
return Mustache.render(template, size);
}
