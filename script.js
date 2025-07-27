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
  const content = document.getElementById(divName).innerHTML;
  const printWindow = window.open('', '', 'width=900,height=700');

  printWindow.document.write(`
    <html>
      <head>
        <title>Ajay_Jayaraj_Resume</title>
        <link href="https://fonts.googleapis.com/css?family=Abhaya+Libre&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="styles.css">
        <style>
          body {
            font-family: 'Abhaya Libre', serif !important;
            margin: 0.5cm;
            font-size: 12px;
            line-height: 1.4;
          }
          #resume-container * {
            font-family: 'Abhaya Libre', serif !important;
          }
        </style>
      </head>
      <body>
        <div id="resume-container" style="font-family: 'Abhaya Libre'; font-size: 24px;">${content}</div>
      </body>
    </html>
  `);

  printWindow.document.close(); // Needed for some browsers
  printWindow.focus();

  // Ensure print only after resources are loaded
  printWindow.onload = function () {
    printWindow.print();
    printWindow.close();
  };
}
