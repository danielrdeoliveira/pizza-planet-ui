
fetch('http://127.0.0.1:5000/report/ingredients')
.then(response => response.json())
.then(report => {
    let rows = report.map(element => 
        createReportTemplateIngredients(element));
    let table = $("#report-ingredient tbody");
    table.append(rows);
});

function createReportTemplateIngredients(item) {
    let template = $("#report-template-ingredient")[0].innerHTML;
    return Mustache.render(template, item);
}

fetch('http://127.0.0.1:5000/report/customers')
.then(response => response.json())
.then(report => {
    let rows = report.map(element => 
        createReportTemplateCustomers(element));
    let table = $("#report-customer tbody");
    table.append(rows);
});

function createReportTemplateCustomers(item) {
    let template = $("#report-template-customer")[0].innerHTML;
    return Mustache.render(template, item);
}

fetch('http://127.0.0.1:5000/report/month')
.then(response => response.json())
.then(report => {
    let rows = report.map(element => 
        createReportTemplateMonth(element));
    let table = $("#report-month tbody");
    table.append(rows);
});

function createReportTemplateMonth(item) {
    let template = $("#report-template-month")[0].innerHTML;
    return Mustache.render(template, item);
}