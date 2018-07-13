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
      steps {
        sh 'yarn deploy'
      }
    }
  }
}