pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "christinachensy/2023-t2-p8:${env.BUILD_NUMBER}"
        MONGO_URI = credentials('mongodb-connection-string') // Ensure this matches the ID you set in Jenkins
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
                    withCredentials([usernamePassword(credentialsId: 'ff1b1b02-aae4-4cc4-ab81-07e234547978', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                        sh 'docker push $DOCKER_IMAGE'
                    }
                }
            }
        }
    }
}
