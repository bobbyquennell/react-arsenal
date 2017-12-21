/* eslint-disable no-var, no-undef */
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var parse = require('@rosskevin/react-docgen').parse;
var chokidar = require('chokidar');

var paths = {
  examples: path.join(__dirname, '../docs', 'examples'),
  components: path.join(__dirname, '../components'),
  output: path.join(__dirname, '../config', 'componentData.js')
};

const enableWatchMode = process.argv.slice(2) == '--watch';
if(enableWatchMode) {
  //Regenerate component metadata when components or examples change.
  chokidar.watch([paths.examples, paths.components]).on('change', function(event, path){
    generate(paths);
  });
} else {
  //Generate component metadata
  generate(paths);
}

function generate(paths) {
  var errors = [];
  var componentData = getDirectories(paths.components).map(function(componentName){
    try {
      return getComponentData(paths, componentName);
    } catch (error) {
      errors.push('An error happened when attempting to generate metadata for ' + componentName + '. ' + error);
    }
  });
  writeFile(paths.output, "module.exports = " + JSON.stringify(errors.length ? errors : componentData));
}

function getComponentData(paths, componentName) {
  // console.log(path.join(paths.components, componentName, componentName + '.js' ));
  try {
    var content = readFile(path.join(paths.components, componentName, componentName + '.js' ));
    var info = parse(content);
    return {
      name: componentName,
      description: info.description,
      props: info.props,
      code: content,
      examples: getExampleData(paths.examples, componentName)
    };
  } catch (error) {
    //errors.push('An error happened when attempting to read file  for ' + componentName + '. ' + error);
    //console.log('An error happened when try to getComponentData for ' + componentName + '. ' + error);
    throw error;
  }

}

function getExampleData(examplesPath, componentName){
  try {
    var examples = getExampleFiles(examplesPath, componentName);
    //console.log(chalk.yellow(`getExampleData->examples: ${examples}`));
    return examples.map(function(file){
      var filePath = path.join(examplesPath, componentName, file);
      //console.log(chalk.red(`getExampleData->filePath: ${filePath}`));
      //console.log(chalk.red(`file: ${file}`));
      var content = readFile(filePath);
      var info = parse(content);
      return {
        //By convention, component name should match the filename.
        //So remove the .js extension to get the component name.
        name: file.slice(0, -3),
        description: info.description,
        code: content
      };
    });
  } catch (e) {
    // errors.push('Error: getExampleData componentName: ' + componentName + '. ' + 'examplesPath: ' + examplesPath + error);
    console.log('An error happened when try to getExampleData for: ' + componentName + '. ' + 'examplesPath: ' + examplesPath + '\n' + e);
    throw e;
  }
}

function getExampleFiles(examplesPath, componentName){
  var exampleFiles = [];
  try {
    exampleFiles = getFiles(path.join(examplesPath, componentName));
    //debug only ---console.log(chalk.green(`getExampleFiles->exampleFiles: ${exampleFiles}`));
  } catch (error) {
    console.log(chalk.red(`No examples found for ${componentName}. info: ${error}`));
  }
  return exampleFiles;
}

function getDirectories(filepath){
  return fs.readdirSync(filepath).filter(function(file){
    //debug only --console.log(chalk.blue(`getDirectories->file: ${file}`));
    return fs.statSync(path.join(filepath, file)).isDirectory();
  });
}

function getFiles(filepath){

  return fs.readdirSync(filepath).filter(function(file){
    //debug---console.log(chalk.white(`getFiles from ${filepath}: ${file}`));
    //return fs.statSync(path.join(filepath, file)).isFile();//old filter: grab any files from the folder.
    return path.extname(file) === '.js';//new filter: only grab .js file from example folder, so we can add styling files.
  });
}

function writeFile(filepath, content){
  fs.writeFile(filepath, content, function(err){
    err ? console.log(chalk.red(err)) : console.log(chalk.green("Component data saved"));
  });
}

function readFile(filePath){
  return fs.readFileSync(filePath, 'utf-8');
}
