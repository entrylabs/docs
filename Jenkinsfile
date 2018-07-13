pipeline {
  agent {
    docker {
      image 'node:8'
      args '-p 4000:4000'
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