# QUIZ-BOARD
## Natasha Serem

### How to host a static website on Amazon Simple Storage Service(s3)
I used the above simple static site to demonstrate how to host a static website on Amazon Simple Storage Service. The following are steps used;

1. Sign in to the AWS Management Console and open Amazon S3 console 
 https://console.aws.amazon.com/s3/

2. Choose CREATE BUCKET
3. Enter the bucket name
4. Choose the Region you want to create the bucket.
5. Accept the default settigns and select CREATE.

### Enable Static Web Hosting
1. In the Bucket List, choose the bucket you want to enable static hosting.
2. Choose the PROPERTIES tab.
3. Under Static Web Hosting, choose EDIT.
4. Select the ENABLE radio button.
5. In the INDEX DOCUMENT, enter the file name of the index document of the static website you want to host. (The name of the index file of your site should be the same as the one you enter).
6. Provide and ERROR document, this will be technically error.html.
7. Save the changes.
8. Under Static Website Hosting, you should see the static website endpoint. This will be used to view the changes to your site once you have uploaded it.

### Edit Public Access Settings
1. Choose the name of the bucket you want to configure
2. Choose the PERMISSIONS tab
3. Under Block Public Access(bucket settings) choose EDIT
4. Clear Block all public access settings and choose SAVE CHANGES.
5. Before you complete this step, ensure you understand and accept the risks involved with allowing public access.

### Add a bucket policy
This grants public read access to your bucket. Follow the following steps;
1. Under the PERMISSIONS tab, choose Bucket Policy and select EDIT
2. To grant public read access for your website, copy the following bucket policy, and paste it in the Bucket policy editor.(THIS IS A STANDARD POLICY)

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::Bucket-Name/*" 
            ]
        }
    ]
}
REPLACE BUCKET NAME with YOUR BUCKET NAME
3. SAVE CHANGES.

### Upload Objects.
1. Choose Buckets
2. Select the bucket you want to use on the BUCKET LIST provided
3. Choose UPLOAD
4. In the Upload window, choose ADD FILE or ADD FOLDER, then choose OPEN
5. You can start uploading one by one preferably with index.html then progress to folders.
6. With the endpoint you were given at the Static Website Hosting stage, paste it on the browser. Each time you upload a file or folder, go refresh your end point and see the changes reflect.

I hope this helps you understand how to Host a static website on Amazon S3.

Below is my sample endpoint for what I did following the above Steps;

http://jsquizboard.s3-website-us-west-2.amazonaws.com/
