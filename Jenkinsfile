pipeline {
  agent {
    node {
      label 'default'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh '''yarn
yarn build'''
      }
    }
  }
}