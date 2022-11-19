async function getData(selected_major) {
    var response = await fetch('cit5students.json');

    if(response.ok) {
        var data = await response.json();     // variable named data receives an array of objects

        major_items = data.filter( (item) => item.major == selected_major );    // filter data array for selected meal items 

        var templateText = document.getElementById('tableTemplate').innerHTML;  // Get template text 
        var compiledTemplateText = Handlebars.compile(templateText);            // Compile the Handlebars template
        compiledHtml = compiledTemplateText({ rows: major_items })                     // Evaluate the template
        document.getElementById('majorsTable').innerHTML = compiledHtml; 	   // put html table into division
  }
  else {
      document.querySelector('#majorsTable').innerHTML = "Data not found";
  }
}