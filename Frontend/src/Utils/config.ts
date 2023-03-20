class Config{
    public productsUrl= "http://localhost:3001/api/products/";
    public productsImagesUrl= "http://localhost:3001/api/products/Images/";
    public employeesUrl ="http://localhost:3001/api/employees/";
    public categoriesUrl ="http://localhost:3001/api/categories/";
    public contactUsUrl ="http://localhost:3001/api/contact-us/";
    public registersUrl ="http://localhost:3001/api/auth/register/";
    public loginUrl ="http://localhost:3001/api/auth/login/";
}

const appConfig = new Config(); //Singleton

export default appConfig;