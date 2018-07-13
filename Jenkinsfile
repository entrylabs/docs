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
        sh '''echo "${text} 1"
echo "${env.text} 2"'''
      }
    }
  }
}