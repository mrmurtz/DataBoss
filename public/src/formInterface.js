$(document).ready(function() {
  $.fn.serializeObject = function() {
      var o = new UserSelection();
      var a = this.serializeArray();
      $.each(a, function() {
          if (o[this.name] !== undefined) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      console.log(o);
      return o;
  };

$(function() {
    $('form').submit(function() {
      $("#cheat-sheet-content").toggle('show');
      var userSelection = $('form').serializeObject();
      console.log(userSelection);
      $('#result').append(marked(db_commands(userSelection)));
      $("#form-block").css('height', '100%');
      return false;
    });
  });
});

function db_commands(userSelection) { return "#### Set Up Your Project:\n\n" +
                  "##### **Install Rails gem**\n\n" +
                  "`$ gem install rails`\n\n" +
                  "##### **Set up new Rails app with PostgreSQL**\n\n" +
                  "`$ rails new " + userSelection.appName + " -d postgresql -T`\n\n" +
                  "##### **Build database:**\n\n" +
                  "`$ bin/rake db:create`\n\n" +
                  "Your Terminal should have the following output:\n\n" +
                  "Created database '" + userSelection.appName + "_development'\n\n" +
                  "Created database '" + userSelection.appName + "_test'\n\n" +
                  "#### Creating Models\n\n" +
                  "`$ bin/rails g model " + userSelection.tableName + " <property>:<data type> <property>:<data type>`\n\n" +
                  "This command:\n\n" +
                  "* creates a new model, which tells the app what a 'student' is and what properties (first name and last name) it has.\n\n" +
                  "* creates a **migration** which contains instructions for Rake ('Ruby `make`') to update the database.\n\n" +
                  "Run database migration to update your database with the newly created model/table:\n\n" +
                  "`$ bin/rake db:migrate`\n\n" +
                  "By default running `$ bin/rake db:migrate` will run in the development environment. To run migrations against another environment, e.g. the test environment run:\n\n" +
                  "`$ bin/rake db:migrate RAILS_ENV=test`\n\n";
}
