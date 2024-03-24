export interface Itrainers {

    _id: string;
    full_name: String,
    email: String,
    password: String,
    Cpassword: String,
    phone_number: String,
    birth_date: Date,
    age: Number,
    role:  String,
    salary: Number,
    profile_picture: String,
    newPlanProfilePicture?: File;
    client_ids: [
      full_name: String,
      email: String,
      phone_number: Number
    ]
}
