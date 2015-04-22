module.exports = {
  dev: {
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
              name: 'Prepare to commit (Run the tests)',
              value: 'test'
            },
            {
              name: 'Run a local staging environment',
              value: 'staging'
            }
          ]
        }
      ]
    }
  }
};
