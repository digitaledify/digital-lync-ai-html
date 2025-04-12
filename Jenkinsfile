pipeline {
    agent {
    node {
         label 'digitaledify'
         }
     }  

    environment {
        deployBranch = "${env.BRANCH_NAME}"
        deployService = "your_deploying_qa_service"
    }  
    stages {
        stage('notification-slack') {
            steps {
                slackSend channel: 'deployments', 
                          color: '439FE0', 
                          message: "started ${JOB_NAME} ${BUILD_NUMBER} (<${BUILD_URL}|Open>)", 
                          teamDomain: 'kdigital-tech', 
                          tokenCredentialId: 'slack-id', 
                          username: 'de-crm'
            }
        }
        stage ('Approval to deploy into prod env') {
            steps {
                emailext    subject: "Deployment Approval for $deployBranch branch and $deployService service",
                            body: "<a href='${JENKINS_URL}/job/digitaledify/job/main/${BUILD_NUMBER}/input'>click to approve</a>",
                            to: 'devops@digital-edify.com',
                            mimeType: 'text/html',
                            attachLog: true
                script {
                    def Delay = input id: 'Deploy',
                        message: sh(script:'''echo "You are DEPLOYING -->$deployBranch<-- IN PRODUCTION"''', returnStdout: true).trim(),
                        submitter: 'uaserID1, userID2',
                        parameters: [
                                [$class: 'ChoiceParameterDefinition',
                                 choices: ['no','yes'].join('\n'),
                                 name: 'input',
                                 description: 'Please Select "YES" to Build or "NO" to Abort']
                        ]
                        echo "The answer is: ${Delay}"
                        if( "${Delay}" == "yes"){
                        sh'''echo "Deploying in prod"'''
                        } else {
                        sh """
                        echo "exiting not production ready branch"
                        exit 1
                        """
                        }
                }
            }
        }
        stage('Deploynibg to Vercel') {
            steps {
                script {

                    sh 'curl https://api.vercel.com/v1/integrations/deploy/prj_Ps4v4FkXBTECeTohCJxJr62Bs7Yg/MxVjaPCn7N'

                }
            }
        }
        stage('Build Logs') {
            steps {
                emailext body: 'Build logs for this Job',
                        subject: 'jenkins-notification',
                        to: 'devops@digital-edify.com',
                        attachLog: true
            }
        }
    }
}
