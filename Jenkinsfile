pipeline {
  agent {
    node {
      label 'master'
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