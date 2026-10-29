pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Ritikdwivedi45/taskflow-devops.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test -- --runInBand'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t taskflow:latest .'
            }
        }

    }
}