var commands = {};
      
      commands.HELP = function() {
        var output = helpText;
        return output;
      };

      commands.ABOUT = function() {
        var output = aboutText;
            return output;
      };

      commands.CONTACT = function() {
        var output = contactText;
            return output;
      };

      Terminal.init(document.getElementById("terminal"), commands);