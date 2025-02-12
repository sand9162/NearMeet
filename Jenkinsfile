pipeline {
    agent any

    environment {
        DOCKER_HUB_USER = 'sand9162'  // Replace with your Docker Hub username
        DOCKER_HUB_CREDENTIALS = 'docker-hub-credentials' // Jenkins credentials ID
        FRONTEND_IMAGE = 'sand9162/nearmeet-frontend'
        BACKEND_IMAGE = 'sand9162/nearmeet-backend'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/sand9162/NearMeet.git'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                script {
                    dir('nearMeet-proj/meetup-event-finder-backend') {
                        sh 'docker build -t $BACKEND_IMAGE .'
                    }
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                script {
                    dir('nearMeet-proj/meetup-event-finder') {
                        sh 'docker build -t $FRONTEND_IMAGE .'
                    }
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: DOCKER_HUB_CREDENTIALS, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USER --password-stdin'
                    }
                }
            }
        }

        stage('Push Backend Image to Docker Hub') {
            steps {
                script {
                    sh 'docker tag $BACKEND_IMAGE $DOCKER_HUB_USER/nearmeet-backend:latest'
                    sh 'docker push $DOCKER_HUB_USER/nearmeet-backend:latest'
                }
            }
        }

        stage('Push Frontend Image to Docker Hub') {
            steps {
                script {
                    sh 'docker tag $FRONTEND_IMAGE $DOCKER_HUB_USER/nearmeet-frontend:latest'
                    sh 'docker push $DOCKER_HUB_USER/nearmeet-frontend:latest'
                }
            }
        }

        stage('Clean Up') {
            steps {
                sh 'docker system prune -f'
            }
        }
    }
}
