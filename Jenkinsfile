pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:8.11.3'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh '''yarn
yarn build'''
      }
    }
    stage('deploy') {
      environment {
        GH_TOKEN = 'credentials(\'GITHUB_TOKEN\')'
      }
      steps {
        sh '''git config --global user.name \'Entry\'
git config --global user.email \'entrydev@nts-corp.com\'
yarn deploy'''
      }
    }
  }
  environment {
    GH_TOKEN = ''
  }
}