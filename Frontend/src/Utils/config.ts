class Config{
    public productsUrl= "http://localhost:3030/api/products/";
    public productsImagesUrl= "http://localhost:3030/api/products/Images/";
    public employeesUrl ="http://localhost:3030/api/employees/";
    public categoriesUrl ="http://localhost:3030/api/categories/";
    public contactUsUrl ="http://localhost:3030/api/contact-us/";
    public registersUrl ="http://localhost:3030/api/auth/register/";
    public loginUrl ="http://localhost:3030/api/auth/login/";
}

const appConfig = new Config(); //Singleton

export default appConfig;