pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "christinanachensy/sit725-2023-t2-prac8:${env.BUILD_NUMBER}"
        MONGO_URI = credentials('mongodb-connection-string') // Use Jenkins credentials for sensitive data
    }
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Run tests
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Push the Docker image to Docker Hub
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                        sh 'docker push $DOCKER_IMAGE'
                }
            }
        }
    }
}