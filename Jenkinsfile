pipeline {
  agent {
    node {
      label 'docs'
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