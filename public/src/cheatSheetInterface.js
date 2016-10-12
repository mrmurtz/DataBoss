$(document).ready(function() {
  $('form').submit(function(){
    $('#result').append(marked(db_commands));
  });
});

var db_commands = "## Commands:\n\n" +
                  "### Install Rails gem\n\n" +
                  "`$ gem install rails`\n\n" +
                  "### Set up new Rails app with PostgreSQL\n\n" +
                  "`$ rails new <your_app_name> -d postgresql -T`\n\n" +
                  "### Build database:\n\n" +
                  "`$ bin/rake db:create`\n\n" +
                  "Your Terminal should have the following output:\n\n" +
                  "Created database 'your_app_name_development'\n\n" +
                  "Created database 'your_app_name_test'\n\n" +
                  "### Creating Models\n\n" +
                  "`$ bin/rails g model <Table_name> <property>:<data type> <property>:<data type>`\n\n" +
                  "This command:\n\n" +
                  "* creates a new model, which tells the app what a 'student' is and what properties (first name and last name) it has.\n\n" +
                  "* creates a **migration** which contains instructions for Rake ('Ruby `make`') to update the database.\n\n" +
                  "Run database migration to update your database with the newly created model/table:\n\n" +
                  "`$ bin/rake db:migrate`\n\n" +
                  "By default running `$ bin/rake db:migrate` will run in the development environment. To run migrations against another environment, e.g. the test environment run:\n\n" +
                  "`$ bin/rake db:migrate RAILS_ENV=test`\n\n" +
                  "### Add column type as reference\n\n" +
                  "To create a new column type as reference to another table, e.g. table 'courses' should have a column to refer to table 'students', you can run the following:\n\n" +
                  "`$ bin/rails g migration AddStudentRefToCourses student:references`\n\n" +
                  "Run database migration to update your database:\n\n" +
                  "`$ bin/rake db:migrate`\n\n";
