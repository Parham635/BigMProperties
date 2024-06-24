# BigMRentals Website

This project was developed as an internship assignment for BigMProperties. The website showcases rental properties in Michigan and includes information about the company and a contact form for potential clients.

## Project Overview

The BigMRentals website consists of four main pages:
1. **Home Page** (`index.html`)
2. **About Us Page** (`about.html`)
3. **Properties Page** (`properties.html`)
4. **Contact Us Page** (`contact.html`)

## Technologies Used

- **HTML**: For the structure and content of the website.
- **CSS**: For styling and layout of the website.
- **JavaScript**: For interactive elements (though minimal in this project).
- **Apache**: For hosting the website locally on a development machine.

## Hosting

The website is hosted locally using Apache. To set up the website on your local machine:

1. Install [Apache](https://httpd.apache.org/) if not already installed.
2. Place the `BigMRentals` directory in the Apache `htdocs` directory (typically found at `/var/www/html` on Linux or `C:\Apache24\htdocs` on Windows).
3. Start the Apache server.
4. Access the website by navigating to `http://localhost/BigMRentals` in your web browser.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/BigMRentals.git

3. **Navigate to the project directory:**

```sh
cd BigMRentals
```

3. **Place the project in your Apache htdocs directory and start the server:**

On Linux:

```sh
sudo cp -r BigMRentals /var/www/html/
sudo systemctl start apache2
```

On Windows:

```sh
xcopy BigMRentals C:\Apache24\htdocs /E /I /H
httpd.exe -k start
```

4. **Open your web browser and visit:**

```sh
http://localhost/BigMRentals
```
