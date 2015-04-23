module.exports = {
  main: {
    options: {
      questions: [
        {
          config: 'selectedTask',
          type: 'list',
          message: 'What would you like to do?',
          choices: [
            {
              name: 'Start your development environment',
              value: 'concurrent:dev'
            },
            {
              name: 'Prepare to commit (Run the tests and fix code style issues)',
              value: 'pre-commit'
            },
            {
              name: 'Run a local demo only environment',
              value: 'staging'
            }
          ]
        }
      ]
    }
  }
};
