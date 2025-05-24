// script.js

fetch('resume.md')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load resume.md');
    }
    return response.text();
  })
  .then(markdown => {
    const htmlContent = marked.parse(markdown);
    document.getElementById('resume-container').innerHTML = htmlContent;
  })
  .catch(error => {
    console.error('Error loading resume:', error);
    document.getElementById('resume-container').innerHTML = '<p>Unable to load resume content.</p>';
  });
function printDiv(divName) {
        var printContents = document.getElementById(divName).innerHTML;
        w=window.open();
        document.title = "Ajay_Jayaraj_Resume"; 
        w.document.write(printContents);
        w.print();
        w.close();
    }