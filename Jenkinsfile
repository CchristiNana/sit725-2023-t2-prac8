pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "christinanachensy/2023-t2-p8:${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout SCM') {
            steps {
                // Checkout the code from the Git repository
                git url: 'https://github.com/CchristiNana/sit725-2023-t2-prac8', branch: 'main'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // Run a container from the built image
                    sh 'docker run -d -p 3000:3000 $DOCKER_IMAGE'
                }
            }
        }
        stage('Test Docker Container') {
            steps {
                script {
                    // Add commands to test your running container, if necessary
                    sh 'curl http://localhost:3000'
                }
            }
        }
    }
}