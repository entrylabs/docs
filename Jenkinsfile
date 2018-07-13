pipeline {
  agent {
    docker {
      image 'node:8.11.3'
      args '-p 3000:3000'
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
        sh '''git config --global user.name \'JY kim\'
git config --global user.email \'kimorkim@gmail.com\'
chmod +x ./cideploy
./cideploy'''
      }
    }
  }
  environment {
    GH_REPO = 'https://github.com/entrylabs/docs.git'
    GH_REF = 'github.com/entrylabs/docs.git'
  }
}