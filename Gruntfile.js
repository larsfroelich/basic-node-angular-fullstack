module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		stylus: {
			compile: {
                files: {
                    'public/css/app.css': [
                        'stylus/index.styl'
                    ]
                }
		  	}
		},
		watch: {
			grunt: { files: ['Gruntfile.js'] },
			stylus: {
				files: 'stylus/*.styl',
				tasks: ['stylus']
			}
		}
	});

  // Load the plugin
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['stylus','watch']);

};
