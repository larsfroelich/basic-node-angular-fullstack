module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
            toastr: {
                expand: true,
                cwd: "node_modules/toastr/build/",
                src: '**',
                dest: 'public/libs/toastr'
            },
            bootstrap: {
                expand: true,
                cwd: "node_modules/bootstrap/dist",
                src: '**',
                dest: 'public/libs/bootstrap/'
            },
            fontawesome: {
                expand: true,
                cwd: "node_modules/font-awesome/css",
                src: '**',
                dest: 'public/libs/font-awesome/'
            },
            fonts: {
                expand: true,
                cwd: "node_modules/font-awesome/fonts",
                src: '**',
                dest: 'public/libs/fonts/'
            },
            tether: {
                expand: true,
                cwd: "node_modules/tether/dist",
                src: '**',
                dest: 'public/libs/tether/'
            },
            jquery: {
                expand: true,
                cwd: "node_modules/jquery/dist",
                src: '**',
                dest: 'public/libs/jquery/'
            },
            angularUiRouter: {
                expand: true,
                cwd: "node_modules/@uirouter/angularjs/release",
                src: 'angular-ui-r*.js',
                dest: 'public/libs/angular-ui-router/'
            },
            angular: {
                expand: true,
                cwd: "node_modules/angular/",
                src: '**.js',
                dest: 'public/libs/angular/'
            },
            popper: {
                expand: true,
                cwd: "node_modules/popper.js/dist/umd",
                src: '**.js',
                dest: 'public/libs/popperjs/'
            }
        },
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
			},
            copy: {
                files: 'package.json',
                tasks: ['copy']
            }
		}
	});

	// Load the plugin
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task(s).
	grunt.registerTask('default', ['copy', 'stylus', 'watch']);
};

