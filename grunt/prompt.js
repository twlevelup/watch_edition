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
              value: 'abc'
            },
            {
              name: 'Prepare to commit',
              value: 'test'
            }
          ]
        }
      ]
    }
  }
};
