pipeline {
  agent {
    node {
      label 'node'
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