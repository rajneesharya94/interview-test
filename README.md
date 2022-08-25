# interview-test

Simple application to save user & company details using NodeJs, MongoDb.



# Routes

POST : localhost:3000/allocateUser

# Req body:
{
    "companyId":"6304d359c5f1911ac951ba2e", // _id of company
    "userId":"6304d6623ab177e1d8461f11" //_id of user
}

_________________________________________________________________

DELETE: localhost:3000/deleteCompany

# Req Body:

{
    "companyId":"6304d2a1339e642cd3fbd45a"
}