{

    "Version": "2012-10-17",

    "Statement": [

        {

            "Sid": "VisualEditor0",

            "Effect": "Allow",

            "Action": [

                "s3:PutObject",

                "s3:GetObjectAcl",

                "s3:GetObject",

                "s3:PutBucketAcl",

                "s3:ListBucket",

                "s3:DeleteObject",

                "s3:GetBucketAcl",

                "s3:GetBucketLocation",

                "s3:PutObjectAcl"

            ],

            "Resource": [

                "arn:aws:s3:::<your bucket name>",

                "arn:aws:s3:::<your bucket name>/*"

            ]

        }

    ]

}
