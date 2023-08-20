pipeline {
     agent any
  
    stages {
        stage('Build') {    
            steps{
                echo "Building the code"
                //sh "git clone https://github.com/vemulavamsi/Scaffold.git"
                }
            }
         stage('Push Docker image to ECR') {
             steps {
                 script{
                    // sh "docker rmi -f learning111"
            sh "aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/g8i9m6o6"        
    
                     sh "docker build -t gani ."

                     sh "docker tag gani:latest public.ecr.aws/g8i9m6o6/gani:latest"

                     sh "docker push public.ecr.aws/g8i9m6o6/gani:latest"
                 }
         }
     }
        /*
        stage('Pull Docker image from ECR') {
            steps {
                script{
                        // sh "docker pull ${buildProps.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/node-repo:${env.BUILD_NUMBER}"
                        //sh "docker rm -f learning111"
                        // sh "docker run -itd -p 3000:3000 --name learning111 ${buildProps.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/node-repo:${env.BUILD_NUMBER}"
                   // Removing existing image
                    sh "docker rmi -f learning111"
                    // Pulling latest version of docker image
                    sh "docker pull public.ecr.aws/g8i9m6o6/learning111:latest"
                    
                    sh 'docker ps -f name=vamsi-Adi-practice -q | xargs --no-run-if-empty docker container stop'
                    sh 'docker container ls -a -fname=vamsi-Adi-practice -q | xargs -r docker container rm'
                    // creating container and port mapping
                    
                   // sh "docker run -d --name vamsi-Adi-practice -p 3000:3000 public.ecr.aws/g8i9m6o6/learning111:latest" 
                    //logs
                    sh "docker run -d -p 3000:3000 --name vamsi-Adi-practice --log-driver=awslogs --log-opt awslogs-region=us-east-1 --log-opt awslogs-group=practice public.ecr.aws/g8i9m6o6/learning111:latest"
                }
        }
    }
*/
 }
}

/*
//permission jason to create logs it need to attach in Iam role
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
*/