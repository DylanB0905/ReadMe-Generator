// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
    ![badge](https://img.shields.io/badge/license-${license}-blue)
      `;
  } else {
    return ' ';
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://chosealiicense.com/licenses/${license})`;
  } else {
    return ' ';
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
    
    The application is covered under the following license:
    
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
}

//function that returns license in Table of Contents
// if no license is seleceted return an empty string
function renderLicenseTable(license) {
  if (license !== 'no license') {
  return `
  * [License](#license)
    `;
  } else {
    return ' ';
  }
 }

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTable(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)
  ${data.description}
  ${data.why}
  ## [Installation](#table-of-contents)
  ${data.repo}
  ## [Usage](#table-of-contents)
  ${data.usage}
  
  For more information on how to add screenshots for examples, visit the following website:
  
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  
  ${renderLicenseSection(data.license)}
  ## [Tests](#table-of-contents)
  
  ${data.test}
  ## [Questions](#table-of-contents)
  Please contact me using the following links:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
