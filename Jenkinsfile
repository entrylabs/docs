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
    stage('PR Check') {
      steps {
        echo 'Is PR!!!',
      }
    }
    stage('deploy') {
      when {
        beforeAgent true
        branch 'master' 
      }
      steps {
        sh '''git config --global user.name \'Entry Dev\'
git config --global user.email \'entrydev@nts-corp.com\'
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